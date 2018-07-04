pragma solidity ^0.4.11;
import "https://github.com/change216/change216.github.io/members.sol";

contract Owned {
    //상태변수
    address public con_owner;//소유자 주소
    
    //소유자 변경시
    event TransferOwnership(address oldaddr, address newaddr);
    
    //소유자 한정 메서드용 수식자
    modifier onlyOwner() {if (msg.sender != con_owner) throw; _; }
    
    //생성자
    function Owned() {
        con_owner = msg.sender;
    }
    //소유자 변경
    function transferOwnership(address _new) onlyOwner {
        address oldaddr = con_owner;
        con_owner = _new;
        TransferOwnership(oldaddr, con_owner);
    }
}

contract Trans is Owned{
    
   // uint256 public sellingPrice; //판매 가격
    uint256 public deadline; //기한
    address owner;
    address Memaddress;
    address buyer_owner;
    uint256 ProducrIndex; //->>update
    uint256 public price;
    bool public isOpened; //에스크로 개시 플래그
    
    
    
    
    //(3)이벤트 알림
    event EscrowStart(uint salesVolum, uint sellingPrice, uint deadline, address beneficiary);
    event ConfirmedPayment(address addr, uint amount);
    
    mapping(address => Members )public members; 
    
    //==>update
    function Trans (Members _temps, uint256 _index) {
        
       Memaddress = _temps;
        ProducrIndex = _index; //==>update
        members[Memaddress] = Members(_temps);
        price = members[Memaddress].IndexToPrice(_index);//==>update
        owner = members[Memaddress].IndexToOwner(_index); //==>update
        
        isOpened = true;
    }


    function pay(string _id) payable {
        
        //개시 전 또는 기한이 끝난 경우에는 예외처리
        if(!isOpened) throw;
        
        //판매가격 미만인 경우 예외처리
        uint amount = msg.value;
        if(amount < price) throw;
        //members[tempaddress].getMyAddress(_id);
        if(members[Memaddress].getMyAddress(_id) != owner) throw;
        
        //소유권변경 에스크로 개시플래그를 false로 설정
        members[Memaddress].setTransOwner(ProducrIndex, msg.sender);
        buyer_owner = msg.sender;
        isOpened = false;
        ConfirmedPayment(msg.sender, amount);
    }
    
    
    function close() onlyOwner{
        members[Memaddress].setRoomContract(this,buyer_owner,con_owner,price);
        selfdestruct(con_owner);
    }
    function Allclose() {
        selfdestruct(buyer_owner);
    }
}
