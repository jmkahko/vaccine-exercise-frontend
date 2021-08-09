import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { FormsModule } from '@angular/forms'; // Lomakkeet saadaan käyttöön form
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HowManyOrderAndVaccinesComponent } from './how-many-order-and-vaccines/how-many-order-and-vaccines.component';
import { HowManyVaccinationsComponent } from './how-many-vaccinations/how-many-vaccinations.component';
import { ManyOrderAndVaccinesPerProducerComponent } from './many-order-and-vaccines-per-producer/many-order-and-vaccines-per-producer.component';
import { HowManyBottlesExpiredComponent } from './how-many-bottles-expired/how-many-bottles-expired.component';
import { HowManyVaccinesExpiredComponent } from './how-many-vaccines-expired/how-many-vaccines-expired.component';
import { HowManyVaccinesAreLeftToUseComponent } from './how-many-vaccines-are-left-to-use/how-many-vaccines-are-left-to-use.component';
import { HowManyVaccinesExpireNext10DaysComponent } from './how-many-vaccines-expire-next10-days/how-many-vaccines-expire-next10-days.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EtusivuComponent,
    NavbarComponent,
    HowManyOrderAndVaccinesComponent,
    HowManyVaccinationsComponent,
    ManyOrderAndVaccinesPerProducerComponent,
    HowManyBottlesExpiredComponent,
    HowManyVaccinesExpiredComponent,
    HowManyVaccinesAreLeftToUseComponent,
    HowManyVaccinesExpireNext10DaysComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
