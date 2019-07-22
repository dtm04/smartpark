var Lot = artifacts.require("./ParkingLot.sol");

module.exports = function(deployer, network, accounts) {
	//console.log('ACCOUNTS: ', accounts);
	const manager = accounts[0];
	const minC = 10;
	deployer.deploy(Lot, minC, manager);
}