import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { MyDatePickerModule } from 'mydatepicker';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './patient/patient.home.component';
import { DonationComponent } from './donation/donation.home.component';
import { PatientDataComponent } from './patient/patientDetails.component';
import { PatientService } from './Patient.service';
import { DonationDataComponent } from './donation/donationDetails.component';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'getPatients', component: PatientDataComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'donationDetails', component: DonationDataComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonationComponent,
    PatientDataComponent,
    DonationDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MyDatePickerModule,
    HttpModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [PatientService],
  bootstrap: [AppComponent]
})

export class AppModule { }
