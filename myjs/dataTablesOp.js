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
    $("#cusaddrop").val(cus.addr);
    $("#cusnameop").val(cus.sender_name);
    $("#cuscompanyop").val(cus.company);
    $("#cusphoneop").val(cus.sender_phone);

};

function customeradd(){
    $("#invsenderinfo").html("");
    
    var se=new Array();
    var cus=dataManager.instance.data.cus;
    for(i=0;i<cus.length;i++){
           se.push(' <option value="'+cus[i].cus_id+'">'+cus[i].sender_name+'</option>')    
    }
    $("#invselect").html(se);
    $("#invselect").change(function (){
       var secus=dataManager.instance.getCusByid($("#invselect").val());
       
       var dat=['  <div class="form-group">',
'                                            <label>客户id</label>',
'                                            <input class="form-control"  value="'+secus.cus_id+'" id="cus_id" disabled>',
'                                      </div>',
'                                      ',
'                                      <div class="form-group">',
'                                            <label>客户电话</label>',
'                                            <input class="form-control"  value="'+secus.sender_phone+'" disabled>',
'         </div>'].join("");
        $("#invsenderinfo").html(dat);
        
        
    });
    
    
    
}



/**
 *客户操作
 * */
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
    var cus=dataManager.instance.getCusByid($("#cusidop").val());
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



function syspost2String(rtype){
   switch(rtype){
     case roletype.operator_normal:
       return "操作员";
     case roletype.diver:
       return "司机";
     case roletype.operator_Warehouse:
       return "仓库管理员";
     case roletype.sys:
       return "超级管理员";

   }
}

var rolemain=document.getElementById("rolemain");
if(rolemain){
    rolemain.addEventListener("click",showsysuser,true);  
}else{
    console.error("角色管理按钮没找到");
}

function showsysuser(dat){  
    var base=$("#sysusercenter");
    if(!base.length){
        return;
    }
    if(dat){
    for(i=0;i<dat.length;i++){
        var ys=dat[i];
        var h5=[' <div class="col-lg-4">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            '+syspost2String(ys.roletype),
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <div class="col-lg-offset-1">',
'                            <h3>姓名:'+ys.name+'</h3>   ',
'                            <h3>工号：'+ys.user_id+'</h3>',
'                            <h3>电话:'+ys.phone+'</h3>',
'                            <h3>类别：'+syspost2String(ys.roletype)+'</h3>      ',
'                            <h3>'+(ys.autoid?'车牌号:'+ys.autoid:'&nbsp')+'</h3>',
'                            <div class="pull-right">',
'                            <button type="button" class="btn btn-outline btn-success btn-lg ">操作</button>',
'                            </div>                            ',
'                            </div>                            ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-6 -->',
'             '].join("");
        base.append(h5);
     }
    }
   
    
}


function onswitch2operatorcenter(){
  
}









