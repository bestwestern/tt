var timer;
var solevents;
var tidsgrupper;
var resourcetyper;
var resourcegrupper;
var resourcer;
var eventgrupper;
var events;
var hardconstraints;
var softconstraints;
window.onload = function () {
    instans.readxml();
    solevents = [];
    for(var i = 0, len = events.length; i < len; i++) {
        for(var j = 0, eventlen = events[i].duration; j < eventlen; j++) {
            var curevent = events[i];
            solevents.push(new solution.SolEvent(curevent));
        }
    }
};
