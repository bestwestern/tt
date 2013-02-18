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
    var sol1: solution.Sol = new solution.Sol();
    alert(sol1.solevents.length.toString());
    
    //  var k = new Course('jk', null);

}