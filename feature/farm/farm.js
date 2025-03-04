const menuButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById('navbar-cta');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const farmTab = document.getElementById('farmTab');
const myFarmTab = document.getElementById('myFarmTab');
const farm = document.getElementById('farm');
const myFarm = document.getElementById('myFarm');

farmTab.addEventListener('click', () => {
    farmTab.classList.add('border-b-2', 'border-green-400');
    myFarmTab.classList.remove('border-b-2', 'border-green-400');
    farm.classList.remove('hidden');
    myFarm.classList.add('hidden');
});

myFarmTab.addEventListener('click', () => {
    myFarmTab.classList.add('border-b-2', 'border-green-400');
    farmTab.classList.remove('border-b-2', 'border-green-400');
    myFarm.classList.remove('hidden');
    farm.classList.add('hidden');
});

document.getElementById('stakeContainer').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSection')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSection');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIcon');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainer').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSection')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSection');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstake');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('stakeContainerDua').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSectionDua')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSectionDua');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconDua');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainerDua').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSectionDua')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSectionDua');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstakeDua');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('stakeContainerTiga').addEventListener('click', function (event) {
    if (event.target.closest('#stakeSectionTiga')) {
        return;
    }

    const stakeSection = document.getElementById('stakeSectionTiga');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconTiga');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

document.getElementById('unstakeContainerTiga').addEventListener('click', function (event) {
    if (event.target.closest('#unstakeSectionTiga')) {
        return;
    }

    const stakeSection = document.getElementById('unstakeSectionTiga');
    stakeSection.classList.toggle('hidden');

    const arrowIcon = document.getElementById('arrowIconUnstakeTiga');
    if (stakeSection.classList.contains('hidden')) {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-left');
    } else {
        arrowIcon.classList.remove('fa-angle-left');
        arrowIcon.classList.add('fa-angle-down');
    }
});

const AIT_TOKEN = '0xaE89beCd7A6EBbD91d826f7b79630D522684B15E'; // LP TEA/AIT
const AIT_STAKING_ADDRESS = '0x2781c8D6bdCD124CD0CbCCbA95bF9939456d0939'; // TEA/AIT STAKING ADDRESS
const GTEA_TOKEN = '0x08EAf17A42F675DAce0736B86DF3BBD89E23bB3B'; //LP TEA/GTEA
const GTEA_STAKING_ADDRESS = '0x0AAbD59c5B3cDB4AebC36061665f2F0a3c0f50f3'; // TEA/GTEA STAKING ADDRESS
const TM_TOKEN = '0x8A55151a346b001DD225Bd5D95DfECd185Bfe499'; //LP TEA/TM
const TM_STAKING_ADDRESS = '0xE8B8692c3360D8Bcd3930B042b390156Fe558FCA'; // TEA/TM STAKING ADDRESS

const AIT_TOKEN_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const AIT_STAKING_ABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lpTokenAddress",
				"type": "address"
			}
		],
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
		"name": "lpTokenAddress",
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

const GTEA_TOKEN_ABI = [
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

const GTEA_STAKING_ABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lpTokenAddress",
				"type": "address"
			}
		],
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
		"name": "lpTokenAddress",
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
			},
			{
				"internalType": "uint256",
				"name": "pendingReward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const TM_TOKEN_ABI = [
    {
        "inputs": [],
        "payable": false,
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
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            }
        ],
        "name": "Mint",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0In",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1In",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0Out",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1Out",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint112",
                "name": "reserve0",
                "type": "uint112"
            },
            {
                "indexed": false,
                "internalType": "uint112",
                "name": "reserve1",
                "type": "uint112"
            }
        ],
        "name": "Sync",
        "type": "event"
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
        "constant": true,
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MINIMUM_LIQUIDITY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
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
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "factory",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {
                "internalType": "uint112",
                "name": "_reserve0",
                "type": "uint112"
            },
            {
                "internalType": "uint112",
                "name": "_reserve1",
                "type": "uint112"
            },
            {
                "internalType": "uint32",
                "name": "_blockTimestampLast",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_token0",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token1",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "kLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "price0CumulativeLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "price1CumulativeLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "skim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount0Out",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount1Out",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "swap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "sync",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token0",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token1",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const TM_STAKING_ABI = [
	{
		"inputs": [],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "depositETH",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lpTokenAddress",
				"type": "address"
			}
		],
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
		"name": "lpTokenAddress",
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
			},
			{
				"internalType": "uint256",
				"name": "pendingReward",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let AIT_TOKEN_CONTRACT;
let AIT_STAKING_CONTRACT;
let GTEA_TOKEN_CONTRACT;
let GTEA_STAKING_CONTRACT;
let TM_TOKEN_CONTRACT;
let TM_STAKING_CONTRACT;
let account;

async function init() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');

        try {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected to MetaMask');
            console.log('Current account:', account);

            document.getElementById("connectWalletStakeContent").style.display = 'none';
			document.getElementById("connectWalletUnstakeContent").style.display = 'none';
			document.getElementById("stakeContentSection").style.display = 'block';
			document.getElementById("unstakeContentSection").style.display = 'block';

            updateConnectButton(account);
            initializeWeb3();
            updateAccountBalance();
            updateStakedAmount();
            updateRewardAmount();
            duaUpdateAccountBalance();
            updateStakedAmountDua();
            updateRewardAmountDua();
            tigaUpdateAccountBalance();
            updateStakedAmountTiga();
            updateRewardAmountTiga();
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
    AIT_TOKEN_CONTRACT = new web3.eth.Contract(AIT_TOKEN_ABI, AIT_TOKEN);
    AIT_STAKING_CONTRACT = new web3.eth.Contract(AIT_STAKING_ABI, AIT_STAKING_ADDRESS);
    GTEA_TOKEN_CONTRACT = new web3.eth.Contract(GTEA_TOKEN_ABI, GTEA_TOKEN);
    GTEA_STAKING_CONTRACT = new web3.eth.Contract(GTEA_STAKING_ABI, GTEA_STAKING_ADDRESS);
    TM_TOKEN_CONTRACT = new web3.eth.Contract(TM_TOKEN_ABI, TM_TOKEN);
    TM_STAKING_CONTRACT = new web3.eth.Contract(TM_STAKING_ABI, TM_STAKING_ADDRESS);
}

async function updateAccountBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = await AIT_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
    const formattedBalance = (balance / 10 ** 18).toFixed(6);
    balanceElement.textContent = formattedBalance;
}

async function duaUpdateAccountBalance() {
    const balanceElement = document.getElementById('balanceDua');
    const balance = await GTEA_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
    const formattedBalance = (balance / 10 ** 18).toFixed(6);
    balanceElement.textContent = formattedBalance;
}

async function tigaUpdateAccountBalance() {
    const balanceElement = document.getElementById('balanceTiga');
    const balance = await TM_TOKEN_CONTRACT.methods.balanceOf(accounts[0]).call();
    const formattedBalance = (balance / 10 ** 18).toFixed(6);
    balanceElement.textContent = formattedBalance;
}

function setMaxStakeAmount() {
    const balance = document.getElementById('balance').textContent;
    document.getElementById('stakeAmount').value = balance;
}

function setMaxStakeAmountDua() {
    const balance = document.getElementById('balanceDua').textContent;
    document.getElementById('stakeAmountDua').value = balance;
}

function setMaxStakeAmountTiga() {
    const balance = document.getElementById('balanceTiga').textContent;
    document.getElementById('stakeAmountTiga').value = balance;
}

function setMaxUnstakeAmount() {
    const stakedAmount = document.getElementById('stakedAmount').textContent;
    document.getElementById('unstakeAmount').value = stakedAmount;
}

function setMaxUnstakeAmountDua() {
    const stakedAmount = document.getElementById('stakedAmountDua').textContent;
    document.getElementById('unstakeAmountDua').value = stakedAmount;
}

function setMaxUnstakeAmountTiga() {
    const stakedAmount = document.getElementById('stakedAmountTiga').textContent;
    document.getElementById('unstakeAmountTiga').value = stakedAmount;
}

async function approve(tokenContract, stakingAddress, amount) {
    try {
        const approvedAmount = web3.utils.toWei(amount);
        await tokenContract.methods.approve(stakingAddress, approvedAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Approval successful",
            showConfirmButton: false,
            timer: 1000
        });
        console.log('Approval successful');
    } catch (error) {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Failed to approve",
            showConfirmButton: false,
            timer: 1500
        });
        console.error('Failed to approve:', error);
        throw error;
    }
}

async function stake() {
    const amount = document.getElementById('stakeAmount').value;

    try {
        await approve(AIT_TOKEN_CONTRACT, AIT_STAKING_ADDRESS, amount);

        const stakedAmount = web3.utils.toWei(amount);
        await AIT_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

        Swal.fire({
            position: "top",
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
            position: "top",
            icon: "error",
            title: "Failed to stake",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to stake:', error);
    }
}

async function stakeDua() {
    const amount = document.getElementById('stakeAmountDua').value;

    try {
        await approve(GTEA_TOKEN_CONTRACT, GTEA_STAKING_ADDRESS, amount);

        const stakedAmount = web3.utils.toWei(amount);
        await GTEA_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Staking successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Staking successful');
        duaUpdateAccountBalance();
        updateStakedAmountDua();
        updateRewardAmountDua();
    } catch (error) {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Failed to stake",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to stake:', error);
    }
}

async function stakeTiga() {
    const amount = document.getElementById('stakeAmountTiga').value;

    try {
        await approve(TM_TOKEN_CONTRACT, TM_STAKING_ADDRESS, amount);

        const stakedAmount = web3.utils.toWei(amount);
        await TM_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0], gas: 300000 });

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Staking successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Staking successful');
        tigaUpdateAccountBalance();
        updateStakedAmountTiga();
        updateRewardAmountTiga();
    } catch (error) {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Failed to stake",
            showConfirmButton: false,
            timer: 2000
        });
        console.error('Failed to stake:', error);
    }
}

async function approveTiga(amount) {
    try {
        const approvedAmount = web3.utils.toWei(amount);
        await TM_TOKEN_CONTRACT.methods.approve(TM_STAKING_ADDRESS, approvedAmount).send({ from: accounts[0] });
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
    }
}

async function stakeTiga() {
    const amount = document.getElementById('stakeAmountTiga').value;

    try {
        await approveTiga(amount);
        const stakedAmount = web3.utils.toWei(amount);
        await TM_STAKING_CONTRACT.methods.stake(stakedAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Staking successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Staking successful');
        tigaUpdateAccountBalance();
        updateStakedAmountTiga();
        updateRewardAmountTiga();
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
        await AIT_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
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

async function unstakePartialDua() {
    const amount = document.getElementById('unstakeAmountDua').value;
    const unstakedAmount = web3.utils.toWei(amount);

    try {
        await GTEA_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Unstake successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Partial unstake successful');
        duaUpdateAccountBalance();
        updateStakedAmountDua();
        updateRewardAmountDua();
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

async function unstakePartialTiga() {
    const amount = document.getElementById('unstakeAmountTiga').value;
    const unstakedAmount = web3.utils.toWei(amount);

    try {
        await TM_STAKING_CONTRACT.methods.unstakePartial(unstakedAmount).send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Unstake successful",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Partial unstake successful');
        tigaUpdateAccountBalance();
        updateStakedAmountTiga();
        updateRewardAmountTiga();
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
        await AIT_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
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

async function claimRewardDua() {
    try {
        await GTEA_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Reward claimed",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Reward claimed');
        duaUpdateAccountBalance();
        updateRewardAmountDua();
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

async function claimRewardTiga() {
    try {
        await TM_STAKING_CONTRACT.methods.claimReward().send({ from: accounts[0] });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Reward claimed",
            showConfirmButton: false,
            timer: 2000
        });
        console.log('Reward claimed');
        tigaUpdateAccountBalance();
        updateRewardAmountTiga();
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
    const stakedAmount = await AIT_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
    const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(4);
    stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateStakedAmountDua() {
    const stakedAmountElement = document.getElementById('stakedAmountDua');
    const stakedAmount = await GTEA_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
    const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(4);
    stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateStakedAmountTiga() {
    const stakedAmountElement = document.getElementById('stakedAmountTiga');
    const stakedAmount = await TM_STAKING_CONTRACT.methods.getStakedAmount(accounts[0]).call();
    const formattedStakedAmount = (stakedAmount / 10 ** 18).toFixed(4);
    stakedAmountElement.textContent = formattedStakedAmount;
}

async function updateRewardAmount() {
    const rewardAmountElement = document.getElementById('rewardAmount');
    const rewardAmount = await AIT_STAKING_CONTRACT.methods.getReward(accounts[0]).call();
    const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
    rewardAmountElement.textContent = formattedRewardAmount;
}

async function updateRewardAmountDua() {
    const rewardAmountElement = document.getElementById('rewardAmountDua');
    const rewardAmount = await GTEA_STAKING_CONTRACT.methods.getReward(accounts[0]).call();
    const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
    rewardAmountElement.textContent = formattedRewardAmount;
}

async function updateRewardAmountTiga() {
    const rewardAmountElement = document.getElementById('rewardAmountTiga');
    const rewardAmount = await TM_STAKING_CONTRACT.methods.getReward(accounts[0]).call();
    const formattedRewardAmount = (rewardAmount / 10 ** 18).toFixed(4);
    rewardAmountElement.textContent = formattedRewardAmount;
}

window.addEventListener('load', async () => {
    if (window.ethereum) {
        init();
    }
});