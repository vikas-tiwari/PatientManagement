import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { PatientService } from '../Patient.service';


@Component({
  templateUrl: './patientDetails.component.html',
  styleUrls: ['./patient.home.css']
})

export class PatientDataComponent {
 patients: any;
 errorMsg:any;

  constructor(private service: PatientService) {
  this.service.getAllPatients().subscribe( res => {
    this.patients = res;
    console.log(this.patients);
  },
  error =>  this.errorMsg = <any>error)
  }
}
