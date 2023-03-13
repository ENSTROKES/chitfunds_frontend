import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  title = 'Chitfunds';
  users:any; 
  searchText:any;
  //popup
  //isSubmitted = false;
  isDisplayed: boolean | undefined;
  
  constructor(private http: HttpClient, private userData:UserDataService) {
    this.userData.users().subscribe((data) =>{
      this.users=data;
  })
}
/*########### Template Driven Form ###########*/
// submitForm(form: NgForm) {
//   this.isSubmitted = true;
//   if(!form.valid) {
//     return false;
//   } else {
//     return true; 
//   }
  
// }

getUserFormData(data:any): void{
  console.warn(data)
  this.userData.createUser(data).subscribe((result)=>{
    console.warn(result)
  })
   }

  ngOnInit(): void {
  }

  //popup
  

  showHideText(event:any){
  
    if(event.target.checked==true){
      this.isDisplayed = true;
    }
    else{
      this.isDisplayed = false;
    }
    // Add other stuff
  }

}
