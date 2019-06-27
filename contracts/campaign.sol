pragma solidity ^0.5.0;

contract Campaign {
    struct Request {
        string description;
        uint amount;
        address payable recipient;
        bool completed;
        uint approvalsCount;
        mapping(address=>bool) approvers;
    }
    
    address public manager;
    uint public minContribution;
    mapping(address=>bool) public backers;
    Request[] public requests;
    uint public approversCount;
    
    constructor(uint _minContribution, address _manager) public {
        minContribution = _minContribution;
        manager = _manager;
    }
    
    function contribute() public payable {
        require(msg.value > minContribution);
        
        backers[msg.sender] = true;
        approversCount++;
    }
    
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }
    
    function createRequest(string memory description, uint amount, address payable recipient) public {
        require(msg.sender==manager,'test');
        Request memory newRequest = Request({
           description: description,
           amount: amount,
           recipient: recipient,
           completed: false,
           approvalsCount: 0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint requestId) public {
        // Must be a backer of the campaign 
        require(backers[msg.sender]);
        
        // Must not vote before
        require(!requests[requestId].approvers[msg.sender]);
        
        requests[requestId].approvers[msg.sender] = true;
        requests[requestId].approvalsCount++;
    }
    
    function finalzeRequest(uint requestId) public {
        require(msg.sender == manager);
        require(requests[requestId].approvalsCount > approversCount/2);
        require(!requests[requestId].completed);
        
        requests[requestId].recipient.transfer(requests[requestId].amount);
        requests[requestId].completed = true;
    }   
}
