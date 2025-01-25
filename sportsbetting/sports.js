let web3;
let userAccount;
const CONTRACT_ADDRESS = '0xCCb0b9088A065B1724ef0d8465d2dAD3ff33f6C4'; // Replace with your contract address
const ABI = [
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_option",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "placeBet",
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
		"inputs": [],
		"name": "winDraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winTeamA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winTeamB",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawOwner",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allUsers",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getDepositBalance",
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
		"name": "totalDeposited",
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
		"name": "userBalances",
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userBets",
		"outputs": [
			{
				"internalType": "enum SportsBetting.BetOption",
				"name": "option",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Replace with your contract's ABI

let contract;

async function connectMetamask() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];

            // Initialize the contract after connecting to Metamask
            contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

            document.getElementById('connectButton').style.display = 'none';
            document.getElementById('walletConnect').style.display = 'block';
            document.getElementById('connectButton').disabled = true;
            document.getElementById('hDua').style.display = 'none';
            document.getElementById('card').style.display = 'block';

            updateBalance();
            updateDepositBalance();
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert('Please install Metamask!');
    }
}

async function updateBalance() {
    if (userAccount) {
        const balance = await web3.eth.getBalance(userAccount);
        const etherBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(4);
        document.getElementById('balance').textContent = etherBalance;
    }
}

async function updateDepositBalance() {
    try {
        const depositBalance = await contract.methods.getDepositBalance(userAccount).call();
        document.getElementById('depositBalance').textContent = web3.utils.fromWei(depositBalance, 'ether');
    } catch (error) {
        console.error('Failed to fetch deposit balance:', error);
    }
}

async function depositEth() {
    const depositAmount = document.getElementById('depositAmount').value;

    if (!depositAmount || depositAmount <= 0) {
        alert('Please enter a valid deposit amount');
        return;
    }

    const depositValue = web3.utils.toWei(depositAmount, 'ether');

    try {
        await web3.eth.sendTransaction({
            from: userAccount,
            to: CONTRACT_ADDRESS,
            value: depositValue
        });
        alert('Deposit successful!');
        updateBalance();
        updateDepositBalance();
    } catch (error) {
        console.error('Deposit failed:', error);
        alert('Failed to deposit. Check console for details.');
    }
}

async function placeBet(option) {
    const betAmount = document.getElementById('betAmount').value;

    if (!betAmount || betAmount <= 0) {
        alert('Please enter a valid bet amount');
        return;
    }

    const betValue = web3.utils.toWei(betAmount, 'ether');

    try {
        await contract.methods.placeBet(option, betValue).send({ from: userAccount });
        alert('Bet placed successfully!');
        updateDepositBalance();
    } catch (error) {
        console.error('Bet placement failed:', error);
        alert('Failed to place bet. Check console for details.');
    }
}

async function withdrawEth() {
    try {
        await contract.methods.withdraw().send({ from: userAccount });
        alert('Withdrawal successful!');
        updateBalance();
        updateDepositBalance();
    } catch (error) {
        console.error('Withdrawal failed:', error);
        alert('Failed to withdraw. Check console for details.');
    }
}

const startDate = new Date(2025, 0, 25, 24, 0, 0); // January 25, 2025, 20:18:00
    const endDate = new Date(2025, 0, 26, 14, 0, 0);   // January 25, 2025, 20:30:00
    const timerDisplay = document.getElementById("timerDisplay");
    const input = document.getElementById("betAmount");
    const buttons = [
        document.getElementById("button1"),
        document.getElementById("button2"),
        document.getElementById("button3")
    ];

    function updateUI() {
        const now = new Date();

        if (now < startDate) {
            timerDisplay.textContent = `Betting starts in: ${formatTime(startDate - now)}`;
        } else if (now >= startDate && now <= endDate) {
            timerDisplay.textContent = `Betting closed in: ${formatTime(endDate - now)}`;
            input.disabled = false;
            buttons.forEach(button => button.disabled = false);
        } else {
            timerDisplay.textContent = "Betting has closed.";
            input.disabled = true;
            buttons.forEach(button => button.disabled = true);
        }
    }

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    }

    setInterval(updateUI, 1000); // Update every second

document.getElementById('connectButton').addEventListener('click', connectMetamask);