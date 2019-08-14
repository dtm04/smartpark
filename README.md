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
- Front End (complete)
- Back End (partially complete)
- Documentation (complete)

### Related Work
Parkade.io a tool for users to find and rent parking spaces for companies 

ParkadeCoin use of invest in building and making parking space

##Getting Started
### Install
Clone the repo and run `npm instal` to get all the relevant node packages.  
Required:
	- ganache-cli
	- truffle
	- web3js

### Running
- Open a terminal and run ganache-cli, or start the ganache UI client.
- In a separate terminal naviagate to /smartpark/backend/ and run `truffle compile` followed by `truffle migrate`

Now you should notice in ganache that there were some transactions and the contract will be deployed.  Next you'll need an address from Ganache to represent a user and an address from Truffle where the contract is deployed.  See the following screenshots for an idea of what to expect on Ganache.

![Ganache Accounts Screen](/appui/src/assets/accounts.png "Accounts")
![Ganache Conracts screen](/appui/src/assets/contracts.png "Contracts")
![Ganache Transaction Screen](/appui/src/assets/transactions.png "Transactions")

- Save a Ganache address (usually accouts[0]) and save the address from `truffle migrate` and update config.js in /appui/
- Navigate to the appui folder in the terminal and type `npm start` to interact with the UI.

## Video Demo
Currently uploaded to OneDrive.

### Our key contributions are:
Finding in busy places like airports, malls, universities
Instead of spending lots of time searching for a spot the app helps you find it quickly.
Immediate transfer of spots and renting out 

### Deliverables
1. Web App
- Users will interact via a web application.
- Reserve spots
- Pay for spots
- Manager approve parking requests
- Manager approve trading spots
- Users request a spot transition
- Back End
2. An API to interact with the SmartPark contract.
- createNewSpot api
- createPrakingRequest
- createSpotTransfer
- FinalizingRequests
- Smart Contract

### Plan
- Week 1: Implement smart contract
- Week 2: Implement back and front end.
- Week 3: Test and presentation, final report due.
