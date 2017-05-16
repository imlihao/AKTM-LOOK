class dataManager{
   private static _self:dataManager;
   public static get instance(): dataManager{
      if(!dataManager._self){
        dataManager._self=new dataManager();
        dataManager._self.test();
      }
      return dataManager._self;
   }

   private dataMian:msgClass.SCupdateAll;
   public set data(dat:msgClass.SCupdateAll){
      this.dataMian=dat;
      updateTableInv(this.dataMian.invs);
   }
   public get data(){
       return this.dataMian;
   }
  

   public test(){
       this.dataMian=new msgClass.SCupdateAll();
       this.dataMian.invs=new Array<vo.invoice>();
       let vovo=new vo.invoice();
       for(let i=1;i<=10;i++){
       vovo.good_name="货物名";
       vovo.co_status=1;
       vovo.UTCTimeStamp=132113;
       vovo.sender_name="发送者";
       vovo.cost=1;
       vovo.receiver_phone="1233333";
       vovo.INV_ID="dasdaokmdajn1322jisdf";
       vovo.receiver_addr="天朝";
       vovo.good_num=1;
       vovo.inv_status=1;
       vovo.receiver_name="接受者名字";
       vovo.receiver_addr="dsdssd";
       vovo.sender_ID=32;
       vovo.sender_ID=23;
       this.dataMian.invs.push(vovo);
    }
   }

   public get invs(){
       return this.dataMian.invs;
   }
} 