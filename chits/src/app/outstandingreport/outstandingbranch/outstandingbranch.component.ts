import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
interface outstandbrnh {
  type: string;
}


@Component({
  selector: 'app-outstandingbranch',
  templateUrl: './outstandingbranch.component.html',
  styleUrls: ['./outstandingbranch.component.css']
})
export class OutstandingbranchComponent {
  branchdata : outstandbrnh = {
    type:"branch"
  }


  constructor(private http: HttpClient, private userData:UserDataService,private router: Router ) {
    
    this.getbranchData(this.branchdata);
  }



  reslt:any;
  getbranchData(data:any): void{
     this.http.post(this.userData.outstandingreport, data).subscribe((result)=>{
       
      this.reslt = result;
      console.log(this.reslt);
      console.log(this.reslt.COONOOR);
      if(this.reslt.responseCode!="200"){
        {    
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Internal Server Error',
            showConfirmButton: false,
          })
          setTimeout(() => {
           
            location.reload();
          }, 1000);
        }
      }
       })
      }
      goToPage(pageName:string,brnhvalue:any):void{
        this.router.navigate([`${pageName}`],{ queryParams: { brnhvalue}  });
      } 

}



