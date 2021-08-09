import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-how-many-vaccines-expire-next10-days',
  templateUrl: './how-many-vaccines-expire-next10-days.component.html',
  styleUrls: ['./how-many-vaccines-expire-next10-days.component.css']
})
export class HowManyVaccinesExpireNext10DaysComponent implements OnInit {
  manyProducer: any;
  pullojaYhteensaKaikki: number;
  rokotteitaYhteensaKaikki: number;
  rokotteetKaytetytKaikki: number;
  rokotteetVanhenevatKaikki: number;
  paiva: string;
  paivitysAlkoi: boolean;
  paivitysValmistui: boolean;

  constructor(
    private vaccineService: VaccineService
  ) {
    this.pullojaYhteensaKaikki = 0;
    this.rokotteitaYhteensaKaikki = 0;
    this.rokotteetKaytetytKaikki = 0;
    this.rokotteetVanhenevatKaikki = 0;
    this.paivitysAlkoi = false;
    this.paivitysValmistui = false;
    this.paiva = new Date().toISOString();
  }

  ngOnInit(): void {
  }

  howManyVaccinesExpireNext10Days(f: NgForm) {
    // Asetetaan tietojen päivitys tieto aluksi kummatkin false tilaan, ettei html puolelle jää vääriä ilmoituksia auki
    this.paivitysValmistui = false;
    this.paivitysAlkoi = false;

    // Alustetaan yhteensä laskun muuttujat nollaksi aluksi
    this.pullojaYhteensaKaikki = 0;
    this.rokotteitaYhteensaKaikki = 0;
    this.rokotteetKaytetytKaikki = 0;
    this.rokotteetVanhenevatKaikki = 0;

    // Jos kaikki arvot ovat nollia, muutetaan paivitysAlkoi muuttujan arvoksi True, jotta saadaan info tieto html sivun puolelle
    if (this.pullojaYhteensaKaikki === 0 && this.rokotteitaYhteensaKaikki === 0 && this.rokotteetKaytetytKaikki === 0 && this.rokotteetVanhenevatKaikki === 0) {
      console.log('alkoi')
      this.paivitysAlkoi = true;
    }

    // Jos arvoa ei syötetä laitetaan tämä päivä arvoksi
    if (f.value.date === "") {
      f.value.date = new Date().toISOString();
    }

    console.log(f.value);

    this.vaccineService.howManyVaccinesExpireNext10Days(f.value.date).subscribe((data) => {
      // Saadaan html puolella kaytya tulevat taulukko läpi
      this.manyProducer = data;

      console.log(this.manyProducer);

      // Jos haku palauttaa tyhjän taulukon, niin muutetaan paivitysValmistui arvoksi True, jotta saadaan info tieto html sivun puolelle
      if (this.manyProducer.length === 0) {
        console.log('loppui')
        this.paivitysAlkoi = false;
        this.paivitysValmistui = true;
      } else {
        // Lasketaan taulukossa yhteensä pullojen ja rokotteiden määrät, paljonko rokotteita on käytetty ja miten monta rokotetta on vanhentunut
        for (let x = 0; x < data.length; x++) {
          this.pullojaYhteensaKaikki = this.pullojaYhteensaKaikki + data[x].pullojaYhteensa;
          this.rokotteitaYhteensaKaikki = this.rokotteitaYhteensaKaikki + data[x].rokotteitaYhteensa;
          this.rokotteetKaytetytKaikki = this.rokotteetKaytetytKaikki + data[x].rokotteetKaytetyt;
          this.rokotteetVanhenevatKaikki = this.rokotteetVanhenevatKaikki + data[x].rokotteetVanhenevat;
        }

        // Jos kaikki arvot ovat muita kuin nollia, niin muutetaan paivitysValmistui arvoksi True, jotta saadaan info tieto html sivun puolelle
        if (this.pullojaYhteensaKaikki !== 0 && this.rokotteitaYhteensaKaikki !== 0 && this.rokotteetKaytetytKaikki !== 0 && this.rokotteetVanhenevatKaikki !== 0) {
          console.log('loppui')
          this.paivitysAlkoi = false;
          this.paivitysValmistui = true;
        }
      }

    });
  }


}
