import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from "@syncfusion/ej2-angular-navigations";
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Customer } from '../model/customer.model'; 
import { slab } from '../model/slab.module';
import { CustomerService } from '../model/customer.service';
import { HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { docbyid } from '../model/getdocbyid.model';

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
  customerForm = new FormGroup({
    referedBy: new FormControl('',[Validators.required])
  })
     
    

  



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
listofslabdata:any;
customeridupload: any;
customerupresponse:any;
// Post Customer
custreditresp:any;
customerresult: any;
customer : Customer = {
  _id: null,
  branchName:'',
  joiningDate:'',
  customerId:0,
  referedType:'',
  referedBy:'',
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
                         
                          relationship:'',
                         
                          adharNumber:'',
                          createdDate: 0 
                          },
                          customerChitDetails:[{scheme  :  ' ',
                          createdDate: 0 ,
   subscription  :  ' ',
   collection_route  :  ' ',
   
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  chitId:0,
}]
  }

  // get customer by id
  idoutput:any;
  customerDetailbyid : Customer = {
    // customerId:'',
    _id:'',
    branchName:'',
    joiningDate:'',
    customerId:0,
    referedType:'',
    referedBy:'',
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
                            
                            relationship:'',
                            
                            adharNumber:'',
                            createdDate: 0 ,
                            },
                            customerChitDetails:[{scheme  :  ' ',
   subscription  :  ' ',
   collection_route  :  ' ',
   
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
      _id:'',
      branchName:'',
      joiningDate:'',
      customerId:0,
      referedType:'',
      referedBy:'',
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
                              
                              relationship:'',
                              
                              adharNumber:'',
                              createdDate: 0 
                              },
                              customerChitDetails:[{scheme  :  ' ',
   subscription  :  ' ',
   collection_route  :  ' ',
  
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  createdDate: 0 ,
  chitId:0,
}]
      }


///Get Slab details
slaboutpt:any;
slab : slab = {
  slabId:'',
  chitValue:'',
  installment:'',
  dueDaily:'',
  dueWeekly:'',
  dueMonthly:'',
  paymentSlab:[
    {
      id:'',
      installment:'',
      payment:'',
    }
  ]
}
PhotoUrl : String = "";
AdharUrl : String = "";
PanUrl : String = "";
ApplicationUrl : String = "";


/// Get Documents by id

docoupt: any;
Document : docbyid[] = [{
  id:'',
  customerId:'',
  name:'',
  category:'',
  link:'',
}]





  constructor(private http: HttpClient, private userData:UserDataService,private fb: FormBuilder ) { 
   
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


      // get all slab method
    this.http.get(this.userData.getslab).subscribe((data) =>{
      this.slaboutpt=data;
    Object.keys(this.slaboutpt).forEach(prop => {
    if(prop=="object"){
      this.listofslabdata = this.slaboutpt[prop];
      //console.log("GetData" +this.userData.branchbyidurl);
    }
    });
    
    })


    

    
}

// myForm() {
//   this.customerForm = this.fb.group({
//     referedBy: ['', Validators.required ]
//   });
// }
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




getCustomertestData(): void{
  const current = new Date();
  const timestamp = current.getTime();
  console.log(current,timestamp);
  this.customerDetailbyid.customerNomineeDetails.createdDate=timestamp;
  this.customerDetailbyid.customerChitDetails[0].createdDate=timestamp;
    // console.log("AllData" +JSON.stringify(this.customer));
    // console.log("data"+this.customerDetailbyid.personalDetails.name);
    // console.log("data"+this.customerDetailbyid.personalDetails.father);

    console.log("AllData" +JSON.stringify(this.customerDetailbyid));

      this.http.post(this.userData.createcustomer,this.customerDetailbyid ).subscribe((result)=>{
       this.custreditresp = result;
         // console.log(this.customer);
       Object.keys(this.custreditresp).forEach(prop => {
          console.log("data : " +prop);
          if(prop=="responseCode"){
            // this.ListOfEmpData = this.reslt[prop];
              if(this.custreditresp[prop]=="200"){
                if(window.confirm('Customer Changed successfully')){
                  location.reload();
                }else{
                  location.reload();
                }
              }
              }
         
          });
        })
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
  console.log("data"+this.customer.personalDetails.name);
  console.log("data"+this.customer.personalDetails.father);
    this.http.post(this.userData.createcustomer,this.customer ).subscribe((result)=>{
     this.customerresult = result;
       // console.log(this.customer);
     Object.keys(this.customerresult).forEach(prop => {
        console.log("data : " +prop);
        
          // console.log("value : "+this.customerresult[prop]);
          //  if(prop=="responseCode"){
          //   this.customerupresponse= this.customerresult[prop];
          // }
          // if(prop=="object"){
          //   this.customeridupload=this.customerresult[prop];
          // }
          // this.ListOfEmpData = this.reslt[prop];
            if(this.customerresult[prop]=="200"){
              if(window.confirm('Customer is created successfully')){
                location.reload();
              }else{
                location.reload();
              }
              // this.onUpload(6);
            }
            
        });
       
        console.log(this.customerupresponse,this.customeridupload);
        if(this.customerupresponse== 200){
          this.onUpload(this.customeridupload);
        }
      })
     }

// Get customer by id
getCustomerbyId(custid:any): void{
  // console.log("GetData" +data);
   
   //console.log("AllData" +JSON.stringify(data));
      
   //console.log(new Date("2015/04/29 11:24:00").getTime());
   

   this.http.get(this.userData.customerbyidurl+custid).subscribe((data) =>{
    this.idoutput=data;
  Object.keys(this.idoutput).forEach(prop => {
  if(prop=="object"){
    this.customerDetailbyid = this.idoutput[prop];
    //console.log("GetData" +this.userData.branchbyidurl);
    this.getDocumentbyId(custid);
  }
  });
  
  })
     }



     // Get Document by id
getDocumentbyId(custId:any): void{
  // console.log("GetData" +data);
   
   // console.log("AllData" +JSON.stringify(data));
      
   //console.log(new Date("2015/04/29 11:24:00").getTime());
   console.log("Heloo1");
   this.http.get(this.userData.getDocbyid+custId).subscribe((data) =>{
    this.docoupt=data;
    Object.keys(this.docoupt).forEach(prop => {
  if(prop=="object"){
    this.Document = this.docoupt[prop];
    console.log("Heloo");
    console.log("Documents response : " + this.Document[0].link);
    console.log("Documents response : " + this.Document[1].link);
    console.log("Documents response : " + this.Document[2].link);
    console.log("Documents response : " + this.Document[3].link);

    this.PhotoUrl = this.Document[0].link;
    this.AdharUrl = this.Document[1].link;
    this.PanUrl = this.Document[2].link;
    this.ApplicationUrl = this.Document[3].link;
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
      //  sign:any;
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
  // public onsignFileChanged(event:any) {
  //   //Select File
  //   this.sign = event.target.files[0];
  //   console.log("data",this.sign );
  // }
  //Gets called when the user clicks on submit to upload the image
  onUpload(id:any) {
    
    this.customerId=id;
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    if(this.photo !=null && this.aadhar!=null && this.pan!=null && this.appfrm!=null ){

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.photo, this.photo.name);
    uploadImageData.append('adharcard', this.aadhar, this.aadhar.name);
    uploadImageData.append('pancard', this.pan, this.pan.name);
    uploadImageData.append('applicationForm', this.appfrm, this.appfrm.name);
    // uploadImageData.append('signature', this.sign, this.sign.name);
    uploadImageData.append('customerId', this.customerId);
    
    //Make a call to the Spring Boot Application to save the image
    console.log("userdata",uploadImageData);
    this.http.post(this.userData.fileupload, uploadImageData, this.customerId )
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
  }else{
if (window.confirm('Customer craeted successfully without documents')) {
                        location.reload();
                    } else {
                        location.reload();
                    }
  }
  }
// getCustomerFormData(): void
//   {
//     console.log(this.customer);
//     this._cusService.getCustomerFormData(this.customer);
//    // this.route.navigate(['list']);
//   }// Get customer by id



  ngOnInit(): void {
    
}
}

