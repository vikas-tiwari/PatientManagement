import { Component } from '@angular/core';
import {IMyDpOptions, IMyDateModel, IMyDate} from 'mydatepicker';
import { Router, RouterModule } from '@angular/router';

import { PatientService } from '../Patient.service';
import { HttpClient } from '@angular/common/http';
import { Patient } from './Patient.model';


@Component({
  selector: 'patient-root',
  templateUrl: './patient.home.html',
  styleUrls: ['./patient.home.css']
})

export class HomeComponent {

  model:any;
  errorMsg:any;
  selDate: IMyDate = {year: 0, month: 0, day: 0}
    
  constructor(private service: PatientService, private router: Router) {
    this.model= new Patient();
    let d: Date = new Date();
    this.selDate = {year: d.getFullYear(), 
                    month: d.getMonth() + 1, 
                    day: d.getDate()};
     this.model.dob=this.selDate;                  
  }
  
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd mmm yyyy',
    showTodayBtn: true,
    showClearDateBtn: false,
    editableDateField: false
};

  
onDateChanged(event: IMyDateModel) {
  // Update value of selDate variable
  this.selDate=event.date;
  this.model.dob=this.selDate;
}

  ngOnInit() {
    
  }

  onSubmit() {
    if(this.model.gender == "Male") {
      this.model.gender="M";
    } else {
      this.model.gender="F";
    }
    this.model.dob= this.model.dob.year+"-"+this.model.dob.month+"-"+this.model.dob.day;
    this.service.insertPatient(this.model).subscribe(res => {
    },
    error =>{
      this.errorMsg = <any>error
      }
    );

    if(this.errorMsg ! = null ) {
      window.location.href = "/error";
    }
    alert("Patient Data added successfully. Visit Patient Detail Page to view details of patients");
    window.location.href = "/home";
    }

}
