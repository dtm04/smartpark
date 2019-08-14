# Decentralized Parking System
*Don MacPhail, Sugair Ali I Alsugair*

**Project Name**: SmartPark

**Team Name**: Senioritis

**Team Members**: 
- Don -- Developer


# Project Report

## Introduction
### What?
A Dapp to assist with event parking, commuter parking, paying, and reservations.  The idea is to make the process of finding a parking area much easier.  The app can help people avoid waiting in parking garages, or aimlessly looking for an available lot, and help them get to their location quicker.

### Why?
Experience with working in and commuting to the city has shown how antiquated and inefficient the parking process really is.  Especially if you would like to go to a concert or other event in the city, it can be hard to find a location.  SmartPark will help users find and pay for parking well ahead of time, and if anything causes a change in plans the parking can be released for another user.

### How?
SmartPark will be built on Ethereum network with smart contracts that can be deployed to the network. A simple web interface will be made to enable interaction between users and smart contract using various framework tools.

### Front End
HTML and Javascript (React)

### Back End
Web3js

### Tools
- Remix
- VS Code, Sublime, or Atom
- Git
- Google Drive

### Deliverables
1. Web App
- Users will interact via a web application.
- UI elements to view available lots and reserve a spot.
- Option to select date/time for parking.
2. Back-End API
- constructor
- isAvailable()
- addSpots() -- manager function
- reserveSpot() -- user function
- calculatePrice()

##Getting Started
### Install
Clone the repo and run `npm install` to get all the relevant node packages.  
Required:
	- ganache-cli
	- truffle
	- web3js

### Running
- Open a terminal and run ganache-cli, or start the ganache UI client.
- In a separate terminal navigate to /smartpark/backend/ and run `truffle compile` followed by `truffle migrate`

Now you should notice in ganache that there were some transactions and the contract will be deployed.  Next you'll need an address from Ganache to represent a user and an address from Truffle where the contract is deployed.  See the following screenshots for an idea of what to expect on Ganache.


![Ganache Accounts Screen](/appui/src/assets/accounts.png "Accounts")


![Ganache Conracts screen](/appui/src/assets/contracts.png "Contracts")


![Ganache Transaction Screen](/appui/src/assets/transactions.png "Transactions")


- Save a Ganache address (usually accouts[0]) and save the address from `truffle migrate` and update config.js in /appui/
- Navigate to the appui folder in the terminal and type `npm start` to interact with the UI.

## Video Demo
Currently uploaded to OneDrive.

### Plan
- Week 1: Implement smart contract
- Week 2: ??
- Week 3: Profit

### Related Work
Parkade.io a tool for users to find and rent parking spaces for companies 

ParkadeCoin use of invest in building and making parking space

