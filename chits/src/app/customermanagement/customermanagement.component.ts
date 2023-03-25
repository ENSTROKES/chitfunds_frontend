import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from "@syncfusion/ej2-angular-navigations";
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Customer } from '../model/customer.model'; 
import { CustomerService } from '../model/customer.service';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-customermanagement',
  templateUrl: './customermanagement.component.html',
  styleUrls: ['./customermanagement.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class CustomermanagementComponent implements OnInit {
  @ViewChild("adaptiveTab")
  public tabObj!: TabComponent;
  title = 'Chitfunds';
  users:any; 
  searchText: any;
  // get branch
  response:any;
  ListOfBranchData:any;
//spinner
button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

// Post Customer
customerresult: any;
customer : Customer = {
  branch_name:'',
  joining_date:'',
  guarantor:'',
  refered_type:'',
  refered_by:'',
  personalDetails:{
                   name:'',
                   father:'',
                   spouse_name:'',
                   DOB:'',
                   aadhar_no:'',
                   pan:'',
                   gender:'',
                   occupation:'',
                   monthly_income:'',
                   marrital_status:'',
                   address:'',
                   pincode:'',
                   state:'',
                   city:'',
                   landmark:''
                                  },                                
  customerNomineeDetails:{                                
                          name:'',
                          DOB:'',
                          relationship:'',
                          nominee_address:'',
                          }
  }



  constructor(private http: HttpClient, private userData:UserDataService ) { 
    this.userData.branch().subscribe((data) =>{
      this.response=data;
  Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfBranchData = this.response[prop];
    }
  });
    
  })
}
getUserFormData(data:any){
  console.warn(data)
  this.userData.createUser(data).subscribe((result)=>{
    console.warn(result)
  })
}
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

// Create customer post
getCustomerFormData(data:any): void{
  console.log("GetData" +data);
    console.log("AllData" +JSON.stringify(data));
    console.log("Hello World");
   
    //console.log("GetData" +this.userData.headOffice);
  
   //console.log(new Date("2015/04/29 11:24:00").getTime());
  
   
    this.http.post(this.userData.createcustomer, data).subscribe((result)=>{
     this.customerresult = result;
      
     Object.keys(this.customerresult).forEach(prop => {
        console.log("data : " +prop);
        
          console.log("value : "+this.customerresult[prop]);
           if(prop=="responseCode"){
          // this.ListOfEmpData = this.reslt[prop];
            if(this.customerresult[prop]=="200"){
              if(window.confirm('Customer is created successfully')){
                location.reload();
              }else{
                location.reload();
              }
            }
            }
        });
      })
     }

// getCustomerFormData(): void
//   {
//     console.log(this.customer);
//     this._cusService.getCustomerFormData(this.customer);
//    // this.route.navigate(['list']);
//   }


  ngOnInit(): void {
  }
  
  
}
