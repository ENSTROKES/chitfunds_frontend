import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
interface outstandsub {
    type:string,
    value: string
  }
@Component({
  selector: 'app-outstandingroutsub',
  templateUrl: './outstandingroutsub.component.html',
  styleUrls: ['./outstandingroutsub.component.css']
})
export class OutstandingroutsubComponent {
  subdata : outstandsub = {
    type:"subscription",
    value:""
  }
  brnhvalue:any;
  data: any;
  
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef,private apiService: ApiService ) {
    this.route.queryParams.subscribe(params => {
      this.subdata.value= params['brnroute'];
      this.brnhvalue= params['brnhvalue'];
      console.log(this.brnhvalue);
    });
    this.sendDataToApi(this.subdata);
  }

  goToPage(pageName:string,subvalue:any):void{
    this.router.navigate([`${pageName}`],{ queryParams: { subvalue , routvalue: this.subdata.value,brnroute : this.subdata.value,brnhvalue : this.brnhvalue }  });
  } 
  goToBackPage(pageName: string): void {
    console.log(this.brnhvalue);
    this.router.navigate([`${pageName}`], {
      queryParams: {
        brnhvalue: this.brnhvalue
      }
    });
  }
  sendDataToApi(data: any): void {
    this.apiService.postData(data).subscribe(response => {
      // Handle the response from the API if needed
      this.data = response.object;
      console.log("data");
      console.log(this.data);
    });
  }
}
