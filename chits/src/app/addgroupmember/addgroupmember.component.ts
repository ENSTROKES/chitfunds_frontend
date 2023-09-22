import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../users-data.service';
import { Group } from '../model/groupbyid.model';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';

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
  grpfilterscheme:any;
  grpfiltertype:any;
  grpselectvalue:any;

  GroupDetailsbyId: Group={
    id: ' ' ,
    _id:null,
    branchName: ' ' ,
    groupType: ' ' ,
    groupName: ' ',
    schemeId:' ',
    schemeName:'',
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
    psodate: ' ' ,
    vacantCount:''
    }

    slaboutpt:any;
    listofslabdata:any;

    totalGroup: any;
    pageNumber: number = 1;

  constructor(private http: HttpClient, private userData:UserDataService,private router:Router) {


    this.searchFilter("all","all");


    //get customer count fot pagenation
    this.http.get(this.userData.getgroupcount).subscribe((data) =>{
      this.totalGroup=data;
    })

    this.userData.group().subscribe((data) =>{
      this.grpres=data;
    Object.keys(this.grpres).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.grpres[prop];
    }
    });
    
    })


 // get all slab method
 this.http.get(this.userData.getslab).subscribe((data) =>{
  this.slaboutpt=data;
Object.keys(this.slaboutpt).forEach(prop => {
if(prop=="object"){
  this.listofslabdata = this.slaboutpt[prop];
  ////console.log("GetData" +this.userData.branchbyidurl);
}
});

})




   }







// Get Group by ID

getGroupbyId(data:any): void{
  // //console.log("GetData" +data);
   
   // //console.log("AllData" +JSON.stringify(data));
      
   ////console.log(new Date("2015/04/29 11:24:00").getTime());
   
   this.http.get(this.userData.groupbyidurl+data).subscribe((data) =>{
    this.grpidoutput=data;
  Object.keys(this.grpidoutput).forEach(prop => {
  if(prop=="object"){
    this.GroupDetailsbyId = this.grpidoutput[prop];
    ////console.log("GetData" +this.userData.branchbyidurl);
  }
  });
  
  })
     }
     goToPage(pageName:string,value:any,vaccent:any):void{
      this.router.navigate([`${pageName}`],{ queryParams: { value , vaccent}  });
    } 

//Group filter
scheme_value:any;
grp_type:any;
start_date:any;
auc_date:any;
url_value:any;
ListOfGroupfilData:any;
grpfilres:any;
scheme_id:any;
type:any;
searchFilter(scheme_id:any,type:any){
//console.log("sec  "+scheme_id);
//console.log("type  "+type);


//filter with only scheme
if(scheme_id != undefined && scheme_id !="all" )
{
  //console.log("loop - 1");
this.url_value="?scheme="+scheme_id;
if(type!= undefined &&type!="all" ){
  this.url_value+=("&register="+type);
  
  }
  this.http.get(this.userData.getAllgrp+this.url_value).subscribe((data) =>{
    this.grpfilres=data;
  Object.keys(this.grpfilres).forEach(prop => {
  if(prop=="object"){
    this.ListOfGroupfilData = this.grpfilres[prop];
    this.url_value="";
  }
  });
  
  })

}


if(type!= undefined &&type!="all" && (scheme_id == undefined || scheme_id =="all")){
  //console.log("loop - 2");
 
  this.url_value=("?register="+type);
  //console.log( this.url_value);
  this.http.get(this.userData.getAllgrp+this.url_value).subscribe((data) =>{
    this.grpfilres=data;
  Object.keys(this.grpfilres).forEach(prop => {
  if(prop=="object"){
    this.ListOfGroupfilData = this.grpfilres[prop];
    this.url_value="";
  }
  });
  
  })
  
}




//for particular scheme



//for all scheme
if(scheme_id == "all" &&(type=="all" || type==undefined)){
  //console.log("loop - 3");
this.http.get(this.userData.getAllgrp).subscribe((data) =>{
  this.grpfilres=data;
Object.keys(this.grpfilres).forEach(prop => {
if(prop=="object"){
  this.ListOfGroupfilData = this.grpfilres[prop];
}
});

})
}



}

changePage(event: number) {
  this.pageNumber = event;
  this.searchFilter(this.scheme_id,this.type);
}



  ngOnInit(): void {
  }

}
