import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-vaccines-are-left-to-use',
  templateUrl: './how-many-vaccines-are-left-to-use.component.html',
  styleUrls: ['./how-many-vaccines-are-left-to-use.component.css']
})
export class HowManyVaccinesAreLeftToUseComponent implements OnInit {
  manyProducer: any;
  pullojaYhteensaKaikki: number;
  rokotteitaYhteensaKaikki: number;
  rokotteetKaytetytKaikki: number;
  rokotteitaJaljellaKaikki: number;
  paiva: string;
  paivitysAlkoi: boolean;
  paivitysValmistui: boolean;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.pullojaYhteensaKaikki = 0;
    this.rokotteitaYhteensaKaikki = 0;
    this.rokotteetKaytetytKaikki = 0;
    this.rokotteitaJaljellaKaikki = 0;
    this.paivitysAlkoi = false;
    this.paivitysValmistui = false;
    this.paiva = new Date().toISOString();
   }

  ngOnInit(): void {
  }

  howManyVaccinesAreLeftToUse(f: NgForm) {
    // Asetetaan tietojen päivitys tieto aluksi kummatkin false tilaan, ettei html puolelle jää vääriä ilmoituksia auki
    this.paivitysValmistui = false;
    this.paivitysAlkoi = false;

    // Alustetaan yhteensä laskun muuttujat nollaksi aluksi
    this.pullojaYhteensaKaikki = 0;
    this.rokotteitaYhteensaKaikki = 0;
    this.rokotteetKaytetytKaikki = 0;
    this.rokotteitaJaljellaKaikki = 0;

    // Jos kaikki arvot ovat nollia, muutetaan paivitysAlkoi muuttujan arvoksi True, jotta saadaan info tieto html sivun puolelle
    if (this.pullojaYhteensaKaikki === 0 && this.rokotteitaYhteensaKaikki === 0 && this.rokotteetKaytetytKaikki === 0 && this.rokotteitaJaljellaKaikki === 0) {
      console.log('alkoi')
      this.paivitysAlkoi = true;
    }

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyVaccinesAreLeftToUse(f.value.date).subscribe((data) => {
      // Saadaan html puolella kaytya tulevat taulukko läpi
      this.manyProducer = data;

      // Lasketaan taulukossa yhteensä pullojen ja rokotteiden määrät, paljonko rokotteita on käytetty ja miten monta rokotetta on vanhentunut
      for (let x = 0; x < data.length; x++) {
        this.pullojaYhteensaKaikki = this.pullojaYhteensaKaikki + data[x].pullojaYhteensa;
        this.rokotteitaYhteensaKaikki = this.rokotteitaYhteensaKaikki + data[x].rokotteitaYhteensa;
        this.rokotteetKaytetytKaikki = this.rokotteetKaytetytKaikki + data[x].rokotteetKaytetyt;
        this.rokotteitaJaljellaKaikki = this.rokotteitaJaljellaKaikki + data[x].rokotteitaJaljella;
      }

      // Jos kaikki arvot ovat muita kuin nollia, niin muutetaan paivitysValmistui arvoksi True, jotta saadaan info tieto html sivun puolelle
      if (this.pullojaYhteensaKaikki !== 0 && this.rokotteitaYhteensaKaikki !== 0 && this.rokotteetKaytetytKaikki !== 0 && this.rokotteitaJaljellaKaikki !== 0) {
        console.log('loppui')
        this.paivitysAlkoi = false;
        this.paivitysValmistui = true;
      }

      // Jos haku palauttaa tyhjän taulukon, niin muutetaan paivitysValmistui arvoksi True, jotta saadaan info tieto html sivun puolelle
      if (this.manyProducer.length === 0) {
        console.log('loppui')
        this.paivitysAlkoi = false;
        this.paivitysValmistui = true;
      }
    });
  }

}
