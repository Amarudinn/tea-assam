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
        const etherBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(2);
        document.getElementById('balance').textContent = etherBalance;
    }
}

async function updateDepositBalance() {
    try {
        const depositBalance = await contract.methods.getDepositBalance(userAccount).call();
        const formattedBalance = (web3.utils.fromWei(depositBalance, 'ether') * 1).toFixed(2);
        document.getElementById('depositBalance').textContent = formattedBalance;
    } catch (error) {
        console.error('Failed to fetch deposit balance:', error);
    }
}

async function depositEth() {
    const depositAmount = document.getElementById('depositAmount').value;

    if (!depositAmount || depositAmount <= 0) {
		Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Please enter a valid deposit amount",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const depositValue = web3.utils.toWei(depositAmount, 'ether');

    try {
        await web3.eth.sendTransaction({
            from: userAccount,
            to: CONTRACT_ADDRESS,
            value: depositValue
        });
		Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Deposit successful!",
            showConfirmButton: false,
            timer: 1500
        });
        updateBalance();
        updateDepositBalance();
    } catch (error) {
        console.error('Deposit failed:', error);
		Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to deposit",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

async function placeBet(option) {
    const betAmount = document.getElementById('betAmount').value;

    if (!betAmount || betAmount <= 0) {
		Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Please enter a valid bet amount",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    const betValue = web3.utils.toWei(betAmount, 'ether');

    try {
        await contract.methods.placeBet(option, betValue).send({ from: userAccount });
		Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Bet placed successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        updateDepositBalance();
    } catch (error) {
        console.error('Bet placement failed:', error);
		Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to place bet",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

async function withdrawEth() {
    try {
        await contract.methods.withdraw().send({ from: userAccount });
		Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Withdrawal successful!",
            showConfirmButton: false,
            timer: 1500
        });
        updateBalance();
        updateDepositBalance();
    } catch (error) {
        console.error('Withdrawal failed:', error);
		Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Failed to withdraw. Check console for details",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

const startDate = new Date(2025, 1, 5, 11, 0, 0); // January 25, 2025, 20:18:00
    const endDate = new Date(2025, 1, 6, 7, 0, 0);   // January 25, 2025, 20:30:00
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
            timerDisplay.textContent = `Betting closes in: ${formatTime(endDate - now)}`;
            input.disabled = false;
            buttons.forEach(button => button.disabled = false);
        } else {
            timerDisplay.textContent = "Betting is closed.";
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

    setInterval(updateUI, 1000);

		const historyButton = document.getElementById("historyButton");
		const menu = document.getElementById("menu");
		const closeButton = document.getElementById("closeButton");
	
		const showMenu = (event) => {
		  event.preventDefault();
		  menu.classList.remove("hidden");
		};
	
		const hideMenu = () => {
		  menu.classList.add("hidden");
		};
	
		historyButton.addEventListener("click", showMenu);
	
		closeButton.addEventListener("click", hideMenu);
		document.addEventListener("click", (event) => {
		  if (!menu.contains(event.target) && event.target !== historyButton) {
			hideMenu();
		  }
		});

document.getElementById('connectButton').addEventListener('click', connectMetamask);