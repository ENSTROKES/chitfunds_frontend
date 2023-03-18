import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
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

  reslt:any;
  //popup
  //isSubmitted = false;
  isDisplayed: boolean | undefined;
  
  constructor(private http: HttpClient, private userData:UserDataService) {

    
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
  this.userData.branchbyID().subscribe((data) =>{
    this.result=data;
Object.keys(this.result).forEach(prop => {
  if(prop=="object"){
    this.ListOfBranchIDData = this.result[prop];
  }
});
  
})
 
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

 


// create Branch

getbranchFormData(data:any): void{
//  console.log("GetData" +data.officeName);
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
