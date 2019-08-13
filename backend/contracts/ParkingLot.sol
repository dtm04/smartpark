pragma solidity ^0.5.0;
contract ParkingPlaces { 
    
    address payable public manager;
    uint public blockCosts;
    uint public numSpots;
    uint public availableSpots;
    Spot[] public reservedSpots;
    string public location;
    mapping (address => bool) isOccupied;
    
    struct Spot {
        address parker;
        uint numHours;
    }
    
    constructor(uint _blockCosts, uint _numSpots) public {
        manager = msg.sender;
        blockCosts = _blockCosts;
        numSpots = _numSpots;
        availableSpots = _numSpots;
    }
    
    function isAvailableSpot() view public returns (bool exists) {
        return (availableSpots > 0);
    }

    function addSpots(address payable _manager, uint amount) payable public {
        require(msg.sender == _manager, "Only a manager can add slots!");
        numSpots += amount;
        availableSpots += amount;
    }
    
    function calculatePrice (uint numHours) view public 
        returns (uint cost) {
            require(numHours < 24, "You can only reserve a spot for 1 day.");
            return blockCosts * numHours;
    }
    
    function reserveSlot(uint numHours) public payable {
        //payReservation(msg.sender, numHours);
        reservedSpots.push(Spot(msg.sender, numHours));
        isOccupied[msg.sender] = true;
        availableSpots--;
        //uint price = numHours * blockCosts;
        manager.transfer(msg.value);
    }
    
    /*
    function payReservation(address payable parker, uint time) private {
        uint amount = time * blockCosts;
        //require(msg.value <= amount, "Message value is too low.");
        manager.transfer(amount);
        parker.transfer(msg.value - amount);
    }
    */
}