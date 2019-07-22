pragma solidity ^0.5.0;

contract ParkingLot {
    // manager of the parking lot
    address public manager;
    ParkingSpot[] public allSpots;
    uint public numSpots;
    Location public lotLocation;
    //mapping(ParkingSpot => bool) public available;
    mapping(address => ParkingSpot) public owners;
    mapping(address => Location) public addresses;

    struct Location {
        string streetAddress;
        string city;
        uint zip;
        string description;
    }

    struct ParkingSpot {
        // owner (of the parking SPOT)
        address owner;
        bool occupied;
        Location loc;
    }
    
    constructor(address _manager, uint _numSpots) public {
        manager = _manager;
        numSpots = _numSpots;
    }

    function setLocation(string addr, string city, uint zip, string desc) public {
        // require msg.sender = owner.
        Location memory loc = Location({
            streetAddress: addr,
            city: city,
            zip: zip,
            description: desc
        });
    }
    
    // assign an open spot to an address
    // payable?  not sure.
    function reserveSpot(address owner) public payable {
        // should probably require spot is available or throw error is occupied
        // OR owner: msg.sender
        ParkingSpot memory ps = ParkingSpot({
            owner: owner,
            occupied: true
        });
        allSpots.push(ps);
        numSpots--;
    }

    function revokeSpot(address owner) public {
        require(msg.sender == manager, "Only manager may perform this action.");
        // TODO: release spot & make available
    }

    // TODO: all other parking lot functions.
}

/*
contract LotManager {
    // MAYBE ?
}
*/