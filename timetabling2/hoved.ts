/// <reference path="jquery.d.ts" />
/// <reference path="solution.ts" />
/// <reference path="instans.ts" />
var timer: instans.Time[];
var solevents: solution.SolEvent[];
var tidsgrupper: instans.TimeGroup[];
var resourcetyper: instans.ResourceType[];
var resourcegrupper: instans.ResourceGroup[];
var resourcer: instans.Resource[];
var eventgrupper: instans.EventGroup[];
var events: instans.AEvent[];
var hardconstraints: instans.Constraint[];
var softconstraints: instans.Constraint[];
/*TODO:
link alle elementer på kryds og tværs (ligesom times i timegroup


*/

window.onload = () => {
 
    instans.readxml();

    solevents = [];
    for (var i = 0, len = events.length; i < len; i++)
        for (var j = 0, eventlen = events[i].duration; j < eventlen; j++) {
            var curevent = events[i];
            solevents.push(new solution.SolEvent(curevent));
        }

    //  var k = new Course('jk', null);

}