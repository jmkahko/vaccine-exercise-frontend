import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-gender-vaccinations',
  templateUrl: './how-many-gender-vaccinations.component.html',
  styleUrls: ['./how-many-gender-vaccinations.component.css']
})
export class HowManyGenderVaccinationsComponent implements OnInit {
  paiva: string;
  gender: any;
  yhteensa: number;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.paiva = new Date().toISOString();
    this.yhteensa = 0;
  }

  ngOnInit(): void {
  }

  howManyGenderVaccinations(f: NgForm) {
    this.yhteensa = 0; // Alustetaan yhteensä

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyGenderVaccinations(f.value.date).subscribe((data) => {
      // Saadaan html puolella kaytya tulevat taulukko läpi
      this.gender = data;

      // Käydään yhteensä sarakkeeseen läpi tuleva tieto
      for (let x = 0; x < this.gender.length; x++) {
        this.yhteensa = this.yhteensa + this.gender[x].count;
      }
    });
  }
}
