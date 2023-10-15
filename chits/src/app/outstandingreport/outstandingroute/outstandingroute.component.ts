import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
interface outstandroute {
  type: string;
  value: string;
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
  brnhvalue:any;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef ) {
    
    this.route.queryParams.subscribe(params => {
      this.routedata.value= params['brnhvalue'];
  
    });

   this.getrouteData(this.routedata);
  }


  

  routereslt:any;
  getrouteData(data:any): void{
     this.http.post(this.userData.outstandingreport, data).subscribe((result)=>{
       
      this.routereslt = result;
       })
      }
      goToPage(pageName:string,brnhvalue:any):void{
        this.router.navigate([`${pageName}`],{ queryParams: { brnhvalue}  });
      } 
      goTobackPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);
      } 
}
