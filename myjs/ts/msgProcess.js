var msgProcess;
(function (msgProcess) {
    function onlogin() {
        window.location.href = "aktm_index.html";
    }
    msgProcess.onlogin = onlogin;
    /**
     * 警告
     */
    function onalret(dat) {
        alert(dat.msg);
    }
    msgProcess.onalret = onalret;
    /**
     * 更新所有的消息
     */
    function onSCupdateAll(dat) {
        dataManager.instance.data = dat;
    }
    msgProcess.onSCupdateAll = onSCupdateAll;
    /**
    * 登出
    */
    function onlogout(dat) {
        window.location.href = "login.html";
    }
    msgProcess.onlogout = onlogout;
})(msgProcess || (msgProcess = {}));
var msgClass;
(function (msgClass) {
    var CSloginMsg = (function () {
        function CSloginMsg() {
        }
        return CSloginMsg;
    }());
    msgClass.CSloginMsg = CSloginMsg;
    /**
   * 登陆回复的消息，根据权限分配信息；
   */
    var SCupdateAll = (function () {
        function SCupdateAll() {
            this.itype = msgType.login;
        }
        return SCupdateAll;
    }());
    msgClass.SCupdateAll = SCupdateAll;
    var invOp = (function () {
        function invOp() {
            this.itype = msgType.invOp;
        }
        return invOp;
    }());
    msgClass.invOp = invOp;
    var sysOp = (function () {
        function sysOp() {
            this.itype = msgType.sysOp;
        }
        return sysOp;
    }());
    msgClass.sysOp = sysOp;
    var odoOp = (function () {
        function odoOp() {
            this.itype = msgType.odoOp;
        }
        return odoOp;
    }());
    msgClass.odoOp = odoOp;
    var tpsOp = (function () {
        function tpsOp() {
            this.itype = msgType.tpsOp;
        }
        return tpsOp;
    }());
    msgClass.tpsOp = tpsOp;
    var cusOp = (function () {
        function cusOp() {
            this.itype = msgType.cusOp;
        }
        return cusOp;
    }());
    msgClass.cusOp = cusOp;
    var lodOp = (function () {
        function lodOp() {
            this.itype = msgType.lodOp;
        }
        return lodOp;
    }());
    msgClass.lodOp = lodOp;
    var alret = (function () {
        function alret() {
            this.itype = msgType.alret;
        }
        return alret;
    }());
    msgClass.alret = alret;
})(msgClass || (msgClass = {}));
var vo;
(function (vo) {
    /**
     * 客户
     */
    var customer = (function () {
        function customer() {
        }
        return customer;
    }());
    vo.customer = customer;
    /**
     * 发货合同
     */
    var invoice = (function () {
        function invoice() {
        }
        return invoice;
    }());
    vo.invoice = invoice;
    /**
     * 配送单
     */
    var loaddo = (function () {
        function loaddo() {
        }
        return loaddo;
    }());
    vo.loaddo = loaddo;
    /**
     * 出库单
     */
    var odo = (function () {
        function odo() {
        }
        return odo;
    }());
    vo.odo = odo;
    /**
     * 系统用户
     */
    var sysuer = (function () {
        function sysuer() {
        }
        return sysuer;
    }());
    vo.sysuer = sysuer;
    /**
     * 运送单
     */
    var transport = (function () {
        function transport() {
        }
        return transport;
    }());
    vo.transport = transport;
})(vo || (vo = {}));
var operator;
(function (operator) {
    operator[operator["del"] = 1] = "del";
    operator[operator["update"] = 2] = "update";
    operator[operator["updateAll"] = 3] = "updateAll";
    operator[operator["add"] = 4] = "add";
})(operator || (operator = {}));
var roletype;
(function (roletype) {
    roletype[roletype["sys"] = 1] = "sys";
    roletype[roletype["operator_normal"] = 2] = "operator_normal";
    roletype[roletype["operator_Warehouse"] = 3] = "operator_Warehouse";
    roletype[roletype["diver"] = 4] = "diver";
})(roletype || (roletype = {}));
