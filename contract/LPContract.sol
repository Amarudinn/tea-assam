// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20.sol";

contract StakingLPContract {
    struct Stake {
        uint256 amount;
        uint256 startTime;
        uint256 lastClaimTime;
        uint256 totalReward;
        uint256 pendingReward; // Menyimpan reward yang belum diklaim
    }

    mapping(address => Stake) public stakes;

    address public owner;
    address public lpTokenAddress;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    uint256 public rewardRate = 200000; // Representasi 0.02985 dalam skala 1e5
    uint256 public constant SCALE = 1e5;

    uint256 public balance;

    constructor(address _lpTokenAddress) {
        owner = msg.sender;
        lpTokenAddress = _lpTokenAddress;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function setRewardRate(uint256 newRewardRate) external onlyOwner {
        require(newRewardRate >= 0, "Reward rate must be non-negative");
        rewardRate = newRewardRate;
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");

        IERC20 lpToken = IERC20(lpTokenAddress);
        require(lpToken.transferFrom(msg.sender, address(this), amount), "LP token transfer failed");

        Stake storage userStake = stakes[msg.sender];

        // Update pendingReward dengan reward baru sebelum mengubah jumlah stake
        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        // Update jumlah stake dan waktu staking baru (lastClaimTime tidak diubah di sini)
        userStake.amount += amount;
        userStake.startTime = block.timestamp;

        emit Staked(msg.sender, amount);
    }

    function unstake() external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No active stake found");

        uint256 amount = userStake.amount;

        // Hitung reward sebelum mengubah data stake
        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        require(address(this).balance >= userStake.pendingReward, "Insufficient ETH balance in contract");

        // Transfer reward dan reset jumlah stake
        uint256 totalRewardToSend = userStake.pendingReward;
        userStake.totalReward += totalRewardToSend;
        userStake.pendingReward = 0;
        userStake.amount = 0;

        IERC20 lpToken = IERC20(lpTokenAddress);
        require(lpToken.transfer(msg.sender, amount), "LP token transfer failed");

        payable(msg.sender).transfer(totalRewardToSend);

        emit Unstaked(msg.sender, amount);
    }

    function unstakePartial(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount >= amount, "Insufficient staked amount");

        // Hitung reward sebelum mengubah data stake
        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        uint256 proportionalReward = (userStake.pendingReward * amount) / userStake.amount;

        require(address(this).balance >= proportionalReward, "Insufficient ETH balance in contract");

        // Update jumlah stake dan reward
        userStake.amount -= amount;
        userStake.pendingReward -= proportionalReward;

        IERC20 lpToken = IERC20(lpTokenAddress);
        require(lpToken.transfer(msg.sender, amount), "LP token transfer failed");

        payable(msg.sender).transfer(proportionalReward);

        emit Unstaked(msg.sender, amount);
    }

    function claimReward() external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.amount > 0, "No active stake found");

        uint256 reward = calculateReward(msg.sender);
        userStake.pendingReward += reward;

        uint256 totalClaimableReward = userStake.pendingReward;
        require(totalClaimableReward > 0, "No reward available");
        require(address(this).balance >= totalClaimableReward, "Insufficient ETH balance in contract");

        // Transfer reward
        userStake.totalReward += totalClaimableReward;
        userStake.pendingReward = 0;
        userStake.lastClaimTime = block.timestamp;

        payable(msg.sender).transfer(totalClaimableReward);

        emit RewardClaimed(msg.sender, totalClaimableReward);
    }

    function calculateReward(address user) public view returns (uint256) {
        Stake storage userStake = stakes[user];

        if (userStake.amount == 0) {
            return 0;
        }

        uint256 stakingTime = block.timestamp - userStake.lastClaimTime;
        uint256 reward = (userStake.amount * stakingTime * rewardRate) /
            (100 * (1 days) * SCALE); // Sesuaikan dengan skala

        return reward;
    }

    function getStakedAmount(address user) external view returns (uint256) {
        return stakes[user].amount;
    }

    function getTotalReward(address user) external view returns (uint256) {
        Stake storage userStake = stakes[user];
        uint256 reward = calculateReward(user);

        return userStake.totalReward + userStake.pendingReward + reward;
    }

    function getReward(address user) external view returns (uint256) {
        return calculateReward(user) + stakes[user].pendingReward;
    }

    function depositETH() external payable {
        require(msg.value > 0, "Must send ETH");
        balance += msg.value;
    }

    receive() external payable {}
}
