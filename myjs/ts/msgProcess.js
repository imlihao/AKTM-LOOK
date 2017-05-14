var msgProcess;
(function (msgProcess) {
    function onlogin(data) {
        console.error("msgProcesss: login");
    }
    msgProcess.onlogin = onlogin;
})(msgProcess || (msgProcess = {}));
