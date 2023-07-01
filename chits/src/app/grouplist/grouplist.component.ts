import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Group } from '../model/groupbyid.model';
import { Params, Router } from '@angular/router';
import { GroupMapCusList } from '../model/groupmapcustlist.model';
import { ActivatedRoute } from '@angular/router';
import { Reciptbycusid } from '../model/reciptbycuid.model';





@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css'],
 
})

export class GrouplistComponent implements OnInit {

 
  searchText: any;
  grpmapidoutput:any;
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
    vacantCount:'',
    psodate: ' ' 
    }
    GroupMappdetails:any;
  //groupmap cu details by id
// GroupMappdetails: GroupMapCusList ={
//   mappingId :  ' ' ,
//              groupId :  ' ' ,
//              groupName :  ' ' ,
//              customerName :   ' ' ,
//              customerId :  ' ' ,
//              contactNumber :   ' ' ,
//              modeOfSubscription :   ' ' ,
//              prizedStatus :  ' ' ,
//              collection_route :    ' ' ,
//              collection_pincode :  ' ' ,
//              receivedAmount :  ' ' ,
//              outStandingAmount :  ' ' ,
//              created_date :  ' ' ,
//              updatedDate :  ' ' ,
//              joiningDate :  ' ' ,
//              lastPayedDate :  ' ' ,
// }
  
  grpidoutput: any;
  
  grpidvalue: any;
  
  groupmrm: any;
  recptcusid:any;
  // listrecipetnycusid:any;

  // reciptbyCusid : Reciptbycusid=[{
  //            receiptId : '',
  //            branchName :'',
  //            receiptDate : '',
  //            collectionEmployee :  '',
  //            customerName :  '',
  //            selectEnrollment : '',
  //            receiptType :   '',
  //            billAmount : '',
  //            customerId : '',
  //            groupId : '',
  //            employeeId :'',
  //            collectionRoute : '',
  //            paymentMode : '',
  // }];
  receiptByCustomerId:any;
  
  
  constructor(private http: HttpClient, private userData:UserDataService ,private router:Router,private route: ActivatedRoute) { 
    
    
    /// getting group id using query params from grouplist page
    this.route.queryParams.subscribe(params => {
      this.grpidvalue = params['value'];
    });
      console.log("AllData" +this.grpidvalue);

// get method to group details by id
    this.http.get(this.userData.groupbyidurl+this.grpidvalue).subscribe((data) =>{
      this.grpidoutput=data;
     
    Object.keys(this.grpidoutput).forEach(prop => {
    if(prop=="object"){
      this.GroupDetailsbyId = this.grpidoutput[prop];
      //console.log("GetData" +this.userData.branchbyidurl);
    }
    });
    
    })



/// get method group customer details by id
    this.http.get(this.userData.grouplistmapdcus+this.grpidvalue).subscribe((data) =>{
      this.grpmapidoutput=data;
    Object.keys(this.grpmapidoutput).forEach(prop => {
    if(prop=="object"){
      this.GroupMappdetails = this.grpmapidoutput[prop];
      console.log("GetData" +this.GroupMappdetails);
    }
    });
    
    })
    
  }
  
  // Get reciept by ID

  getrecieptId(data:any): void{
    // console.log("GetData" +data);
     
     // console.log("AllData" +JSON.stringify(data));
        
     //console.log(new Date("2015/04/29 11:24:00").getTime());
     
     this.http.get(this.userData.getrecipetbycusid+data).subscribe((data) =>{
      this.recptcusid=data;
    Object.keys(this.recptcusid).forEach(prop => {
    if(prop=="object"){
      this.receiptByCustomerId = this.recptcusid[prop];
      console.log("GetData" +this.receiptByCustomerId);
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