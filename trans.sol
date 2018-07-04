contract Owned {
    //���º���
    address public con_owner;//������ �ּ�
    
    //������ �����
    event TransferOwnership(address oldaddr, address newaddr);
    
    //������ ���� �޼���� ������
    modifier onlyOwner() {if (msg.sender != con_owner) throw; _; }
    
    //������
    function Owned() {
        con_owner = msg.sender;
    }
    //������ ����
    function transferOwnership(address _new) onlyOwner {
        address oldaddr = con_owner;
        con_owner = _new;
        TransferOwnership(oldaddr, con_owner);
    }
}

contract Trans is Owned{
    
   // uint256 public sellingPrice; //�Ǹ� ����
    uint256 public deadline; //����
    address owner;
    address Memaddress;
    address buyer_owner;
    uint256 ProducrIndex; //->>update
    uint256 public price;
    bool public isOpened; //����ũ�� ���� �÷���
    
    
    
    
    //(3)�̺�Ʈ �˸�
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
        
        //���� �� �Ǵ� ������ ���� ��쿡�� ����ó��
        if(!isOpened) throw;
        
        //�ǸŰ��� �̸��� ��� ����ó��
        uint amount = msg.value;
        if(amount < price) throw;
        //members[tempaddress].getMyAddress(_id);
        if(members[Memaddress].getMyAddress(_id) != owner) throw;
        
        //�����Ǻ��� ����ũ�� �����÷��׸� false�� ����
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