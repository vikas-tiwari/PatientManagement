import { Component } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { DonationInput } from './donation.model';
import { PatientService } from '../Patient.service';

@Component({
  templateUrl: './donationDetails.component.html',
  styleUrls: ['./donation.home.css']
})

export class DonationDataComponent {
 
  donationsData: any;
  errorMsg:any;
 
   constructor(private service: PatientService) {
   this.service.getDonationDetails().subscribe( res => {
     this.donationsData = res;
   },
   error =>  this.errorMsg = <any>error)
   }

}