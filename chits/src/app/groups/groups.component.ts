import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Group } from '../model/groupbyid.model';
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
  ListOfGroupData:any;
  grpres:any;
  //group
  grpreslt:any;
  custmresponse:any;
  ListOfCustomerData:any;
  grpMappingreslt:any;
  //Group Details by Id
  grpidoutput:any;
  //grp delete
  groupdelete:any;
  GroupDeletebyId: Group={
    id: ' ' ,
    branchName: ' ' ,
    groupType: ' ' ,
    groupName: ' ',
    schemeId:' ',
    lauctionDate: ' ',
    auctionFromDate: ' ' ,
    auctioToDate: ' ' ,
    startingDate: ' ',
    companyCommissionPercentage: ' ' ,
    totalFD: ' ' ,
    rateOfInterest: ' ' ,
    fDDate: ' ' ,
    maturityAmount: ' ' ,
    fdnumber: ' ' ,
    fdbank: ' ' ,
    fdbranch: ' ' ,
    psonumber: ' ' ,
    psodate: ' ' 
    }



  GroupDetailsbyId: Group={
  id: ' ' ,
  branchName: ' ' ,
  groupType: ' ' ,
  groupName: ' ',
  schemeId:' ',
  lauctionDate: ' ',
  auctionFromDate: ' ' ,
  auctioToDate: ' ' ,
  startingDate: ' ',
  companyCommissionPercentage: ' ' ,
  totalFD: ' ' ,
  rateOfInterest: ' ' ,
  fDDate: ' ' ,
  maturityAmount: ' ' ,
  fdnumber: ' ' ,
  fdbank: ' ' ,
  fdbranch: ' ' ,
  psonumber: ' ' ,
  psodate: ' ' 
  }


  //spinner
  button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }
  constructor(private http: HttpClient, private userData:UserDataService) { 
    //get all group
    this.userData.group().subscribe((data) =>{
      this.grpres=data;
    Object.keys(this.grpres).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.grpres[prop];
    }
    });
    
    })


    //get all branch

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
  Object.keys(this.custmresponse).forEach(prop => {
  if(prop=="object"){
    this.ListOfCustomerData = this.custmresponse[prop];
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


// Create Group Method

getgroupFormData(data:any): void{
  //  console.log("GetData" +data.officeName);
    console.log("AllData" +JSON.stringify(data)); 
    //console.log("GetData" +this.userData.headOffice);
   //console.log(new Date("2015/04/29 11:24:00").getTime()
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
              }else(window.confirm('Error creating group'))
              {
                location.reload();
              }
            }
            }
        });
      })
     }

     // Get Group by ID

  getGroupbyId(data:any): void{
    // console.log("GetData" +data);
     
     // console.log("AllData" +JSON.stringify(data));
        
     //console.log(new Date("2015/04/29 11:24:00").getTime());
     
     this.http.get(this.userData.groupbyidurl+data).subscribe((data) =>{
      this.grpidoutput=data;
    Object.keys(this.grpidoutput).forEach(prop => {
    if(prop=="object"){
      this.GroupDetailsbyId = this.grpidoutput[prop];
      //console.log("GetData" +this.userData.branchbyidurl);
    }
    });
    
    })
       }
       //grpip mapping post
       getgrpMappingFormData(data:any): void{
        //  console.log("GetData" +data.officeName);
          console.log("AllData" +JSON.stringify(data));
      
          this.http.post(this.userData.creategroupMapping, data).subscribe((result)=>{
           this.grpMappingreslt = result;
            
           Object.keys(this.grpMappingreslt).forEach(prop => {
              console.log("data : " +prop);
                console.log("value : "+this.grpMappingreslt[prop]);
                 if(prop=="responseCode"){
                // this.ListOfEmpData = this.reslt[prop];
                  if(this.grpMappingreslt[prop]=="200"){
                    if(window.confirm('Group is mapped successfully')){
                      location.reload();
                    }else(window.confirm('Error mapping group'))
                    {
                      location.reload();
                    }
                  }
                  }
              });
            })
          }

          // group delete method
          deleteGroupbyId(data:any): void{
           
            this.http.delete(this.userData.deletegroup+data).subscribe((data) =>{
           if(confirm('Are you sure to delete?'))
             this.groupdelete=data;
           Object.keys(this.groupdelete).forEach(prop => {
             if(prop=="responseCode"){
               // this.ListOfEmpData = this.reslt[prop];
                 if(this.groupdelete[prop]=="200"){
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
