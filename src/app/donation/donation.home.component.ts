import { Component } from '@angular/core';
import {IMyDpOptions,IMyDate, IMyDateModel} from 'mydatepicker';
import { DonationInput } from './donation.model';
import { PatientService } from '../Patient.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './donation.home.html',
  styleUrls: ['./donation.home.css']
})

export class DonationComponent {

  model: any;
  errorMsg: any;
  submitted: boolean=false;
  private selDate: IMyDate = {year: 0, month: 0, day: 0}

  constructor(private service: PatientService , private router: Router) {
    this.model=  new DonationInput();
    let d: Date = new Date();
    this.selDate = {year: d.getFullYear(), 
                    month: d.getMonth() + 1, 
                    day: d.getDate()};
     this.model.dod=this.selDate;                  
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
  this.model.dod=this.selDate;
}

onSubmit() {
  if(this.model.gender == "Male") {
    this.model.gender="M";
  } else {
    this.model.gender="F";
  }
  this.model.dod= this.model.dod.year+"-"+this.model.dod.month+"-"+this.model.dod.day;
  this.service.insertDonation(this.model).subscribe( res => {
    console.log(res);
  },
  error =>{
    this.errorMsg = <any>error
    }
  );

  if(this.errorMsg ! = null ) {
    window.location.href = "/error";
  }
  alert("Donation Data added successfully");
  window.location.href = "/donation";
}

}