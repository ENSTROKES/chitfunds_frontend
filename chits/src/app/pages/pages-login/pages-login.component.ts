import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {UserDataService} from 'src/app/users-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
  getData:any;
  username:any;
  password:any;
  loginout:any;

  
    

  constructor(private  http: HttpClient, private router: Router,  private userData:UserDataService) {
       
     }

  ngOnInit(): void {
    
  }
  loginUser() {
   

    // var user = this.username;
    //  var password = this.password;




     
    // var usr = "admin";
    //  var pwd ="admin123"

    // if (user == usr){
    //     if (password == pwd){
    //       this.router.navigate(["/dashboard"]);
    //     }
    //     else {
    //     alert("Invalid Password");
    //     }
    //   }
    // else{
    //   alert("Invalid Username");
    // }
  }
  getlogindata(): void{

    var user = this.username;
     var password = this.password;
      ////console.log("AllData" +JSON.stringify(data)); 
      //console.log( this.username);
      //console.log(this.password);
      this.http.get(this.userData.loginurl+this.username+"&passWord="+this.password).subscribe((data) =>{
        //console.log(this.http);
        this.loginout=data;
        //console.log("AllData" +JSON.stringify(data));
       Object.keys(this.loginout).forEach(prop => {
          //console.log("data : " +prop);
            //console.log("value : "+this.loginout[prop]);
             if(prop=="responseCode"){
            // this.ListOfEmpData = this.reslt[prop];
              if(this.loginout[prop]=="200"){
                localStorage.setItem("SeesionUser", this.username);
                this.router.navigate(["/dashboard"]);
                }else
                {
                  alert("Invalid Username or Password");
                }
              }
              })
          });
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
 
