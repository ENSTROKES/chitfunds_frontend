import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, NgForm} from '@angular/forms';  
import { EmployeeID } from '../model/employeedetail.model';

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
  reslt:any;
  // ListOfCollData :any;
  userId: any; 
searchText:any;
CategoryName = {};
employee_id:any;
//branch
result:any;
ListOfBranchData:any;
selectedbranch:any;
 
//delete employee
empdelete:any
//spinner
button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

  //employee by ID
  empidoutput:any;
  EmployeeDetailsByID : EmployeeID= {
    emp_code: ' ',
    _id:'',
    branch_name: ' ' ,
    salution: ' ' ,
    first_name: ' ' ,
    last_name: ' ' ,
    gender: ' ' ,
    blood_group: ' ' ,
    mobile_number: ' ' ,
    email: ' ' ,
    aadhar_no: ' ' ,
    pan_no: ' ' ,
    father_name: ' ',
    spouse_name: ' ' ,
    designation: ' ' ,
    qalification: ' ' ,
    joining_date: ' ' ,
    verified_by: ' ' ,
    pervious_salary: ' ',
    bank_name: ' ',
    account_holder_name: ' ' ,
    account_number: ' ' ,
    salary: ' ',
    incentive: ' ' ,
    target: ' ' ,
    address: ' ' ,
    pincode: ' ' ,
    state: ' ' ,
    distric: ' ' ,
    city: ' ' ,
    landmark: ' ' ,
    experience: ' ' ,
    ifsc_code: ' ' ,
    remarks: ' ' ,
    dob: ' ' 
  }
  EmployeeDeleteByID:  EmployeeID= {
    emp_code: ' ',
    _id:'',
    branch_name: ' ' ,
    salution: ' ' ,
    first_name: ' ' ,
    last_name: ' ' ,
    gender: ' ' ,
    blood_group: ' ' ,
    mobile_number: ' ' ,
    email: ' ' ,
    aadhar_no: ' ' ,
    pan_no: ' ' ,
    father_name: ' ',
    spouse_name: ' ' ,
    designation: ' ' ,
    qalification: ' ' ,
    joining_date: ' ' ,
    verified_by: ' ' ,
    pervious_salary: ' ',
    bank_name: ' ',
    account_holder_name: ' ' ,
    account_number: ' ' ,
    salary: ' ',
    incentive: ' ' ,
    target: ' ' ,
    address: ' ' ,
    pincode: ' ' ,
    state: ' ' ,
    distric: ' ' ,
    city: ' ' ,
    landmark: ' ' ,
    experience: ' ' ,
    ifsc_code: ' ' ,
    remarks: ' ' ,
    dob: ' ' 
  }
  

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

//spinner
  
click() {
  this.isLoading = true;
  this.button = 'Processing';

  setTimeout(() => {
    this.isLoading = false;
    this.button = 'Submit';
    //alert('Done loading');
  }, 2000)
}


// //create employee

getEmpFormData(data:any): void{
  console.log("AllData" +JSON.stringify(data));
console.log(new Date("2015/04/29 11:24:00").getTime());
  this.userData.createUser(data).subscribe((result)=>{
   this.response = result;
    
   Object.keys(this.response).forEach(prop => {
    
      console.log("data : " +prop);
       console.log("value : "+this.response[prop]);
       if(prop=="responseCode"){
        // this.ListOfEmpData = this.reslt[prop];
          if(this.response[prop]=="200"){
            if(window.confirm('Employee is created successfully')){
              location.reload();
            }else{
              location.reload();
            }
          }
          }
      
     });
   })
}


     // Get Group by ID

     getEmployeebyId(data:any): void{
      // console.log("GetData" +data);
       
       // console.log("AllData" +JSON.stringify(data));
          
       //console.log(new Date("2015/04/29 11:24:00").getTime());
       
       this.http.get(this.userData.employeebyidurl+data).subscribe((data) =>{
        this.empidoutput=data;
      Object.keys(this.empidoutput).forEach(prop => {
      if(prop=="object"){
        this.EmployeeDetailsByID = this.empidoutput[prop];
        //console.log("GetData" +this.userData.branchbyidurl);
      }
      });
      
      })
      }
         deleteEmployeebyId(data:any): void{
           
           this.http.delete(this.userData.deleteemployee+data).subscribe((data) =>{
          if(confirm('Are you sure to delete?'))
            this.empdelete=data;
          Object.keys(this.empdelete).forEach(prop => {
            if(prop=="responseCode"){
              // this.ListOfEmpData = this.reslt[prop];
                if(this.empdelete[prop]=="200"){
                  if(window.confirm('Employee is deleted successfully')){
                    location.reload();
                  }else{
                    location.reload();
                  }
                }
                }
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





