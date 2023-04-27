import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Group } from '../model/groupbyid.model';
import { Params, Router } from '@angular/router';
import { GroupMapCusList } from '../model/groupmapcustlist.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  searchText: any;
  grpmapidoutput:any;

  //groupmap cu details by id
GroupMappdetails: GroupMapCusList ={
  mappingId :  ' ' ,
             groupId :  ' ' ,
             groupName :  ' ' ,
             customerName :   ' ' ,
             customerId :  ' ' ,
             contactNumber :   ' ' ,
             modeOfSubscription :   ' ' ,
             prizedStatus :  ' ' ,
             collection_route :    ' ' ,
             collection_pincode :  ' ' ,
             receivedAmount :  ' ' ,
             outStandingAmount :  ' ' ,
             created_date :  ' ' ,
             updatedDate :  ' ' ,
             joiningDate :  ' ' ,
             lastPayedDate :  ' ' ,
}
  
  grpidoutput: any;
  GroupDetailsbyId: any;
  grpidvalue: any;
  route: any;
  groupmrm: any;
  
  constructor(private http: HttpClient, private userData:UserDataService, private router:Router) { 
   
  }
   // Get Group by ID

   getGroupbyId(): void{
    this.route.queryParams.subscribe((params: Params) => {
      this.groupmrm.groupId = params['value'];
    });
    console.log("data"+this.grpidvalue);
    // console.log("GetData" +data);
     
     // console.log("AllData" +JSON.stringify(data));
        
     //console.log(new Date("2015/04/29 11:24:00").getTime());
     
     this.http.get(this.userData.groupbyidurl+this.grpidvalue).subscribe((data) =>{
      this.grpidoutput=data;
    Object.keys(this.grpidoutput).forEach(prop => {
    if(prop=="object"){
      this.GroupDetailsbyId = this.grpidoutput[prop];
      //console.log("GetData" +this.userData.branchbyidurl);

    }
    });
    
    })
       }
       /// Get group mapped customer list
       getGroupmappedcusbyId(data:any): void{
        // console.log("GetData" +data);
         
         // console.log("AllData" +JSON.stringify(data));
            
         //console.log(new Date("2015/04/29 11:24:00").getTime());
         
         this.http.get(this.userData.grouplistmapdcus+data).subscribe((data) =>{
          this.grpmapidoutput=data;
        Object.keys(this.grpmapidoutput).forEach(prop => {
        if(prop=="object"){
          this.GroupMappdetails = this.grpmapidoutput[prop];
          //console.log("GetData" +this.userData.branchbyidurl);
        }
        });
        
        })
           }

  ngOnInit(): void {
  }

}
