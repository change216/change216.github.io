
const express = require('express');
const logger = require('morgan');
const path = require('path');
var Web3 = require("web3");
var fs = require("fs");
var ejs = require('ejs');
const app = express();
var bodyParser = require('body-parser');



web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/d9f61d07bbba4305a96356217b70cffe"));
var Contract = web3.eth.contract([
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
		"type": "function"}]);
var PStorage = Contract.at('0xb12867809f800f6ea2cf4646abb9a28b3f227756');
app.use(express.static(__dirname ));

app.use(express.static(path.join(__dirname, 'html')));
app.use(logger('dev'));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/Main.html'));
  
});
app.get('/users',(req,res) => {
  req.query.limit = req.query.limit || 10
  const limit = parseInt(req.query.limit, 10)
  if(Number.isNaN(limit)){
    res.status(400).end();
  }else{
    res.json(users.slice(0, limit));
  }
})
app.get('/Product/:ProductIndex', function(req,res){
	var ProductIndex = req.params.ProductIndex;
	// res.send(ProductIndex);
	let prudct = PStorage.productArray(ProductIndex);
	res.send(String(prudct));
})
app.get('/Products', function(req,res){
	
	var Productarray = new Array();
	let Psize = PStorage.GetProdctsSize();
	// for(var i = 0; i < PStorage.GetProdctsSize();i++){
	// 	Productarray.push(PStorage.productArray(i));
	// }
	// res.send(String(Productarray));
	for(var i = 0; i < Psize;i++){
		Productarray.push(PStorage.productArray(i));
	}
	res.send(String(Productarray));
	
})

app.get("/getInfo", function(req, res){
	console.log('들어옴');
    var details = PStorage.GetProdctsSize.call();
    res.send(details);
})
app.get('/test/:No', (req, res) => {
	var ProductIndex = req.params.No;
	res.sendFile(path.join(__dirname + '/ClickProduct.html'));
	
});

app.listen(7001, () => {
	
  console.log("Server Running");
});