import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
interface outstandbrnh {
  type: string;
}

interface ApiData {
  key: string;
  value: number;
  // other properties if any
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
  data: ApiData[] = [];
  i=0;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private apiService: ApiService ) {
    
    this.sendDataToApi(this.branchdata);
  }


      goToPage(pageName:string,brnhvalue:any):void{
        console.log(brnhvalue);
        this.router.navigate([`${pageName}`],{ queryParams: { brnhvalue}  });
      } 
      sendDataToApi(data: any): void {
        this.apiService.postData(data).subscribe(response => {
          // Handle the response from the API if needed
          this.data = response.object;
          console.log("data");
          console.log(this.data);
        });
      }

      ngOnInit(): void {
        
      }

}



