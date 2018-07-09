var contractAddress = '0xb12867809f800f6ea2cf4646abb9a28b3f227756';
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_seller",
				"type": "address"
			}
		],
		"name": "BuyRequestListPush",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "favoriteProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "score",
				"type": "uint256"
			}
		],
		"name": "SellerEvaluation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_applicant",
				"type": "address"
			},
			{
				"name": "_span",
				"type": "uint256"
			}
		],
		"name": "SetAllowMyDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_tell",
				"type": "uint256"
			}
		],
		"name": "setBuyer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "SetRoomconAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_val",
				"type": "uint256"
			}
		],
		"name": "SetRoomconValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_tell",
				"type": "uint256"
			}
		],
		"name": "setSeller",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "myaddress",
				"type": "address"
			}
		],
		"name": "setTransOwner",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_DocumentName",
				"type": "string"
			},
			{
				"name": "_DocumentImageHashsrc",
				"type": "string"
			},
			{
				"name": "_DocumentImageInfo",
				"type": "string"
			}
		],
		"name": "SetUpdateMyDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "product_index",
				"type": "uint256"
			},
			{
				"name": "_ImageHashsrc",
				"type": "string"
			},
			{
				"name": "_ProductAddress",
				"type": "string"
			},
			{
				"name": "_ProductInfo",
				"type": "string"
			},
			{
				"name": "_Price",
				"type": "uint256"
			},
			{
				"name": "_Tag",
				"type": "string"
			},
			{
				"name": "_ProductName",
				"type": "string"
			}
		],
		"name": "SetUpdateProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_DocumentName",
				"type": "string"
			},
			{
				"name": "_DocumentImageHashsrc",
				"type": "string"
			},
			{
				"name": "_DocumentImageInfo",
				"type": "string"
			}
		],
		"name": "SetUploadMyDocument",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ImageHashsrc",
				"type": "string"
			},
			{
				"name": "_ProductAddress",
				"type": "string"
			},
			{
				"name": "_ProductInfo",
				"type": "string"
			},
			{
				"name": "_Price",
				"type": "uint256"
			},
			{
				"name": "_Tag",
				"type": "string"
			},
			{
				"name": "_ProductName",
				"type": "string"
			}
		],
		"name": "SetUploadProduct",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "buyerDetail",
		"outputs": [
			{
				"name": "flag",
				"type": "bool"
			},
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "Tell",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "DocumentArray",
		"outputs": [
			{
				"name": "DocumentName",
				"type": "string"
			},
			{
				"name": "DocumentImageHashsrc",
				"type": "string"
			},
			{
				"name": "DocumentImageInfo",
				"type": "string"
			},
			{
				"name": "Documentowner",
				"type": "address"
			},
			{
				"name": "Documentnumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "favoriteProductresult",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_person",
				"type": "address"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getBuyerDocument",
		"outputs": [
			{
				"name": "_allowReference",
				"type": "bool"
			},
			{
				"name": "_approveBlockNo",
				"type": "uint256"
			},
			{
				"name": "_refLimitBlockNo",
				"type": "uint256"
			},
			{
				"name": "_applicant",
				"type": "address"
			},
			{
				"name": "_DocumentName",
				"type": "string"
			},
			{
				"name": "_DocumentImageHashsrc",
				"type": "string"
			},
			{
				"name": "_DocumentImageInfo",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDocumentList",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getMyAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "GetMyProduct",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetMyProductnumber",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetProdctsSize",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getRoomconStateValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetRoomcontractSize",
		"outputs": [
			{
				"name": "count",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSellerScore",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getType",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "IndexToContract",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "IndexToOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "IndexToPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productArray",
		"outputs": [
			{
				"name": "ProductAddress",
				"type": "string"
			},
			{
				"name": "ProductInfo",
				"type": "string"
			},
			{
				"name": "Price",
				"type": "uint256"
			},
			{
				"name": "Tag",
				"type": "string"
			},
			{
				"name": "ProductName",
				"type": "string"
			},
			{
				"name": "ImageHashsrc",
				"type": "string"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "Productnumber",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "RoomcontractList",
		"outputs": [
			{
				"name": "transaddr",
				"type": "address"
			},
			{
				"name": "buyer",
				"type": "address"
			},
			{
				"name": "seller",
				"type": "address"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "product_index",
				"type": "uint256"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "statevalue",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "sellerDetail",
		"outputs": [
			{
				"name": "flag",
				"type": "bool"
			},
			{
				"name": "Tell",
				"type": "uint256"
			},
			{
				"name": "reliability",
				"type": "uint256"
			},
			{
				"name": "Status_Numberofpeople",
				"type": "uint256"
			},
			{
				"name": "Status_sum",
				"type": "uint256"
			},
			{
				"name": "Status_avg",
				"type": "uint256"
			},
			{
				"name": "id",
				"type": "string"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var RealEstateTransactionContract;
var RealEstateTransactionStorage;

var transContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "members",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellingPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "con_owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Allclose",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "deadline",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			}
		],
		"name": "pay",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "close",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOpened",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_new",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_members",
				"type": "address"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "salesVolum",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "sellingPrice",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "deadline",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "EscrowStart",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ConfirmedPayment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldaddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newaddr",
				"type": "address"
			}
		],
		"name": "TransferOwnership",
		"type": "event"
	}
]);
var transaddress;