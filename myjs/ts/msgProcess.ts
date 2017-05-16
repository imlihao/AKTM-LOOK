namespace msgProcess {
  export function onlogin() {
      window.location.href= "index.html";
  }
  /**
   * 警告
   */
  export function onalret(dat:msgClass.alret){
     alert(dat.msg);
  }
  /**
   * 更新所有的消息
   */
  export function onSCupdateAll(dat:msgClass.SCupdateAll){
     dataManager.instance.data=dat;
     //TODO 更新所有的
  }
}



namespace msgClass{
  export class CSloginMsg{
	  name:string;
	  psd:string;
  }
  
  /**
 * 登陆回复的消息，根据权限分配信息；
 */
 export class SCupdateAll{
   itype=msgType.login;
   sysu:vo.sysuer;
	 invs:vo.invoice[];
	 sysusers:vo.sysuer[];
	 odos:vo.odo[];
	 loaddos:vo.loaddo[];
	  tps:vo.transport[];
	  cus:vo.customer[];
}

export class invOp{
	 itype=msgType.invOp;
	 op:number;
	 invs:vo.invoice[];
   
}

export class sysOp{
	 itype=msgType.sysOp;
 	 op:number;
	 sysusers:vo.sysuer[];
}

export class odoOp{
	 itype=msgType.odoOp;
	 op:number;
	 odos:vo.odo[];
}

export class tpsOp{
	 itype=msgType.tpsOp;
   op:number;
	 tps:vo.transport[];
}

export class cusOp{
	 itype=msgType.cusOp;
	op:number;
	 cus:vo.customer[];
}

export class lodOp{
	 itype=msgType.lodOp;
	 op:number;
   loaddos:vo.loaddo[];
}

export class alret{
   itype=msgType.alret;
	 msg:string; 
}
}



namespace vo {
  /**
   * 客户
   */
  export class customer {
    cus_id: number;
    sender_ID: number;
    sender_name: string;
    sender_phone: string;
    company: string;
    addr: string;
    // 标志位
    co_status: number;
  }


  /**
   * 发货合同
   */
  export class invoice {
    INV_ID: string;

    //货物信息
    good_num: number;
    good_name: string;
    good_identifier: number;

    //发送者信息
    sender_name: string;
    sender_ID: number;
    sender_phone: string;
    
    //操作员id
    opid:number;

    UTCTimeStamp: number;

    //接受者信息
    receiver_name: string;
    receiver_phone: string;
    receiver_addr: string;

    //花费
    cost: number;

    co_status: number;
    inv_status: number;
  }

  /**
   * 配送单
   */
  export class loaddo {
    loaddo_id: string;
    diver_id: number;

    autoid: string;
    UTCTimeStamp: number;

    loaddo_status: number;
    co_status: number;
  }


  /**
   * 出库单
   */
  export class odo {

    odo_id: string;

    //	//取货信息
    //    int good_num;
    //    String good_name;  
    //    int good_identifier;

    //操作员
    operator_id: string;
    UTCtimeStamp: number;

    odo_status: number;
    co_status: number
  }

  /**
   * 系统用户
   */
  export class sysuer {

    user_id: number;
    phone: number;

    roletype: number;
    psd: string;
    name: string;

    autoid: string;
    power_inv:boolean;
    power_odo: boolean;
    power_loaddo: boolean;
    power_user: boolean;
    power_dispitch: boolean;
  }

  /**
   * 运送单
   */
  export class transport {

    transport_id: string;
    UTCTimeStamp: number;

    diver_id: number;
    diver_name: number;
    auto_id: number;

    transport_status: number;
    co_status: number;

  }
}

