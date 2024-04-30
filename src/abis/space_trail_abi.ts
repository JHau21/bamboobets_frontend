const abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "vrfCoordinator",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "keyHash",
				type: "bytes32",
			},
			{
				internalType: "address",
				name: "initialOwner",
				type: "address",
			},
			{
				internalType: "uint64",
				name: "subscriptionId",
				type: "uint64",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "have",
				type: "address",
			},
			{
				internalType: "address",
				name: "want",
				type: "address",
			},
		],
		name: "OnlyCoordinatorCanFulfill",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "OwnableInvalidOwner",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "OwnableUnauthorizedAccount",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "wager",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "maxWager",
				type: "uint256",
			},
		],
		name: "WagerAboveLimit",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "player",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "enum SpaceTrail.TrailChoice",
				name: "choice",
				type: "uint8",
			},
		],
		name: "BetPlaced",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "player",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amountWon",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "win",
				type: "bool",
			},
		],
		name: "BetResolved",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "FundsDeposited",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [],
		name: "depositFunds",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum SpaceTrail.TrailChoice",
				name: "choice",
				type: "uint8",
			},
		],
		name: "getKellyFraction",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "getMaxWager",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum SpaceTrail.TrailChoice",
				name: "choice",
				type: "uint8",
			},
		],
		name: "getPayoutMultiplier",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum SpaceTrail.TrailChoice",
				name: "choice",
				type: "uint8",
			},
		],
		name: "getSuccessChance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum SpaceTrail.TrailChoice",
				name: "choice",
				type: "uint8",
			},
		],
		name: "placeBet",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "requestId",
				type: "uint256",
			},
			{
				internalType: "uint256[]",
				name: "randomWords",
				type: "uint256[]",
			},
		],
		name: "rawFulfillRandomWords",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "withdrawFunds",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
];

export default abi;
