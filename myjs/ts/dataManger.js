var dataManager = (function () {
    function dataManager() {
    }
    Object.defineProperty(dataManager, "instance", {
        get: function () {
            if (!dataManager._self) {
                dataManager._self = new dataManager();
                dataManager._self.test();
            }
            return dataManager._self;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(dataManager.prototype, "data", {
        get: function () {
            return this.dataMian;
        },
        set: function (dat) {
            this.dataMian = dat;
            updateTableInv(this.dataMian.invs);
        },
        enumerable: true,
        configurable: true
    });
    dataManager.prototype.test = function () {
        this.dataMian = new msgClass.SCupdateAll();
        this.dataMian.invs = new Array();
        var vovo = new vo.invoice();
        for (var i = 1; i <= 10; i++) {
            vovo.good_name = "货物名";
            vovo.co_status = 1;
            vovo.UTCTimeStamp = 132113;
            vovo.sender_name = "发送者";
            vovo.cost = 1;
            vovo.receiver_phone = "1233333";
            vovo.INV_ID = "dasdaokmdajn1322jisdf";
            vovo.receiver_addr = "天朝";
            vovo.good_num = 1;
            vovo.inv_status = 1;
            vovo.receiver_name = "接受者名字";
            vovo.receiver_addr = "dsdssd";
            vovo.sender_ID = 32;
            vovo.sender_ID = 23;
            this.dataMian.invs.push(vovo);
        }
    };
    Object.defineProperty(dataManager.prototype, "invs", {
        get: function () {
            return this.dataMian.invs;
        },
        enumerable: true,
        configurable: true
    });
    return dataManager;
}());
