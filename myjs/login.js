document.getElementById("login").addEventListener("click",()=>{
    var user=document.getElementById("user").value;
    var psd=document.getElementById("psd").value;
    //TODO 验证
    var json={user,psd};
    var dat=new msg(msgType.login,JSON.stringify(json));
    NetMgr.instance.AJAXsend(dat);
},false);
