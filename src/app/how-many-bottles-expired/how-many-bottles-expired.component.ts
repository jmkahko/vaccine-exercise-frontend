import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-bottles-expired',
  templateUrl: './how-many-bottles-expired.component.html',
  styleUrls: ['./how-many-bottles-expired.component.css']
})
export class HowManyBottlesExpiredComponent implements OnInit {
  manyProducer: any;
  maara: Number;
  paiva: string;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.maara = 0;
    this.paiva = new Date().toISOString();
   }

  ngOnInit(): void {
  }

  howManyBottlesExpired(f: NgForm) {
    // Alustetaan yhteensä laskun muuttujat nollaksi aluksi
    this.maara = 0;

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyBottlesExpired(f.value.date).subscribe((data) => {
      this.manyProducer = data;

      // Lasketaan taulukossa yhteensä rokotteiden määrä
      for (let x = 0; x < data.length; x++) {
        this.maara = this.maara + data[x].kpl;
      }
    });
  }

}
