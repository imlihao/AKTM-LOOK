
$("document").ready(function (){   
var dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
    ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
    ['Trident','Internet Explorer 6','Win 98+','6','A'], ];
    
 var set2=dataManager.instance.invs;
   
 $("#dataTables-invoice").DataTable({
    data:set2,
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
                    console.log('data'+data);                    
                    console.log(type);
                    console.log(row);
                    console.log(meta);

                    return '<a type="button" class="btn btn-success center"  onclick=invoceOp(' + row.INV_ID + ') >详细操作</a>';
                }
            },
                { "orderable": false, "targets": 7 },
            ],
  });
    
})

function invoceOp(id){
    console.log(id);
    
};

