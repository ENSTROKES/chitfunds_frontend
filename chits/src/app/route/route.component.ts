import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/model/customer.model';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {
  response:any;
  ListOfBranchData:any;
  routdata:any;
  ListOfrouteData:any;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef,private apiService: ApiService) {


    this.userData.branch().subscribe((data) =>{
      this.response=data;
  Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfBranchData = this.response[prop];
    }
  });
    
  })

   this.http.get(this.userData.getallroute).subscribe((result)=>{
    this.routdata=result;
  Object.keys(this.routdata).forEach(prop => {
    if(prop=="object"){
      this.ListOfrouteData = this.routdata[prop];
    }
  });

   })


  }

  reslt: any;
  getrouteFormData(data:any): void{
    console.log("GetData" +data);
     console.log("AllData" +JSON.stringify(data));
     ////console.log("GetData" +this.userData.headOffice);
    ////console.log(new Date("2015/04/29 11:24:00").getTime());
    
     this.http.post(this.userData.createroute, data).subscribe((result)=>{
       
      this.reslt = result;
      if(this.reslt.responseCode=="200"){
       {   
         Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Route Created successfully!',
           showConfirmButton: false,
         })
         setTimeout(() => {
           
           location.reload();
         }, 1000);
       }
       
     }
     else {
       {    
         Swal.fire({
           position: 'center',
           icon: 'error',
           title: 'Error with Route Creation!',
           showConfirmButton: false,
         })
         setTimeout(() => {
          
           location.reload();
         }, 1000);
       }
     }
  
       })
      }



}
