import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from "@syncfusion/ej2-angular-navigations";
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Customer } from '../model/customer.model'; 
import { CustomerService } from '../model/customer.service';
import { HttpEventType } from '@angular/common/http';

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
customeridupload: any;
customerupresponse:any;
// Post Customer
customerresult: any;
customer : Customer = {
  
  branch_name:'',
  joining_date:'',
  customerId:0,
  refered_type:'',
  refered_by:'',
  personalDetails:{customerPersonalId:0,
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
                   email:'',
                   altrPhoneNumber:''
                                  },                                
  customerNomineeDetails:{   nomineeId:0,                             
                          name:'',
                          dob:'',
                          relationship:'',
                          nominee_address:'',
                          adharNumber:'',
                          createdDate: 0 
                          },
                          customerChitDetails:[{scheme  :  ' ',
                          createdDate: 0 ,
   subscription  :  ' ',
   collection_route  :  ' ',
   collection_pincode  :' ',
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  chitId:0,
}]
  }

  // get customer by id
  idoutput:any;
  customerDetailbyid : Customer = {
    // customerId:'',
    branch_name:'',
    joining_date:'',
    customerId:0,
    refered_type:'',
    refered_by:'',
    personalDetails:{customerPersonalId:0,
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
                     altrPhoneNumber:'',
                     email:''
                                    },                                
    customerNomineeDetails:{ nomineeId:0,                                 
                            name:'',
                            dob:'',
                            relationship:'',
                            nominee_address:'',
                            adharNumber:'',
                            createdDate: 0 ,
                            },
                            customerChitDetails:[{scheme  :  ' ',
   subscription  :  ' ',
   collection_route  :  ' ',
   collection_pincode  :' ',
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  createdDate: 0 ,
  chitId:0,
}]
    }
    //delete customer
    customerdelete:any;
    customerDeletebyid : Customer = {
      // customerId:'',
      branch_name:'',
      joining_date:'',
      customerId:0,
      refered_type:'',
      refered_by:'',
      personalDetails:{
        customerPersonalId:0,
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
                       altrPhoneNumber:'',
                       email:''
                                      },                                
      customerNomineeDetails:{    nomineeId:0,                              
                              name:'',
                              dob:'',
                              relationship:'',
                              nominee_address:'',
                              adharNumber:'',
                              createdDate: 0 
                              },
                              customerChitDetails:[{scheme  :  ' ',
   subscription  :  ' ',
   collection_route  :  ' ',
   collection_pincode  :' ',
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  createdDate: 0 ,
  chitId:0,
}]
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
  const current = new Date();
const timestamp = current.getTime();
console.log(current,timestamp);

this.customer.customerNomineeDetails.createdDate=timestamp;
this.customer.customerChitDetails[0].createdDate=timestamp;
  // console.log("GetData" +data);
  console.log("AllData" +JSON.stringify(this.customer));
  
    // console.log("Hello World");
    //console.log("GetData" +this.userData.headOffice);
   //console.log(new Date("2015/04/29 11:24:00").getTime());
  console.log("data"+this.customer);
    this.http.post(this.userData.createcustomer,this.customer ).subscribe((result)=>{
     this.customerresult = result;
       // console.log(this.customer);
     Object.keys(this.customerresult).forEach(prop => {
        console.log("data : " +prop);
        
          console.log("value : "+this.customerresult[prop]);
           if(prop=="responseCode"){
            this.customerupresponse= this.customerresult[prop];
          }
          if(prop=="object"){
            this.customeridupload=this.customerresult[prop];
          }
          // this.ListOfEmpData = this.reslt[prop];
            // if(this.customerresult[prop]=="200"){
            //   // if(window.confirm('Customer is created successfully')){
            //   //   location.reload();
            //   // }else{
            //   //   location.reload();
            //   // }
            //   this.onUpload(6);
            // }
            
        });
        console.log(this.customerupresponse,this.customeridupload);
        if(this.customerupresponse=="200"){
          this.onUpload(this.customeridupload);
        }
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


     //delete customer
     deleteCustomerbyId(data:any): void{
           
      this.http.delete(this.userData.deletecustomer+data).subscribe((data) =>{
     if(confirm('Are you sure to delete?'))
       this.customerdelete=data;
     Object.keys(this.customerdelete).forEach(prop => {
       if(prop=="responseCode"){
         // this.ListOfEmpData = this.reslt[prop];
           if(this.customerdelete[prop]=="200"){
             if(window.confirm('Customer deleted successfully')){
               location.reload();
             }else{
               location.reload();
             }
           }
           }
     });
     
     })
        }
     
       //Gets called when the user selects an image
       aadhar: any;
       pan:any;
       appfrm:any;
       photo:any;
       sign:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;
  customerId:any;
  uploadresponse:any;
  
  public onaadharFileChanged(event:any) {
    //Select File
    this.aadhar = event.target.files[0];
    console.log("data",this.aadhar );
  }
  public onpanFileChanged(event:any) {
    //Select File
    this.pan = event.target.files[0];
    console.log("data",this.pan );
  }
  public onphotoFileChanged(event:any) {
    //Select File
    this.photo = event.target.files[0];
    console.log("data",this.photo );
  }
  public onappfrmFileChanged(event:any) {
    //Select File
    this.appfrm = event.target.files[0];
    console.log("data",this.appfrm );
  }
  public onsignFileChanged(event:any) {
    //Select File
    this.sign = event.target.files[0];
    console.log("data",this.sign );
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload(id:any) {
    
    this.customerId=id;
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.photo, this.photo.name);
    uploadImageData.append('adharcard', this.aadhar, this.aadhar.name);
    uploadImageData.append('pancard', this.pan, this.pan.name);
    uploadImageData.append('applicationForm', this.appfrm, this.appfrm.name);
    uploadImageData.append('signature', this.sign, this.sign.name);
    uploadImageData.append('customerId', this.customerId);
    
    //Make a call to the Spring Boot Application to save the image
    console.log("userdata",uploadImageData);
    this.http.post(this.userData.fileupload, uploadImageData,this.customerId )
      .subscribe((response) => {
        
      this.uploadresponse= response;
        Object.keys(this.uploadresponse).forEach(prop => {
            if (prop == "responseCode") {
                // this.ListOfEmpData = this.reslt[prop];
                if (this.uploadresponse[prop] == "200") {
                    if (window.confirm('Customer craeted successfully')) {
                        location.reload();
                    } else {
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
