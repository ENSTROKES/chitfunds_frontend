import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserDataService} from 'src/app/users-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
  getData:any;
  username:any;
  password:any;
  

  
    

  constructor(private router: Router,  private userData:UserDataService) {
       
     }

  ngOnInit(): void {
    
  }
  loginUser() {
   

    var user = this.username;
     var password = this.password;
    var usr = "admin";
     var pwd ="admin123"
    if (user == usr){
        if (password == pwd){
          this.router.navigate(["/"]);
        }
        else {
        alert("Invalid Password");
        }
      }
    else{
      alert("Invalid Username");
    }
  }

}

//Login method
// this.userData.getLoginData(user, password)
//       .subscribe((data) => {
//         this.getData = data;
        

//         if (this.getData == true) {
         
//          this.router.navigate(["/home"])
//         } else {
//          alert("Invalid users")
//         }
//       });
//     }
 
