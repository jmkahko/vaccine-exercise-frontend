import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-vaccinations',
  templateUrl: './how-many-vaccinations.component.html',
  styleUrls: ['./how-many-vaccinations.component.css']
})
export class HowManyVaccinationsComponent implements OnInit {
  vaccinations: any;
  paiva: string;
  
  constructor(
    private vaccineService: VaccineService
  ) {
    this.paiva = new Date().toISOString();
   }

  ngOnInit(): void {
  }

  howManyVaccinations(f: NgForm) {
    // Jos arvoa ei syötetä laitetaan alkupäiväksi 1.1.2021 kello 00.00
    if (f.value.dateStart === "") {
      f.value.dateStart = '2021-01-01T00:00:00.001Z'
    }

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.dateEnd === "") {
      f.value.dateEnd = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyVaccinations(f.value.dateStart, f.value.dateEnd).subscribe(vaccinations => this.vaccinations = vaccinations);
  }

}
