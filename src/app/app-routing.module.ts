import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { HowManyBottlesExpiredComponent } from './how-many-bottles-expired/how-many-bottles-expired.component';
import { HowManyGenderVaccinationsPerHealthComponent } from './how-many-gender-vaccinations-per-health/how-many-gender-vaccinations-per-health.component';
import { HowManyGenderVaccinationsComponent } from './how-many-gender-vaccinations/how-many-gender-vaccinations.component';
import { HowManyOrderAndVaccinesComponent } from './how-many-order-and-vaccines/how-many-order-and-vaccines.component';
import { HowManyVaccinationsComponent } from './how-many-vaccinations/how-many-vaccinations.component';
import { HowManyVaccinesAreLeftPerHealthComponent } from './how-many-vaccines-are-left-per-health/how-many-vaccines-are-left-per-health.component';
import { HowManyVaccinesAreLeftToUseComponent } from './how-many-vaccines-are-left-to-use/how-many-vaccines-are-left-to-use.component';
import { HowManyVaccinesExpireNext10DaysComponent } from './how-many-vaccines-expire-next10-days/how-many-vaccines-expire-next10-days.component';
import { HowManyVaccinesExpiredComponent } from './how-many-vaccines-expired/how-many-vaccines-expired.component';
import { ManyOrderAndVaccinesPerProducerComponent } from './many-order-and-vaccines-per-producer/many-order-and-vaccines-per-producer.component';

// Reitit
const routes: Routes = [
  { path: 'howManyOrderAndVaccines', component: HowManyOrderAndVaccinesComponent},
  { path: 'howManyVaccinations', component: HowManyVaccinationsComponent},
  { path: 'manyOrderAndVaccinesPerProducer', component: ManyOrderAndVaccinesPerProducerComponent},
  { path: 'howManyBottlesExpired', component: HowManyBottlesExpiredComponent },
  { path: 'howManyVaccinesExpired', component: HowManyVaccinesExpiredComponent },
  { path: 'howManyVaccinesAreLeftToUse', component: HowManyVaccinesAreLeftToUseComponent },
  { path: 'howManyVaccinesExpireNext10Days', component: HowManyVaccinesExpireNext10DaysComponent },
  { path: 'howManyGenderVaccinations', component: HowManyGenderVaccinationsComponent },
  { path: 'howManyVaccinesAreLeftPerHealth', component: HowManyVaccinesAreLeftPerHealthComponent },
  { path: 'howManyGenderVaccinationsPerHealth', component: HowManyGenderVaccinationsPerHealthComponent },
  { path: 'etusivu', component: EtusivuComponent },
  { path: '', redirectTo: '/etusivu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
