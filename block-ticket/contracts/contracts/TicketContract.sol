// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketContract {
    address public owner;

    // Struct to represent a user
    struct User {
        string username;
        address walletAddress;
        bytes32 secretKeyHash; // Hash of the secret key
        bool isOrganiser;
    }

    // Struct to represent an event
    struct Event {
        string eventName;
        address organizer;
    }

    // Mapping to store users
    mapping(address => User) public users;

    // Mapping to store events
    mapping(uint256 => Event) public events;

    // Mapping to store users by username
    mapping(string => User) public usersByUsername;

    // Counter for event IDs
    uint256 public eventCounter;

    // Event to log user registration
    event UserRegistered(address indexed userAddress, string username);

    // Event to log event creation
    event EventCreated(uint256 indexed eventId, string eventName, address indexed organizer);

    // Event to log organizer creation
    event OrganizerCreated(address indexed organizerAddress, string organizerName);

    // Modifier to ensure only the contract owner can execute certain functions
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to generate a random secret key
    function generateRandomSecretKey(bytes32 _blockHash) internal view returns (bytes32) {
        return keccak256(abi.encodePacked(_blockHash, block.timestamp, msg.sender));
    }

// Function to register a new user
function registerUser(string memory _username, bool _isOrganiser) public {
    require(bytes(_username).length > 0, "Username cannot be empty");
    require(usersByUsername[_username].walletAddress == address(0), "Username already registered");

    // Generate a new address based on the current user's address and some randomness
    address newUserAddress = address(uint160(uint256(keccak256(abi.encodePacked(msg.sender, blockhash(block.number))))));

    // Get the block hash of the current block
    bytes32 blockHash = blockhash(block.number);

    // Generate a random secret key for the user
    bytes32 secretKey = generateRandomSecretKey(blockHash);

    // Create a new user
    User memory newUser = User({
        username: _username,
        walletAddress: newUserAddress,
        secretKeyHash: keccak256(abi.encodePacked(secretKey)),
        isOrganiser: _isOrganiser
    });

    // Store the user in the mapping
    users[newUserAddress] = newUser;
    usersByUsername[_username] = newUser;

    // Emit the UserRegistered event
    emit UserRegistered(newUserAddress, _username);
}


// Function to create a new event
function createEvent(string memory _eventName, string memory _organizerName) public onlyOwner returns (uint256) {
    require(bytes(_eventName).length > 0, "Event name cannot be empty");
    require(bytes(_organizerName).length > 0, "Organizer name cannot be empty");

    // Increment eventCounter to get a unique event ID
    eventCounter++;

    // Get the user based on the provided organizer name
    User storage organizer = usersByUsername[_organizerName];

    // Check if the organizer exists and is an organizer
    require(organizer.walletAddress != address(0), "Organizer does not exist");
    require(organizer.isOrganiser, "User is not an organizer");

    // Create a new event
    Event memory newEvent = Event({
        eventName: _eventName,
        organizer: organizer.walletAddress
    });

    // Store the event in the mapping
    events[eventCounter] = newEvent;

    // Emit the EventCreated event
    emit EventCreated(eventCounter, _eventName, organizer.walletAddress);

    return eventCounter;
}

    // Function to get event details by ID
    function getEventDetails(uint256 _eventId) public view returns (string memory, address) {
        return (events[_eventId].eventName, events[_eventId].organizer);
    }

    // Function to get user details by address
    function getUserDetails(address _userAddress) public view returns (string memory, address, bytes32) {
        return (users[_userAddress].username, users[_userAddress].walletAddress, users[_userAddress].secretKeyHash);
    }
    
    // Function to check if a user with a given username exists
    function checkUserExistence(string memory _username) public view returns (bool, string memory, string memory) {
    return (
        usersByUsername[_username].walletAddress != address(0),
        usersByUsername[_username].username,
        _username
    );
    }
}
