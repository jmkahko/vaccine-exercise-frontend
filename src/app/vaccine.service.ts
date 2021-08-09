import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; // Tuodaan enviromentista url osoitteet
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private apiUrl = environment.apiUrlEnv + '/vaccines'; // vaccine pää apiUrl

  constructor(private http: HttpClient) { }

  // Virheenkäsittelymetodi joka palauttaa observablen
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error.message || error;
  }

  // Kuinka monta tilausta ja rokotetta saapunut. Hakuun laitetaan aloitus ja lopetuspäivä
  howManyOrdersAndVaccines(dateStart:string, dateEnd:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/manyOrderAndVaccines/${dateStart}/${dateEnd}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta rokotteista käytetty. Hakuun laitetaan aloitus ja lopetuspäivä
  howManyVaccinations(dateStart:string, dateEnd:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/howManyVaccinations/${dateStart}/${dateEnd}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta tilausta / rokotetta tuottajaa kohdin. Hakuun laitetaan aloitus ja lopetuspäivä
  manyOrderAndVaccinesPerProducer(dateStart:string, dateEnd:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/manyOrderAndVaccinesPerProducer/${dateStart}/${dateEnd}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta pulloa on vanhentunut tiettynä päivänä. Pullo vanhenee 30 päivän kuluttua saapumisesta
  howManyBottlesExpired(date:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/howManyBottlesExpired/${date}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta rokotetta on vanhentunut ennen käyttöä?
  howManyVaccinesExpired(date:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/howManyVaccinesExpired/${date}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta rokotetta on jäljellä? Aloituspäivä date laskee suoraan -30 päivää taaksepäin
  howManyVaccinesAreLeftToUse(date:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/howManyVaccinesAreLeftToUse/${date}`)
      .pipe(catchError(this.handleError));
  }

  // Kuinka monta rokotetta vanhenee seuraavan 10 päivän aikana? Päivä josta lasketaan seuraavat 10 päivää
  howManyVaccinesExpireNext10Days(date:string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/howManyVaccinesExpireNext10Days/${date}`)
      .pipe(catchError(this.handleError));
  }

}
