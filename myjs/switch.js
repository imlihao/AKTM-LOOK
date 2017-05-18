//切换到客户中心
function switch2customer(){
      var base=$("#page-wrapper");
      if(document.getElementById("fromcenter")){
        console.error("重复加载");
        return;
      }
      base.html("");
      var h5=['<div class="row">',
'                <div class="col-lg-12">',
'                    <h1 class="page-header">客户信息中心</h1>',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'                <!-- /.row -->',
'            <div class="row" id="fromcenter">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            客户信息',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-customer">',
'                                <thead>',
'                                    <tr>',
'                                        <th>编号</th>',
'                                        <th>姓名</th>',
'                                        <th>公司</th>',
'                                        <th>电话</th>',
'                                        <th>地址</th> ',
'                                        <th>操作</th>                                        ',
'                                    </tr>',
'                                </thead>',
'                                <tbody>',
'                                </tbody>',
'                                   ',
'                            </table>',
'                            <!-- /.table-responsive -->',
'               ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            ',
'            ',
'            <div class="row">',
'            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">新增</button>',
'                 <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
'                 <div class="modal-dialog modal-lg" role="document">',
'                 <div class="modal-content">',
'                   <!-- 自定义新增用户 -->',
'          ',
'          ',
'              <div class="row">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            新增客户',
'                        </div>',
'                        <div class="panel-body">',
'                            <div class="row">',
'                                <div class="col-lg-6">',
'                                  <form role="form">',
'                                   ',
'                                      <div class="form-group">',
'                                            <label>客户姓名</label>',
'                                            <input class="form-control" placeholder="name" id="cusname">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>公司</label>',
'                                            <input class="form-control" placeholder="company" id="cuscompany">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone" id="cusphone">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>地址</label>',
'                                            <textarea class="form-control" rows="3" id="cusaddr"></textarea>',
'                                      </div>',
'                                    <div class="modal-footer">',
'                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
'                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="addcus()">新增</button>',
'                                    </div>',
'                                  </form>',
'                                </div>',
'                                <!-- /.col-lg-6 (nested) -->',
'                            </div>',
'                            <!-- /.row (nested) -->',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'               </div>',
'                <!-- /.row -->                     ',
'                </div>',
'                </div>',
'                </div>',
'            </div> ',
'            ',
'            ',
'                       ',
'           ',
'            ',
'              <div class="modal fade "  id="cusop" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
'                 <div class="modal-dialog modal-lg" role="document">',
'                 <div class="modal-content">',
'                   <!-- 用户信息修改 -->',
'                   <div class="row">',
'                  <div class="col-lg-12">',
'                      <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            客户信息修改',
'                        </div>',
'                        <div class="panel-body">',
'                            <div class="row">',
'                                <div class="col-lg-6">',
'                                  <form role="form">',
'                                     <div class="form-group">',
'                                            <label>客户ID</label>',
'                                            <input class="form-control" placeholder="id" id="cusidop" disabled>',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>客户姓名</label>',
'                                            <input class="form-control" placeholder="name" id="cusnameop">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>公司</label>',
'                                            <input class="form-control" placeholder="company" id="cuscompanyop">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone" id="cusphoneop">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>地址</label>',
'                                            <textarea class="form-control" rows="3" id="cusaddrop"></textarea>',
'                                      </div>',
'                                    <div class="modal-footer">',
'                                        <div class="pull-left">',
'                                          <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="delcus()">删除</button>',
'                                        </div>',
'                                       <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>                                    ',
'                                       <button type="button" class="btn btn-primary"  data-dismiss="modal" onclick="updatecus()">修改</button>',
'                                    </div>',
'                                  </form>',
'                                </div>',
'                                <!-- /.col-lg-6 (nested) -->',
'                            </div>',
'                            <!-- /.row (nested) -->',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'               </div>',
'                <!-- /.row -->       ',
'             <!-- 自定义新增用户end --> ',
'               ',
'                </div>',
'                </div>',
'                </div>',
'            '].join("");
    base.append(h5);
    
    
}
 

//切换到合同中心
function switch2from(){
    var base=$("#page-wrapper");
      if(document.getElementById("ordercenter")){
        console.error("重复加载");
        return;
      }
      base.html("");
      var h5= ['<div class="row">',
'                <div class="col-lg-12">',
'                    <h1 class="page-header">Dashboard</h1>',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'                <!-- /.row -->',
'            <div class="row" id="ordercenter">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            DataTables Advanced Tables',
'                        </div>',
'                        <!-- /.panel-heading -->',
'                        <div class="panel-body">',
'                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-invoice">',
'                                <thead>',
'                                    <tr>',
'                                        <th>单号</th>',
'                                        <th>发送者姓名</th>',
'                                        <th>发送者电话</th>',
'                                        <th>货物信息</th>',
'                                        <th>接受者</th>',
'                                        <th>送往地址</th>',
'                                        <th>订单状态</th> ',
'                                        <th>操作</th>                                        ',
'                                    </tr>',
'                                </thead>',
'                                <tbody>',
'                                </tbody>',
'                                   ',
'                            </table>',
'                            <!-- /.table-responsive -->',
'               ',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            ',
'            ',
'            <div class="row">',
'            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>',
'                 <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">',
'                 <div class="modal-dialog modal-lg" role="document">',
'                 <div class="modal-content">',
'                   <!-- 自定义新增用户 -->',
'          ',
'          ',
'              <div class="row">',
'                <div class="col-lg-12">',
'                    <div class="panel panel-default">',
'                        <div class="panel-heading">',
'                            新增客户',
'                        </div>',
'                        <div class="panel-body">',
'                            <div class="row">',
'                                <div class="col-lg-6">',
'                                  <form role="form">',
'                                      <div class="form-group">',
'                                            <label>客户姓名</label>',
'                                            <input class="form-control" placeholder="name">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>公司</label>',
'                                            <input class="form-control" placeholder="company">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone">',
'                                      </div>',
'                                      <div class="form-group">',
'                                            <label>电话</label>',
'                                            <input class="form-control" placeholder="phone">',
'                                      </div>',
'                                        <div class="form-group">',
'                                            <label>地址</label>',
'                                            <textarea class="form-control" rows="3"></textarea>',
'                                      </div>',
'                                      ',
'                                      <div class="pull-right">',
'                                      <button type="submit" class="btn btn-default">Submit Button</button>',
'                                      </div>',
'                                  </form>',
'                                </div>',
'                                <!-- /.col-lg-6 (nested) -->',
'                            </div>',
'                            <!-- /.row (nested) -->',
'                        </div>',
'                        <!-- /.panel-body -->',
'                    </div>',
'                    <!-- /.panel -->',
'                </div>',
'                <!-- /.col-lg-12 -->',
'               </div>',
'                <!-- /.row -->',
'            ',
'            ',
'            ',
'             <!-- 自定义新增用户end -->               ',
'                </div>',
'                </div>',
'                </div>',
'            </div> '].join("");
    base.append(h5);      
}

//切换到出库单
function switch2odo(){
    console.error("sw 2 odo");
    
}

//切换到装配
function switch2load(){
  console.error("sw 2 load");

}



//切换到配送中心
function switch2dispatch(){
    console.error("sw 2 dps");
}

//切换到系统用户信息中心
function switch2sysuser(type){
    if(document.getElementById("sysusercenter")){
        console.error("重复加载");
        return;
    }
    var base=$("#page-wrapper");
    base.html("");
    base.append(['<div class="row" >',
'                <div class="col-lg-12">',
'                <h1 class="page-header">操作人员信息中心</h1>',
'                </div>',
'                <!-- /.col-lg-12 -->',
'            </div>',
'            <!-- /.row -->',
'            '].join(""));
    base.append(' <div class="row" id="sysusercenter">');
    base.append('</div>');  
}

//权限控制
function  powerContrl(){
    console.error("权限控制");
    
}
powerContrl();

//加监听
function addevent(){
    var tar=document.getElementById("2order");
    if(tar){
       tar.addEventListener("click",switch2from,true);
    }else{
        console.error("没有订单权限");
    }
    
    var tar=document.getElementById("2odo");
    if(tar){
       tar.addEventListener("click",switch2odo,true);
    }else{
        console.error("没有出库权限");
    }
    
    var tar=document.getElementById("2load");
    if(tar){
       tar.addEventListener("click",switch2load,true);
    }else{
        console.error("没有装配权限");
    }
    
    var tar=document.getElementById("2dispatch");
    if(tar){
       tar.addEventListener("click",switch2dispatch,true);
    }else{
        console.error("没有配送权限");
    }
    
    
    var tar=document.getElementById("2customer");
    if(tar){
       tar.addEventListener("click",switch2customer,true);
    }else{
        console.error("没有客户中心权限");
    }
    

    //用户权限，分别处理
    var tar=document.getElementById("2sysuserdirver");
    if(tar){
       tar.addEventListener("click",switch2sysuser,true);
    }else{
        console.error("没有更改用户权限");
    }
    
    var tar=document.getElementById("2sysuserwop");
    if(tar){
       tar.addEventListener("click",switch2sysuser,true);
    }else{
        console.error("没有更改用户权限");
    }
    
    var tar=document.getElementById("2sysusernop");
    if(tar){
       tar.addEventListener("click",switch2sysuser,true);
    }else{
        console.error("没有更改用户权限");
    }
    
}

addevent();


