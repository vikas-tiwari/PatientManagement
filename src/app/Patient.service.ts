import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class  PatientService {

    url: String;
    
    constructor(private http: HttpClient) {
        // this.url='';
    }

    getAllPatients() {
        let url= this.url+"/getAllPatients";
        return this
            .http
            .get("/getAllPatients")
            .pipe(map((res : any )=> {
              return res;
            }));
    }

    insertPatient(Patient) {
        let url= this.url+"/patient";
        return this.http.post(url, Patient)
            .pipe(map( (res:any)=>{
                return res;
            }));
    }

    insertDonation(DonationInput) {
        let url= this.url+"/insertDonation";
        return this.http.post(url, DonationInput)
            .pipe(map( (res:any)=>{
                return res;
            }));
    }

    getDonationDetails() {
        let url= this.url+"/getDonations";
        return this
            .http
            .get(url)
            .pipe(map((res : any )=> {
              return res;
            }));
    }

}