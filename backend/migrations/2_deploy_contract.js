var Lot = artifacts.require("./ParkingLot.sol");

module.exports = function(deployer, network, accounts) {
	// TODO: code ParkingLot.sol and all necessary functions
	// TODO: need valid address to migrate, or change ParkingLot constructor
	const manager = accounts[3];
	const minC = 10;
	deployer.deploy(Lot, manager, minC);
}