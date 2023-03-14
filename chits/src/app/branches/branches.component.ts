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



getUserFormData(data:any): void{
  console.warn(data)
  this.userData.createUser(data).subscribe((result)=>{
    console.warn(result)
  })
   }

  ngOnInit(): void {
  }

  delete(user_id:any){
  
    this.userData.delete(user_id).subscribe((result) =>
    {
      if(confirm('Are you sure to delete?'))
      console.log(result);
      //this.ngOnInit();
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

}
