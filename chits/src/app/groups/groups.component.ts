import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isDisplayed: boolean | undefined;
  searchText: any;
  users:any;
  //branch
  response:any;
  ListOfBranchData:any;

  //group
  grpreslt:any;

  constructor(private http: HttpClient, private userData:UserDataService) { 
    this.userData.branch().subscribe((data) =>{
      this.response=data;
  Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfBranchData = this.response[prop];
    }
  });
    
  })
}

// Create Group Method

getgroupFormData(data:any): void{
  //  console.log("GetData" +data.officeName);
    console.log("AllData" +JSON.stringify(data));
  
   
    //console.log("GetData" +this.userData.headOffice);
  
   //console.log(new Date("2015/04/29 11:24:00").getTime());
  
   
    this.http.post(this.userData.creategrp, data).subscribe((result)=>{
     this.grpreslt = result;
      
     Object.keys(this.grpreslt).forEach(prop => {
        console.log("data : " +prop);
          console.log("value : "+this.grpreslt[prop]);
           if(prop=="responseCode"){
          // this.ListOfEmpData = this.reslt[prop];
            if(this.grpreslt[prop]=="200"){
              if(window.confirm('Group is created successfully')){
                location.reload();
              }else{
                location.reload();
              }
            }
            }
        });
      })
     }


  ngOnInit(): void {
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
