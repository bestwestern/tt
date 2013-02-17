var solution;
(function (solution) {
    var SolEvent = (function () {
        function SolEvent(sEvent, sTime, sResourcer) {
            if (typeof sResourcer === "undefined") { sResourcer = []; }
            this.sEvent = sEvent;
            this.sTime = sTime;
            this.resourcerole = {
            };
        }
        return SolEvent;
    })();
    solution.SolEvent = SolEvent;    
})(solution || (solution = {}));
