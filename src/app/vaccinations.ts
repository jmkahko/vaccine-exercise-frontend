export class Vaccinations {
    // konstruktorimetodi joka rakentaa vaccinations-olion
    constructor(  
        public _id: string,
        public vaccinationId: string, // universal identifier of the vaccination
        public sourceBottle: string, // number of injections available in a bottle
        public gender: string, // male, female, nonbinary
        public vaccinationDate: string) // datetime
        { }
  }