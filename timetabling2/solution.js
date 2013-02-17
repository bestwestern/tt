var solution;
(function (solution) {
    var Sol = (function () {
        function Sol() {
            this.solevents = [];
            this.softcosts = {
            };
            this.hardcosts = {
            };
            for(var i = 0, len = events.length; i < len; i++) {
                for(var j = 0, eventlen = events[i].duration; j < eventlen; j++) {
                    var curevent = events[i];
                    this.solevents.push(new SolEvent(curevent));
                }
            }
        }
        return Sol;
    })();
    solution.Sol = Sol;    
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
