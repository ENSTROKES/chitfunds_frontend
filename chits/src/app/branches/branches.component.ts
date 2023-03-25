import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  title = 'Chitfunds';
  users:any; 
  response:any; //allbranch
  result:any; //branchbyID
  ListOfBranchData:any; //allbranch
  ListOfBranchIDData:any; //branchbyID
  output:any;	//headoffice
  ListOfHeadData:any; //headoffice
  searchText:any;
  idoutput:any ;
  BranchDetailsById: Array<Branch>=[] ; //branchID
  BranchDetailById: Branch={ branchId: ' ',
  officeName: ' ',
  phoneNumber: ' ',
  emailID: ' ',
  address: ' ',
  pincode: ' ',
  state: ' ',
  district: ' ',
  city: ' ',
  landmark: ' ',
  remarks: ' ',
  headOffice:' ',
  createdDate: ' ',
  lastUpdatedDate: ' ',
  headOfficeName: ' ',
  startUpDate:' '
} ;
  reslt:any;
  //popup
  //isSubmitted = false;
  isDisplayed: boolean | undefined;
  button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

  
  
  
  
  
  constructor(private http: HttpClient, private userData:UserDataService, ) {

    
    //get branch method
    this.userData.branch().subscribe((data) =>{
      this.response=data;
  Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfBranchData = this.response[prop];
    }
  });
    
  })

  //getbranchbyid
//   this.userData.branchbyID().subscribe((data) =>{
//     this.result=data;
// Object.keys(this.result).forEach(prop => {
//   if(prop=="object"){
//     this.ListOfBranchIDData = this.result[prop];
//   }
// });
  
// })
 
// this.userData.branchbyID().subscribe((data) =>{
//   this.result=data;
// Object.keys(this.result).forEach(prop => {
// if(prop=="object"){
//   this.ListOfBranchIDData = this.result[prop];
// }
// });

// })


//head office
this.userData.head().subscribe((data) =>{
  this.output=data;
Object.keys(this.output).forEach(prop => {
if(prop=="object"){
  this.ListOfHeadData = this.output[prop];
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
  
//   exit() {
//     window.location.reload();
//  }
// GGet BRANCH by ID

  getBranchbyId(data:any): void{
     console.log("GetData" +data);
     
      console.log("AllData" +JSON.stringify(data));
        
     //console.log(new Date("2015/04/29 11:24:00").getTime());
     
     this.http.get(this.userData.branchbyidurl+data).subscribe((data) =>{
      this.idoutput=data;
    Object.keys(this.output).forEach(prop => {
    if(prop=="object"){
      this.BranchDetailById = this.idoutput[prop];
      console.log("GetData" +this.userData.branchbyidurl);
    }
    });
    
    })
       }


  

// create Branch

getbranchFormData(data:any): void{
 console.log("GetData" +data);
  console.log("AllData" +JSON.stringify(data));
  //console.log("GetData" +this.userData.headOffice);
 //console.log(new Date("2015/04/29 11:24:00").getTime());
  this.http.post(this.userData.createbrnch, data).subscribe((result)=>{
   this.reslt = result;
   Object.keys(this.reslt).forEach(prop => {
      console.log("data : " +prop);
        console.log("value : "+this.reslt[prop]);
         if(prop=="responseCode"){
        // this.ListOfEmpData = this.reslt[prop];
          if(this.reslt[prop]=="200"){
            if(window.confirm('Branch is created successfully')){
              location.reload();
            }else{
              location.reload();
            }
          }
          }
      });
    })
   }

  
  

  showHideText(event:any){
  
    if(event.target.checked==true){
      this.isDisplayed = true;
    }
    else{
      this.isDisplayed = false;
    }
    // Add other stuff


    
  }
  ngOnInit(): void {
    
  }
}
function userDetails(branchID: any, string: any) {
  throw new Error('Function not implemented.');
}

