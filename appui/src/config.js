import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// Replace '' with a real account from ganache
let account0 = "0xF2cFE132e3Feb5645031a552Ea4FFF51197d820B";
// Replace [] with rating ABI obtained by truffle console. Only the part between [] (inclusive)
// TODO: update the ABI when the parking lot contract is complete!!!
let ABI = [
	{
		constant: true,
		inputs: [],
		name: "availableSpots",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "manager",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "numSpots",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [],
		name: "blockCosts",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: true,
		inputs: [[Object]],
		name: "reservedSpots",
		outputs: [[Object], [Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		inputs: [[Object], [Object]],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor"
	},
	{
		constant: true,
		inputs: [],
		name: "isAvailableSpot",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [[Object], [Object]],
		name: "addSpots",
		outputs: [],
		payable: true,
		stateMutability: "payable",
		type: "function"
	},
	{
		constant: true,
		inputs: [[Object]],
		name: "calculatePrice",
		outputs: [[Object]],
		payable: false,
		stateMutability: "view",
		type: "function"
	},
	{
		constant: false,
		inputs: [[Object]],
		name: "reserveSlot",
		outputs: [],
		payable: true,
		stateMutability: "payable",
		type: "function"
	}
];

// Replace ''  with rating address obtained by truffle console
let contractAddr = "0x7C7dC38C6Ca547DD713b515B20Ac8d827959b4b8";

// Initialize the rating contract with web3
// Reference: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
const Contract = new web3.eth.Contract(ABI, contractAddr);

export { Contract, account0 };
