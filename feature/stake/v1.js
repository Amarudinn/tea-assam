const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});

const stakeButton = document.getElementById('stakeButton');
const unstakeButton = document.getElementById('unstakeButton');
const stakeSection = document.getElementById('stakeSection');
const unstakeSection = document.getElementById('unstakeSection');

let stakeClicked = false;
let unstakeClicked = false;

unstakeButton.addEventListener('click', () => {
	if (unstakeClicked) {
		unstakeSection.classList.add('hidden');
	} else {
		unstakeSection.classList.remove('hidden');
		stakeSection.classList.add('hidden');
	}
	unstakeClicked = !unstakeClicked;
});

const aitStakeButton = document.getElementById('aitStakeButton');
const aitUnstakeButton = document.getElementById('aitUnstakeButton');
const aitStakeSection = document.getElementById('aitStakeSection');
const aitUnstakeSection = document.getElementById('aitUnstakeSection');

let aitStakeClicked = false;
let aitUnstakeClicked = false;

aitUnstakeButton.addEventListener('click', () => {
	if (aitUnstakeClicked) {
		aitUnstakeSection.classList.add('hidden');
	} else {
		aitUnstakeSection.classList.remove('hidden');
		aitStakeSection.classList.add('hidden');
	}
	aitUnstakeClicked = !aitUnstakeClicked;
});

const nativeStakingContract = '0x9A445726708a7e4C794918BaEc41C0c0B424D11C'; // Native Staking Contract
const aitContractAddress = '0xd8681C1F60Ba30982292CD22982Aa2A9f30adf2c'; // AIT Contract Address
const aitStakingContract = '0x522684126431A2aE26947d8D29c33357C62000E4'; // AIT Staking Contract
const claimAitContract = '0x08F80F8FFe972A49792b743594F65d7cA0d72c78'; // Claim AIT Token
const nativeContractABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newRewardRate",
				"type": "uint256"
			}
		],
		"name": "setRewardRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardClaimed",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "stake",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unstaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "unstakePartial",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "calculateReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getStakedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTotalReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SCALE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastClaimTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalReward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const aitContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const aitStakingContractABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newRewardRate",
				"type": "uint256"
			}
		],
		"name": "setRewardRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RewardClaimed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Staked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Unstaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "unstakePartial",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "balance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "calculateReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getStakedAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTotalReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rewardRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SCALE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastClaimTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalReward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const claimAitContractABI = [{ "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "FeeReceived", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newTotalToken", "type": "uint256" }], "name": "TotalTokenUpdated", "type": "event" }, { "inputs": [], "name": "claimFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "claimTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getTokenBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "hasClaimed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lastClaimTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_fee", "type": "uint256" }], "name": "setClaimFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setTokenAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "tokenAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

let web3;
let nativeContract;
let aitContract;
let aitStaking; 
let claimContract;
let accounts;

async function init() {
	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask is installed!');

		try {
			accounts = await ethereum.request({ method: 'eth_requestAccounts' });
			const account = accounts[0];
			console.log('Connected to MetaMask');
			console.log('Current account:', account);

			document.getElementById("connectWallet").style.display = 'none';
			document.getElementById("aitConnectWallet").style.display = 'none';
			document.getElementById("stakeUnstake").style.display = 'block';
			document.getElementById("aitStakeUnstake").style.display = 'block';

			updateConnectButton(account);
			initializeWeb3();
			updateAccountBalance();
			updateStakedAmount();
			updateRewardAmount();
			aitUpdateAccountBalance();
			aitUpdateStakedAmount();
			aitUpdateRewardAmount();
		} catch (error) {
			console.error('Failed to connect to MetaMask:', error);
		}
	} else {
		console.error('MetaMask is not installed!');
	}
}

function updateConnectButton(account) {
	const connectBtn = document.getElementById('connectButton');
	connectBtn.textContent = `${account.substring(0, 5)}...${account.substring(account.length - 5)}`;
}

async function initializeWeb3() {
	web3 = new Web3(window.ethereum);
	nativeContract = new web3.eth.Contract(nativeContractABI, nativeStakingContract);
	aitContract = new web3.eth.Contract(aitContractABI, aitContractAddress);
	aitStaking = new web3.eth.Contract(aitStakingContractABI, aitStakingContract);
	claimContract = new web3.eth.Contract(claimAitContractABI, claimAitContract);
}

async function updateAccountBalance() {
	const balanceElement = document.getElementById('balance');
	const ethBalance = await web3.eth.getBalance(accounts[0]);
	const formattedEthBalance = (ethBalance / 10 ** 18).toFixed(2);
	balanceElement.textContent = `${formattedEthBalance}`;
}

async function aitUpdateAccountBalance() {
	const aitBalanceElement = document.getElementById('aitbalance');
	const aitbalance = await aitContract.methods.balanceOf(accounts[0]).call();
	const aitFormattedBalance = (aitbalance / 10 ** 18).toFixed(0);
	aitBalanceElement.textContent = aitFormattedBalance;
}

function setMaxStakeAmount() {
	const balance = document.getElementById('balance').textContent;
	document.getElementById('stakeAmount').value = balance;
}

function setMaxUnstakeAmount() {
	const stakedAmount = document.getElementById('stakedAmount').textContent;
	document.getElementById('unstakeAmount').value = stakedAmount;
}

function aitSetMaxStakeAmount() {
	const aitBalance = document.getElementById('aitbalance').textContent;
	document.getElementById('aitStakeAmount').value = aitBalance;
}

function aitSetMaxUnstakeAmount() {
	const aitStakedAmount = document.getElementById('aitStakedAmount').textContent;
	document.getElementById('aitUnstakeAmount').value = aitStakedAmount;
}

async function stake() {
	const amount = document.getElementById('stakeAmount').value;

	try {
		const stakedAmount = web3.utils.toWei(amount);
		const stakeTx = await nativeContract.methods.stake().send({ from: accounts[0], value: stakedAmount });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Staking successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Staking successful');
		updateAccountBalance();
		updateStakedAmount();
		updateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to stake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to stake:', error);
	}
}

async function approve(amount) {
	try {
		const approvedAmount = web3.utils.toWei(amount);
		const approvalTx = await aitContract.methods.approve(aitStakingContract, approvedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Approval successful",
			showConfirmButton: false,
			timer: 1000
		});
		console.log('Approval successful');
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to approve",
			showConfirmButton: false,
			timer: 1500
		});
		console.error('Failed to approve:', error);
		throw error;
	}
}

async function aitStake() {
	const amount = document.getElementById('aitStakeAmount').value;

	try {
		await approve(amount);
		const aitStakedAmount = web3.utils.toWei(amount);
		const stakeTx = await aitStaking.methods.stake(aitStakedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Staking successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Staking successful');
		aitUpdateAccountBalance();
		aitUpdateStakedAmount();
		aitUpdateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to stake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to stake:', error);
	}
}

async function unstakePartial() {
	const amount = document.getElementById('unstakeAmount').value;
	const unstakedAmount = web3.utils.toWei(amount);

	try {
		const unstakeTx = await nativeContract.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Unstake successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Partial unstake successful');
		updateAccountBalance();
		updateStakedAmount();
		updateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to unstake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to unstake:', error);
	}
}

async function aitUnstakePartial() {
	const amount = document.getElementById('aitUnstakeAmount').value;
	const aitUnstakeAmount = web3.utils.toWei(amount);

	try {
		const unstakeTx = await aitStaking.methods.unstakePartial(aitUnstakeAmount).send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Unstake successful",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Partial unstake successful');
		aitUpdateAccountBalance();
		aitUpdateStakedAmount();
		aitUpdateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to unstake",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to unstake:', error);
	}
}

async function claimReward() {
	try {
		const claimTx = await nativeContract.methods.claimReward().send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Reward claimed",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Reward claimed');
		updateAccountBalance();
		updateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to claim reward",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to claim reward:', error);
	}
}

async function aitClaimReward() {
	try {
		const claimTx = await aitStaking.methods.claimReward().send({ from: accounts[0] });
		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Reward claimed",
			showConfirmButton: false,
			timer: 2000
		});
		console.log('Reward claimed');
		aitUpdateAccountBalance();
		aitUpdateRewardAmount();
	} catch (error) {
		Swal.fire({
			position: "top-center",
			icon: "error",
			title: "Failed to claim reward",
			showConfirmButton: false,
			timer: 2000
		});
		console.error('Failed to claim reward:', error);
	}
}

async function updateStakedAmount() {
	const stakedAmountElement = document.getElementById('stakedAmount');
	const stakedAmount = await nativeContract.methods.getStakedAmount(accounts[0]).call();
	const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(2);
	stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateRewardAmount() {
	const rewardAmountElement = document.getElementById('rewardAmount');
	const rewardAmount = await nativeContract.methods.getReward(accounts[0]).call();
	const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
	rewardAmountElement.textContent = formattedRewardAmount;
}

async function aitUpdateStakedAmount() {
	const aitStakedAmountElement = document.getElementById('aitStakedAmount');
	const aitStakedAmount = await aitStaking.methods.getStakedAmount(accounts[0]).call();
	const aitFormattedStakedAmount = (aitStakedAmount / 10 ** 18).toFixed(0);
	aitStakedAmountElement.textContent = aitFormattedStakedAmount;
}

async function aitUpdateRewardAmount() {
	const aitRewardAmountElement = document.getElementById('aitRewardAmount');
	const aitRewardAmount = await aitStaking.methods.getReward(accounts[0]).call();
	const aitFormattedRewardAmount = (aitRewardAmount / 10 ** 18).toFixed(4);
	aitRewardAmountElement.textContent = aitFormattedRewardAmount;
}

async function claimTokens() {
	try {
		const accounts = await web3.eth.requestAccounts();
		const userAddress = accounts[0];
		const claimTokensContract = new web3.eth.Contract(claimAitContractABI, claimAitContract);
		const result = await claimTokensContract.methods.claimTokens().send({ from: userAddress });
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

document.getElementById('claimButton').addEventListener('click', claimTokens);

window.addEventListener('load', async () => {
	if (window.ethereum) {
		init();
	}
});
