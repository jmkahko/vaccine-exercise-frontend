import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-many-order-and-vaccines-per-producer',
  templateUrl: './many-order-and-vaccines-per-producer.component.html',
  styleUrls: ['./many-order-and-vaccines-per-producer.component.css']
})
export class ManyOrderAndVaccinesPerProducerComponent implements OnInit {
  manyProducer: any;
  order: Number;
  vaccine: Number;
  paiva: string;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.order = 0;
    this.vaccine = 0;
    this.paiva = new Date().toISOString();
   }

  ngOnInit(): void {
  }

  manyOrderAndVaccinesPerProducer(f: NgForm) {
    // Alustetaan yhteensä laskun muuttujat nollaksi aluksi
    this.vaccine = 0;
    this.order = 0;

    // Jos arvoa ei syötetä laitetaan alkupäiväksi 1.1.2021 kello 00.00
    if (f.value.dateStart === "") {
      f.value.dateStart = '2021-01-01T00:00:00.001Z'
    }

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.dateEnd === "") {
      f.value.dateEnd = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.manyOrderAndVaccinesPerProducer(f.value.dateStart, f.value.dateEnd).subscribe((data) => {
      this.manyProducer = data;

      // Lasketaan taulukossa yhteensä rokotteiden ja tilausten määrä
      for (let x = 0; x < data.length; x++) {
        this.vaccine = this.vaccine + data[x].rokotteita;
        this.order = this.order + data[x].tilauksia;
      }
    });
  }

}
