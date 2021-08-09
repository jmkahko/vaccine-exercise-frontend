import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-order-and-vaccines',
  templateUrl: './how-many-order-and-vaccines.component.html',
  styleUrls: ['./how-many-order-and-vaccines.component.css']
})
export class HowManyOrderAndVaccinesComponent implements OnInit {
  ordervaccines: any;
  paiva: string;
  
  constructor(
    private vaccineService: VaccineService
  ) {

    this.paiva = new Date().toISOString();
   }

  ngOnInit(): void {
  }

  howManyOrderAndVaccines(f: NgForm) {
    // Jos arvoa ei syötetä laitetaan alkupäiväksi 1.1.2021 kello 00.00
    if (f.value.dateStart === "") {
      f.value.dateStart = '2021-01-01T00:00:00.001Z'
    }

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.dateEnd === "") {
      f.value.dateEnd = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyOrdersAndVaccines(f.value.dateStart, f.value.dateEnd).subscribe(ordervaccines => this.ordervaccines = ordervaccines);

  }

}
