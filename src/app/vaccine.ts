export class Vaccine {
    // konstruktorimetodi joka rakentaa vaccine-olion
    constructor(  
        public _id: string,
        public orderNumber: number, // number of injections available in a bottle
        public responsiblePerson: string, // number of injections available in a bottle
        public healthCareDistrict: string, // HYKS, KYS, OYS, TAYS, TYKS
        public vaccine: string, // Zerpfy, Antiqua, SolarBuddhica
        public injections: number, // number of injections available in a bottle
        public arrived: string) // ISO datetime
        { }
  }