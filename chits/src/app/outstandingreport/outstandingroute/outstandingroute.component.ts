import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
interface outstandroute {
  type: string;
  value: string;
}
interface ApiData {
  key: string;
  value: number;
  // other properties if any
}
@Component({
  selector: 'app-outstandingroute',
  templateUrl: './outstandingroute.component.html',
  styleUrls: ['./outstandingroute.component.css']
})
export class OutstandingrouteComponent {
  routedata : outstandroute = {
    type:"route",
    value:""
  }
  data: ApiData[] = [];
  brnhvalue:any;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef,private apiService: ApiService ) {
    
    this.route.queryParams.subscribe(params => {
      this.routedata.value= params['brnhvalue'];
      console.log(this.routedata.value)
    });
    

   this.sendDataToApi(this.routedata);
  }


  

  routereslt:any;
  getrouteData(data:any): void{
     this.http.post(this.userData.outstandingreport, data).subscribe((result)=>{
       
      this.routereslt = result;
       })
      }
      goToPage(pageName:string,brnroute:any):void{
        this.router.navigate([`${pageName}`],{ queryParams: { brnroute ,brnhvalue : this.routedata.value }  });
      } 
      goTobackPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);
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
