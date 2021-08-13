import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-gender-vaccinations-per-health',
  templateUrl: './how-many-gender-vaccinations-per-health.component.html',
  styleUrls: ['./how-many-gender-vaccinations-per-health.component.css']
})
export class HowManyGenderVaccinationsPerHealthComponent implements OnInit {
  paiva: string;
  genderHealth: any;
  paivitysAlkoi: boolean;
  paivitysValmistui: boolean;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.paiva = new Date().toISOString();
    this.paivitysAlkoi = false;
    this.paivitysValmistui = false;
  }

  ngOnInit(): void {
  }

  howManyGenderVaccinationsPerHealth(f: NgForm) {
    this.paivitysAlkoi = true;
    this.paivitysValmistui = false;

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyGenderVaccinationsPerHealth(f.value.date).subscribe((data) => {
      // Saadaan html puolella kaytya tulevat taulukko läpi
      this.genderHealth = data;

      this.paivitysAlkoi = false;
      this.paivitysValmistui = true;
    });
  }
}
