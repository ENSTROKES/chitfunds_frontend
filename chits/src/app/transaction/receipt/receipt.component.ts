import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/users-data.service';
import { Observable } from 'rxjs';
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  title = 'Chitfunds';
  users: any;
  userId: any; 
  searchText:any;
  CategoryName = {};
  Users = {};
  res : any;
  ListOfEmpData :any;
  NameList: any;
  service: any;
  response:any;
  ListOfBranchData:any;
  recptreslt:any;
  ListOfGroupData:any;
//customer
ListOfCustomerData:any;
custmresponse:any

//recipt
ListOfReceiptData:any;
receiptres:any;

//spinner
button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }
  constructor(private http: HttpClient, private userData: UserDataService) {
// get all receipt
this.userData.receipt().subscribe((data) =>{
  this.receiptres=data;
Object.keys(this.receiptres).forEach(prop => {
if(prop=="object"){
  this.ListOfReceiptData = this.receiptres[prop];
}
});

})




    // get all group method
    this.userData.group().subscribe((data) =>{
      this.response=data;
    Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.response[prop];
    }
    });
    
    })

    // get all customer method
    this.userData.customer().subscribe((data) =>{
      this.custmresponse=data;
    Object.keys(this.custmresponse).forEach(prop => {
    if(prop=="object"){
      this.ListOfCustomerData = this.custmresponse[prop];
    }
    });
    
    })

    //get employee method
    this.userData.users().subscribe((data) =>{
      this.res =  data;

      Object.keys(this.res).forEach(prop => {
       // console.log("key : " +prop);
       // console.log("value : "+this.res[prop]);
        if(prop=="object"){
          this.ListOfEmpData = this.res[prop];
        }
      });
  })
// get branch

this.userData.branch().subscribe((data) =>{
  this.response=data;
Object.keys(this.response).forEach(prop => {
if(prop=="object"){
  this.ListOfBranchData = this.response[prop];
}
});

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
  //create reciept

  getrecieptFormData(data:any): void{
    //  console.log("GetData" +data.officeName);
      console.log("AllData" +JSON.stringify(data));
    
     
      //console.log("GetData" +this.userData.headOffice);
    
     //console.log(new Date("2015/04/29 11:24:00").getTime());
    
     
      this.http.post(this.userData.createreceipt, data).subscribe((result)=>{
       this.recptreslt = result;
        
       Object.keys(this.recptreslt).forEach(prop => {
          console.log("data : " +prop);
            console.log("value : "+this.recptreslt[prop]);
             if(prop=="responseCode"){
            // this.ListOfEmpData = this.reslt[prop];
              if(this.recptreslt[prop]=="200"){
                if(window.confirm('Receipt is created successfully')){
                  location.reload();
                }else(window.confirm('Error in creating receipt'))
                {
                  location.reload();
                }
              }
              }
          });
        })
       }

  ngOnInit(): void {
    this.userData.getNameList().subscribe((data: any) => {
      this.NameList = data;
    });
  }
}
