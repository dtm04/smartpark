import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

// Replace '' with a real account from ganache
let account0 = ''
// Replace [] with rating ABI obtained by truffle console. Only the part between [] (inclusive)
// TODO: update the ABI when the parking lot contract is complete!!!
let ratingABI = [
	{
		constant: true,
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ name: '', type: 'uint256' }],
		name: 'requests',
		outputs: [
			{ name: 'description', type: 'string' },
			{ name: 'amount', type: 'uint256' },
			{ name: 'recipient', type: 'address' },
			{ name: 'completed', type: 'bool' },
			{ name: 'approvalsCount', type: 'uint256' },
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'approversCount',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'minContribution',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [{ name: '', type: 'address' }],
		name: 'backers',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ name: '_minContribution', type: 'uint256' },
			{ name: '_manager', type: 'address' },
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		constant: false,
		inputs: [],
		name: 'contribute',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getContractBalance',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{ name: 'description', type: 'string' },
			{ name: 'amount', type: 'uint256' },
			{ name: 'recipient', type: 'address' },
		],
		name: 'createRequest',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ name: 'requestId', type: 'uint256' }],
		name: 'approveRequest',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [{ name: 'requestId', type: 'uint256' }],
		name: 'finalzeRequest',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
]
// Replace ''  with rating address obtained by truffle console
let ratingAddress = '0x45ebb8c45F908e8B5aDf09CA2bF91a950d0A64A5'

// Initialize the rating contract with web3
// Reference: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
const ratingContract = new web3.eth.Contract(ratingABI, ratingAddress)

export { ratingContract, account0 }
