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
// Get Customer
custmresponse:any;
ListOfCustomerData:any;
// Post Customer
customerresult: any;
customer : Customer = {
  customerId:'',
  branch_name:'',
  joining_date:'',
  guarantor:'',
  refered_type:'',
  refered_by:'',
  personalDetails:{
                   name:'',
                   father:'',
                   spouse_name:'',
                   dob:'',
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
                   landmark:'',
                   phoneNumber:'',
                   email:''
                                  },                                
  customerNomineeDetails:{                                
                          name:'',
                          dob:'',
                          relationship:'',
                          nominee_address:'',
                          }
  }

  // get customer by id
  idoutput:any;
  customerDetailbyid : Customer = {
    customerId:'',
    branch_name:'',
    joining_date:'',
    guarantor:'',
    refered_type:'',
    refered_by:'',
    personalDetails:{
                     name:'',
                     father:'',
                     spouse_name:'',
                     dob:'',
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
                     landmark:'',
                     phoneNumber:'',
                     email:''
                                    },                                
    customerNomineeDetails:{                                
                            name:'',
                            dob:'',
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




    // get all customer method
    this.userData.customer().subscribe((data) =>{
      this.custmresponse=data;
      console.log("AllData" +JSON.stringify(data));
    Object.keys(this.custmresponse).forEach(prop => {
    if(prop=="object"){
      this.ListOfCustomerData = this.custmresponse[prop];
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
getCustomerFormData(): void{
  // console.log("GetData" +data);
  //   console.log("AllData" +JSON.stringify(data));
    // console.log("Hello World");
    //console.log("GetData" +this.userData.headOffice);
   //console.log(new Date("2015/04/29 11:24:00").getTime());
    this.http.post(this.userData.createcustomer,this.customer ).subscribe((result)=>{
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

// Get customer by id
getCustomerbyId(data:any): void{
  // console.log("GetData" +data);
   
   // console.log("AllData" +JSON.stringify(data));
      
   //console.log(new Date("2015/04/29 11:24:00").getTime());
   
   this.http.get(this.userData.customerbyidurl+data).subscribe((data) =>{
    this.idoutput=data;
  Object.keys(this.idoutput).forEach(prop => {
  if(prop=="object"){
    this.customerDetailbyid = this.idoutput[prop];
    //console.log("GetData" +this.userData.branchbyidurl);
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
