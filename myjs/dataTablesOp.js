$("window").ready(function(){
    csmsg=new msg(msgType.SCupdateAll,"")
    NetMgr.instance.WSsend(csmsg);
});

/**
 * 刷新订单表格
 */
function updateTableInv(invs){
  //测试数据
  var dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
    ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
    ['Trident','Internet Explorer 6','Win 98+','6','A'], ];
   
    var dt=$("#dataTables-invoice");
    if(!dt){
        console.log("没有找到表");
        return;
    }
    dt.DataTable({
    data:invs,
    columns: [
    {
        "title":"单号",
        "data":"INV_ID",
        "width":"auto",
       
    },
    {
        "title": "发送者姓名",
       "data":"INV_ID",
        

    },
    {
        "title": "发送者电话",
                "data":"INV_ID",
  

    },
    {
        "title": "货物信息",
                "data":"INV_ID",
   

    },
    {
        "title": "接受者",
        "data":"INV_ID",


    },
    {
        "title": "送往地址",
        "data":"INV_ID",


    },
    {
        "title": "订单状态",
        "data":"INV_ID",

    },
    {
        "data":null,
        "class":"center"

    }], 
     columnDefs:[{
                targets: 7,
                render: function (data, type, row, meta) {
                    return '<a type="button" class="btn btn-success center"  onclick=invoceOp(' + row.INV_ID + ') >详细操作</a>';
                }
            },
                { "orderable": false, "targets": 7 },
            ],
    });
}

/**
 *订单操作
 * */   
function invoceOp(id){
    console.log(id);
    
};


/**
 * 刷新客户表格
 */
function updateTableCus(cus){

    var dt=$("#dataTables-customer");
    if(!dt){
        console.log("没有找到表");
        return;
    }
    dt.aja
    dt.DataTable({
    data:cus,
    destroy:"true",
    columns: [
    {
        "title":"编号",
        "data":"cus_id",
        "width":"auto",
       
    },
    {
        "title": "姓名",
       "data":"sender_name",
        

    },
    {
        "title": "公司",
        "data":"company",
  

    },
    {
        "title": "电话",
        "data":"sender_phone",
   

    },
    {
        "title": "地址",
        "data":"addr",
        "width":"auto",

    },
    {
        "data":null,

    }], 
     columnDefs:[{
                targets: 5,
                render: function (data, type, row, meta) {
                    return '<a type="button" class="btn btn-success center"  data-toggle="modal" data-target="#cusop" onclick=customerOp(' + row.cus_id + ') >详细操作</a>';
                }
            },
                { "orderable": false, "targets": 1 },
            ],
    });
}


/**
 *订单操作
 * */   
function customerOp(id){
    $("#cusidop").val(id);
    let cus=dataManager.instance.getCusByid(id);  
    if(!cus){
        console.error("数据里没找到customer:id="+id);
        return;
    }
    $("#cusaddrop").val(cus.sender_name);
    $("#cusnameop").val(cus.addr);
    $("#cuscompanyop").val(cus.company);
    $("#cusphoneop").val(cus.sender_phone);

};

function addcus(){
    var cus=new vo.customer();
    cus.sender_name=$("#cusname").val();
    cus.company=$("#cuscompany").val();
    cus.sender_phone=$("#cusphone").val();
    cus.addr=$("#cusaddr").val();
    var reqmsg=new msgClass.cusOp();
    reqmsg.cus=new Array();
    reqmsg.cus.push(cus);
    reqmsg.op=operator.add;
    cs=new msg(msgType.cusOp,JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);   
}

function delcus(){
    cusid=$("#cusidop").val();
    var cus=new vo.customer();
    cus.cus_id=cusid;
    var reqmsg=new msgClass.cusOp();
    reqmsg.cus=new Array();
    reqmsg.cus.push(cus);
    reqmsg.op=operator.del;
    cs=new msg(msgType.cusOp,JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);  

}

function updatecus(){
    var cus=new vo.customer();
    cus.sender_name=$("#cusnameop").val();
    cus.company=$("#cuscompanyop").val();
    cus.sender_phone=$("#cusphoneop").val();
    cus.addr=$("#cusaddrop").val();
    var reqmsg=new msgClass.cusOp();
    reqmsg.cus=new Array();
    reqmsg.cus.push(cus);
    reqmsg.op=operator.update;
    cs=new msg(msgType.cusOp,JSON.stringify(reqmsg));
    NetMgr.instance.WSsend(cs);         
}











