import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/patient/patient.home.component';
import { PatientDataComponent } from './app/patient/patientDetails.component';
import { DonationComponent } from './app/donation/donation.home.component';
import { DonationDataComponent } from './app/donation/donationDetails.component';



const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'getPatients', component: PatientDataComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'donationDetails', component: DonationDataComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}