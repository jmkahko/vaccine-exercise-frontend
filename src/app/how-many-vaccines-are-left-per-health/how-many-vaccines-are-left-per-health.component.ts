import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-vaccines-are-left-per-health',
  templateUrl: './how-many-vaccines-are-left-per-health.component.html',
  styleUrls: ['./how-many-vaccines-are-left-per-health.component.css']
})
export class HowManyVaccinesAreLeftPerHealthComponent implements OnInit {
  paiva: string;
  vaccineHealth: any;
  rokotteitaYhteensa: number;
  rokotteetKaytetyt: number;
  rokotteitaJaljella: number;
  paivitysAlkoi: boolean;
  paivitysValmistui: boolean;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.paiva = new Date().toISOString();
    this.rokotteitaYhteensa = 0;
    this.rokotteetKaytetyt = 0;
    this.rokotteitaJaljella = 0;
    this.paivitysAlkoi = false;
    this.paivitysValmistui = false;
  }

  ngOnInit(): void {
  }

  howManyVaccinesAreLeftToUsePerHealth(f: NgForm) {
    this.paivitysAlkoi = true;
    this.paivitysValmistui = false;
    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyVaccinesAreLeftToUsePerHealth(f.value.date).subscribe((data) => {
      // Saadaan html puolella kaytya tulevat taulukko läpi
      this.vaccineHealth = data;
      this.paivitysAlkoi = false;
      this.paivitysValmistui = true;
    });
  }
}
