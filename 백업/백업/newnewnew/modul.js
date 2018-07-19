
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
RealEstateTransactionContract = web3.eth.contract(abi);
RealEstateTransactionStorage = RealEstateTransactionContract.at(contractAddress);

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

var imageArray = new Array();
var Tag;
var count = 0; //상품 배열 최대크기
var index = 0; //인덱스용 (상품 삽입)


//동적생성 전역
var div1;
var a;
var tagetimg;
var divcontainer;
var p1itle;
var p1info;
var p1price;
var p1owner;
var create = 0;
var lTag;
var Productindex;
var tagid;

//함수 시작
function startApp() {
	RealEstateTransactionContract = web3.eth.contract(abi);
	RealEstateTransactionStorage = RealEstateTransactionContract.at(contractAddress);
	//   document.getElementById('contractAddr').innerHTML = getLink(contractAddress);
	var catchindex = location.href.split("#");
	if (catchindex.length > 1) {
		tagid = catchindex[1];
	}
	else {
		tagid = "tag0"
	}
	LoadProducts(tagid);
}

//상품 진열자리 동적생성
function createLocation() {
	div1 = document.createElement("div");
	div1.setAttribute("id", "TGTT" + create)
	div1.setAttribute("data-layout", "ch8 ec4")
	document.getElementById("TGT").appendChild(div1);

	a = document.createElement("a");
	a.setAttribute("id", "TGTTT" + create);
	// a.setAttribute("href","#");
	a.setAttribute("class", "MOD_FEATURE_Container");
	a.setAttribute("onclick", "OnClickProduct(this.id)");
	// a.setAttribute("onclick","self.location='http://192.168.0.77:7001/newnewnew/ClickProduct.html';");
	document.getElementById("TGTT" + create).appendChild(a);

	tagetimg = document.createElement("img");
	tagetimg.setAttribute("id", "Pic" + create);
	tagetimg.setAttribute("class", "MOD_FEATURE_Picture");
	tagetimg.setAttribute("alt", "");
	document.getElementById("TGTTT" + create).appendChild(tagetimg);

	divcontainer = document.createElement("div");
	divcontainer.setAttribute("id", "TGTTTT" + create);
	divcontainer.setAttribute("class", "MOD_FEATURE_TextContainer");
	document.getElementById("TGTTT" + create).appendChild(divcontainer);

	p1itle = document.createElement("p");
	p1itle.setAttribute("id", "PicTitle" + create);
	p1itle.setAttribute("class", "MOD_FEATURE_Title");
	p1itle.setAttribute("data-theme", "_ts2");
	document.getElementById("TGTTTT" + create).appendChild(p1itle);

	p1info = document.createElement("p");
	p1info.setAttribute("id", "PicInfo" + create);
	p1info.setAttribute("class", "MOD_FEATURE_Description");
	document.getElementById("TGTTTT" + create).appendChild(p1info);


	p1price = document.createElement("p");
	p1price.setAttribute("id", "PicPrice" + create);
	p1price.setAttribute("class", "MOD_FEATURE_Description");
	document.getElementById("TGTTTT" + create).appendChild(p1price);

	p1owner = document.createElement("p");
	p1owner.setAttribute("id", "Picowner" + create);
	p1owner.setAttribute("class", "MOD_FEATURE_Description");
	document.getElementById("TGTTTT" + create).appendChild(p1owner);

	lTag = document.createElement("p");
	lTag.setAttribute("id", "Tag" + create);
	lTag.setAttribute("class", "MOD_FEATURE_Description");
	document.getElementById("TGTTTT" + create).appendChild(lTag);

	Productindex = document.createElement("p");
	Productindex.setAttribute("id", "Productindex" + create);
	Productindex.setAttribute("class", "MOD_FEATURE_Description");
	document.getElementById("TGTTTT" + create).appendChild(Productindex);
}

function OnClickProduct(proindex) {
	var table = proindex.split('TTT');
	var realpruindex = document.getElementById("Productindex" + table[1]).textContent;

	window.open("ClickProduct.html?create:" + realpruindex, "_self");
}
//모든 상품 불러오기
function LoadProducts(_tagid) {

	RealEstateTransactionStorage.GetProdctsSize(function (e, r) {
		//상품배열 크기 받아오기
		count = r.c["0"]
		//상품배열 크기가 현재 상품 진열크기보다 크면 호출

		//배열의 크기만큼 상품 받아오기

		for (var i = 0; i < count; i++) {
			RealEstateTransactionStorage.productArray(i, function (e, r) {
				if (tagid == "tag0") {
					createLocation(create);
					InsertProduct(r);
					create++
				}
				else if (tagid == "tag1" && r[3] == "아파트") {
					createLocation(create);
					InsertProduct(r);
					create++
				}
				else if (tagid == "tag2" && r[3] == "빌딩") {
					createLocation(create);
					InsertProduct(r);
					create++
				}
				else if (tagid == "tag3" && r[3] == "빌라") {
					createLocation(create);
					InsertProduct(r);
					create++
				}
				else if (tagid == "tag4" && r[3] == "주택") {
					createLocation(create);
					InsertProduct(r);
					create++
				}

			})

		}

	})
}

function InsertProduct(r) {
	var Pic = document.getElementById('Pic' + index);
	imageArray = r[5].split('##');
	var convert = r[2] / 10 ** 18;
	document.getElementById('PicPrice' + index).innerHTML = convert + ' <span style="color: blueviolet; font-weight:bold">ETH</span>';
	document.getElementById('PicInfo' + index).innerHTML = r[1];
	document.getElementById('PicTitle' + index).innerHTML = r[4];
	document.getElementById('Tag' + index).innerHTML = r[3];
	document.getElementById('Productindex' + index).innerHTML = "No." + r[7];
	let ShowProducturl = "http://ipfs.io/ipfs/" + imageArray[0];
	Pic.src = ShowProducturl;
	Pic.width = 200;
	Pic.height = 200;
	index++;
}


function TagChange(_tagid) {
	document.getElementById('TGT').innerHTML = "";
	history.replaceState({}, null, location.pathname);
	window.open("Main.html?#" + _tagid, "_self");
}

function getLink(addr) {
	return '<a target="_blank" href=https://testnet.etherscan.io/address/' + addr + '>' + addr + '</a>';
}