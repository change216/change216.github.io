pragma solidity ^0.4.11;

import "https://github.com/change216/change216.github.io/trans.sol";

contract Members {
    
    Product[] public productArray;
    Document[] public DocumentArray;
    BuyRequest[] public BuyRequestList;
    uint256 ProductIndex  = 0;
    uint256 DocumentIndex = 0;
   
    
    struct seller {
        bool flag;
        uint256 Tell;
        uint256 reliability;
        uint256 Status_Numberofpeople;
        uint256 Status_sum;
        uint256 Status_avg;
        string id;
        string name;
        uint256[] Productnumber;
        uint256[] documentnumber;
        
    }
    
    struct buyer {
        bool flag;
        string id;
        string name;
        uint256 Tell;
        uint256[] favorite;
        uint256[] documentnumber;
        
    }
    
   struct Product{
      string ProductAddress;
      string ProductInfo;
      uint256 Price;
      string Tag;
      string ProductName;
      string ImageHashsrc;
      address owner;
      uint256 Productnumber;
   }
   
    struct Document{
      string DocumentName;
      string DocumentImageHashsrc;  
      string DocumentImageInfo;
      address Documentowner;
      uint256 Documentnumber;
    }
    
    struct Roomcontract {
        address transaddr;
        address buyer;
        address seller;
        uint256 price;
        
        uint blocknum;
       
    }
    
    struct BuyRequest {
        address buyer;
        address product_owner;
        uint256 product_index;
    }

    //본인 확인 정보
    struct AllowMyDocument 
    {
        bool allowReference;
        uint256 approveBlockNo;
        uint256 refLimitBlockNo;
        address applicant; 
       
    }

    //============================================================
     mapping(address=> seller) public sellerDetail;
     mapping(address=> buyer) public buyerDetail;
     mapping(address=> Roomcontract) roomcontract_Detail;
     mapping(string => address) myaddress;
     mapping(address => AllowMyDocument) allowmydocument;
    
    function getMyAddress(string _id) public constant returns (address){
         myaddress[_id];
        return myaddress[_id];
    }
    
    function SetAllowMyDocument(address _applicant, uint256 _span)
    {
        allowmydocument[msg.sender].allowReference = true;
        allowmydocument[msg.sender].approveBlockNo = block.number;
        allowmydocument[msg.sender].refLimitBlockNo = block.number + _span;
        allowmydocument[msg.sender].applicant = _applicant;
 
    }
    function favoriteProduct(uint256 _index){
        buyerDetail[msg.sender].favorite.push(_index);
    } 
    function favoriteProductresult()public constant returns(uint256 []){
       return buyerDetail[msg.sender].favorite;
    } 
    
    function BuyRequestListPush(uint256 _index, address _owner){
        BuyRequestList.push(BuyRequest({
            buyer:msg.sender,
            product_owner: _owner,
            product_index:_index
        }));
    }

    function getBuyerDocument(address _person, uint256 _index) public constant returns (
                                                                    bool _allowReference,
                                                                    uint256 _approveBlockNo,
                                                                    uint256 _refLimitBlockNo,
                                                                    address _applicant,
                                                                    
                                                                    string _DocumentName,
                                                                    string _DocumentImageHashsrc,  
                                                                    string _DocumentImageInfo) {
        address ThissDocumentOwner= DocumentArray[_index].Documentowner;
        
        _allowReference =  allowmydocument[_person].allowReference;
        _approveBlockNo =  allowmydocument[_person].approveBlockNo;
        _refLimitBlockNo = allowmydocument[_person].refLimitBlockNo;
        _applicant = allowmydocument[_person].applicant;
        
         if (((msg.sender == _applicant)&&(_allowReference ==true)&&(block.number < _refLimitBlockNo)) ||(msg.sender == ThissDocumentOwner) || (msg.sender == _person))
        {
             Document storage returnDocument = DocumentArray[_index];
            _DocumentName = returnDocument.DocumentName;
            _DocumentImageHashsrc = returnDocument.DocumentImageHashsrc;
            _DocumentImageInfo = returnDocument.DocumentImageInfo;
        }
    }
    
    
     function setSeller(string _name, string _id, uint256 _tell) {
        sellerDetail[msg.sender].flag = true;
        buyerDetail[msg.sender].flag = false;
        sellerDetail[msg.sender].name= _name;
        sellerDetail[msg.sender].id= _id;
        sellerDetail[msg.sender].Tell= _tell;
        
        myaddress[_id] = msg.sender;
    }
    
     function setBuyer(string _name, string _id, uint256 _tell) {
        buyerDetail[msg.sender].flag = true;
        sellerDetail[msg.sender].flag = false;
        buyerDetail[msg.sender].name= _name;
        buyerDetail[msg.sender].id= _id;
         buyerDetail[msg.sender].Tell= _tell;
        myaddress[_id] = msg.sender;
    }
    
    function SetUploadMyDocument(string _DocumentName,string _DocumentImageHashsrc,string _DocumentImageInfo){
        DocumentArray.push(Document({
        DocumentName: _DocumentName,
        DocumentImageHashsrc: _DocumentImageHashsrc,
        DocumentImageInfo: _DocumentImageInfo,
        Documentnumber: DocumentIndex,
        Documentowner: msg.sender
    }));
    
    if(getType(msg.sender)<0) throw;
    
    if(getType(msg.sender)==0)
        buyerDetail[msg.sender].documentnumber.push(DocumentIndex);
    if(getType(msg.sender)==1)
        sellerDetail[msg.sender].documentnumber.push(DocumentIndex);
    
    DocumentIndex++;
    }
    
    function getDocumentList() public constant returns (uint256[]) {
        
        if(getType(msg.sender)<0) throw;
    
        if(getType(msg.sender)==0)
           return buyerDetail[msg.sender].documentnumber;
        if(getType(msg.sender)==1)
            return sellerDetail[msg.sender].documentnumber;
    }
    
  
    function getType(address addr) public constant returns(int256) {
        if(buyerDetail[addr].flag)
            return 0;
        else if(sellerDetail[addr].flag)
            return 1;
        else
            return -1;
    }
    
    function GetProdctsSize() public constant returns(uint count) {
        return productArray.length;
    }
    
    function SetUploadProduct(string _ImageHashsrc,string _ProductAddress,string _ProductInfo,uint256 _Price,string _Tag,string _ProductName) public {
        
      productArray.push(Product({
      ProductAddress: _ProductAddress,
      ImageHashsrc: _ImageHashsrc,
      ProductInfo:  _ProductInfo,
      Price:      _Price * 1 ether,
      Tag:        _Tag,
      ProductName:_ProductName,
      Productnumber: ProductIndex ,
      owner:      msg.sender //판매자 주소
      }));
      
     sellerDetail[msg.sender].Productnumber.push(ProductIndex);
      ProductIndex++;
      
    }
    
     function SetUpdateProduct(uint256 product_index,string _ImageHashsrc,string _ProductAddress,string _ProductInfo,uint256 _Price,string _Tag,string _ProductName)public{
       
        if(productArray[product_index].owner != msg.sender) throw;
        if(sha3(_ImageHashsrc) != sha3(""))
           { productArray[product_index].ImageHashsrc = _ImageHashsrc;}
        if(sha3(_ProductAddress) != sha3(""))
            { productArray[product_index].ProductAddress = _ProductAddress;}
        
        productArray[product_index].ProductInfo = _ProductInfo;
        
        if(_Price != 0)
           { productArray[product_index].Price = _Price * 1 ether;}
        if(sha3(_Tag) != sha3(""))
           { productArray[product_index].Tag = _Tag;}
        if(sha3(_ProductName) != sha3(""))
            {productArray[product_index].ProductName = _ProductName;}
    }
    
    
    function GetMyProduct(uint256 _index)public constant returns(string ,uint256,string,string,string,address,uint256){
    Product storage returnproduct = productArray[_index];
    return (returnproduct.ProductInfo,returnproduct.Price,returnproduct.Tag,returnproduct.ProductName,returnproduct.ImageHashsrc,
    returnproduct.owner,returnproduct.Productnumber);
    
    }
    
    function IndexToPrice(uint256 _index) public constant returns(uint256){
       return productArray[_index].Price;
       
        //     for(uint i =0;i< productArray.length;i++){
        //     if(sha3(productArray[i].ProductName) == sha3(productname)){
        //         return productArray[i].Price;
        //     }
        // }
    }
    
    function IndexToOwner(uint256 _index) public constant returns(address){
         return productArray[_index].owner;
        
    }
    
    
    function setTransOwner(uint256 _index ,address myaddress) {
        productArray[_index].owner = myaddress;
    }
    
    function setRoomContract(Trans _trans, address buyer, address seller, uint256 price){
        roomcontract_Detail[_trans].transaddr = _trans;
        roomcontract_Detail[_trans].buyer = buyer;
        roomcontract_Detail[_trans].seller = seller;
        roomcontract_Detail[_trans].price = price;
        roomcontract_Detail[_trans].blocknum = block.number;
        
    }
    
    function getRoomContract(Trans _trans) public constant returns (address , address , uint256, uint256 ){
       return(roomcontract_Detail[_trans].buyer,
        roomcontract_Detail[_trans].seller,
        roomcontract_Detail[_trans].price,
        roomcontract_Detail[_trans].blocknum);
    }
    
    function SellerEvaluation(Trans _trans, uint256 score){
        if(!(roomcontract_Detail[_trans].buyer == msg.sender)) throw;
        
        address seller = roomcontract_Detail[_trans].seller;
        sellerDetail[seller].Status_Numberofpeople++;
        sellerDetail[seller].Status_sum+=score;
        sellerDetail[seller].Status_avg = sellerDetail[seller].Status_sum / sellerDetail[seller].Status_Numberofpeople;
        
    }
    
    function getSellerScore()  public constant returns (uint256,uint256,uint256){
        return(sellerDetail[msg.sender].Status_Numberofpeople,
        sellerDetail[msg.sender].Status_sum,
        sellerDetail[msg.sender].Status_avg);
    }

    
        function GetMyProductnumber() public constant returns (uint256[]) {
        return sellerDetail[msg.sender].Productnumber;
    }
    function SetUpdateMyDocument(uint256 _index, string _DocumentName,string _DocumentImageHashsrc,string _DocumentImageInfo){

        if(DocumentArray[_index].Documentowner != msg.sender) throw;
        if(sha3(_DocumentName) != sha3(""))
           { DocumentArray[_index].DocumentName = _DocumentName;}
        if(sha3(_DocumentImageHashsrc) != sha3(""))
            { DocumentArray[_index].DocumentImageHashsrc = _DocumentImageHashsrc;}
        if(sha3(_DocumentImageInfo) != sha3(""))
           { DocumentArray[_index].DocumentImageInfo = _DocumentImageInfo;}

    }
    
    
}

