import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../users-data.service';
import { Group } from '../model/groupbyid.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addgroupmember',
  templateUrl: './addgroupmember.component.html',
  styleUrls: ['./addgroupmember.component.css']
})
export class AddgroupmemberComponent implements OnInit {
  searchText: any;
  ListOfGroupData:any;
  grpres:any;
  grpidoutput:any;
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

  constructor(private http: HttpClient, private userData:UserDataService,private router:Router) {
    this.userData.group().subscribe((data) =>{
      this.grpres=data;
    Object.keys(this.grpres).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.grpres[prop];
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
     goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
    } 
  ngOnInit(): void {
  }

}
