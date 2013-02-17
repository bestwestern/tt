module solution {
    export class SolEvent {
        resourcerole: any;
        constructor (public sEvent: instans.AEvent, 
            public sTime?: instans.Time,sResourcer?:instans.Resource[]=[]) {
            this.resourcerole = {};
        }
    }


}
