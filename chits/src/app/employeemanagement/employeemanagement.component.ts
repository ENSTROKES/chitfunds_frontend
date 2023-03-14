import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, NgForm} from '@angular/forms';  

interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
  }

@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.css']
})
export class EmployeemanagementComponent implements OnInit {
  title = 'Chitfunds';
  users:any; 
  Users = {};
  res : any;
  response:any;
  ListOfEmpData :any;
  // ListOfCollData :any;
  userId: any; 
searchText:any;
CategoryName = {};
  
//branch
result:any;
ListOfBranchData:any
 


  constructor(private http: HttpClient, private userData:UserDataService) {
    //get employee
     this.userData.users().subscribe((data) =>{
    this.res =  data;

    Object.keys(this.res).forEach(prop => {
     // console.log("key : " +prop);
     // console.log("value : "+this.res[prop]);
      if(prop=="object"){
        this.ListOfEmpData = this.res[prop];
      }
    });
   // console.log("get string data ==>>" +JSON.stringify(this.ListOfEmpData[0]));
   // console.log("get data ==>>" + JSON.parse(this.empData));
 // this.users=this.ListOfEmpData;
})

this.userData.branch().subscribe((data) =>{
  this.result=data;
Object.keys(this.result).forEach(prop => {
if(prop=="object"){
  this.ListOfBranchData = this.result[prop];
}
});

})
}
//mobile number restriction method
 
//get branch name




getEmpFormData(data:any): void{
  console.log("GetData" +data.branch_name);
  console.log("AllData" +JSON.stringify(data));
  this.userData.createUser(data).subscribe((result)=>{
    this.response = result;
    
    Object.keys(this.response).forEach(prop => {
      console.log("data : " +prop);
       console.log("value : "+this.response[prop]);
      //  if(prop=="object"){
      //    this.ListOfEmpData = this.response[prop];
      //  }
     });
  })
}
edit(user_id:any){
    
  this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1',user_id)
  .subscribe(data => 
    
    this.userId = data.id);
 }
 selectedUser = null;
 el:any;
 

 delete(user_id:any){
  
  this.userData.delete(user_id).subscribe((result) =>
  {
    if(confirm('Are you sure to delete?'))
    console.log(result);
    //this.ngOnInit();
  })
 }

  ngOnInit(): void {
    this.CategoryName = this.userData.CategoryName;
  }
    //mobile number restriction method
}





