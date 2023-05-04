import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Group } from '../model/groupbyid.model';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../users-data.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { ActivatedRoute } from '@angular/router';
import { GroupMap } from '../model/groupmapping.model';



@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  grpidoutput:any;
  searchText: any;
  grpres:any;
  ListOfGroupData:any;
  isDisplayed:any;
  grpmapreslt:any;
  vaccent:any;
  selectedValue:any;
  cusmapcheck:any;
  maxNo=false;
  checked=false;


  groupmrm :GroupMap={
    groupId: '',
    customerId:[]
  };
  custmapresponse:any;
  ListOfCustMapData:any;
  value:any;
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
    vacantCount:'',
    }

    GetCustomerForMap : Customer = {
      // customerId:'',
      _id:'',
      branchName:'',
      joiningDate:'',
      customerId:0,
      referedType:'',
      referedBy:'',
      personalDetails:{
        customerPersonalId:0,
                       name:'',
                       father:'',
                       spouse_name:'',
                       dob:'',
                       aadhar_no:'',
                       pan:'',
                       gender:'',
                       occupation:'',
                       monthly_income:'',
                       marrital_status:'',
                       address:'',
                       pincode:'',
                       state:'',
                       city:'',
                       landmark:'',
                       phoneNumber:'',
                       altrPhoneNumber:'',
                       email:''
                                      },                                
      customerNomineeDetails:{    nomineeId:0,                              
                              name:'',
                              
                              relationship:'',
                              
                              adharNumber:'',
                              createdDate: 0 
                              },
                              customerChitDetails:[{scheme  :  ' ',
   subscription  :  ' ',
   collection_route  :  ' ',
  
  chit_asking_month  :  ' ',
  remarks  :  ' ',
  createdDate: 0 ,
  chitId:0,
}]
      }


  constructor(private http: HttpClient, private userData:UserDataService ,private router:Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef) { 
    this.userData.group().subscribe((data) =>{
      this.grpres=data;
    Object.keys(this.grpres).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.grpres[prop];
    }
    });
    
    })


    // get all customer for mapping method
// this.http.get(this.userData.cuslistmappedgrop).subscribe((data) =>{
//   this.custmapresponse=data;
//   console.log("AllData" +JSON.stringify(data));
  
// Object.keys(this.custmapresponse).forEach(prop => {
// if(prop=="object"){
//   this.ListOfCustMapData = this.custmapresponse[prop];
// }
// });

// })
    
  }



getCusDatabyFilter(type:any){
  this.http.get(this.userData.cuslistmappedgrop+type).subscribe((data) =>{
    this.custmapresponse=data;
    console.log("AllData" +JSON.stringify(data));
    
  Object.keys(this.custmapresponse).forEach(prop => {
  if(prop=="object"){
    this.ListOfCustMapData = this.custmapresponse[prop];
    // ('#my-datatable').DataTable.ajax.reload();
  }
  });
  
  })
}





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

///Method to get cutomer id from checkbox
       GroupMappingCustomer(event:any,data:any){
        this.route.queryParams.subscribe(params => {
          this.vaccent = +params['vaccent'];
        });
        console.log(this.vaccent);
  
        if(event.target.checked==true){
          this.isDisplayed = true;
          console.log("array_size"+Object.keys(this.groupmrm.customerId).length);
           if(Object.keys(this.groupmrm.customerId).length <  2)
           {
            this.groupmrm.customerId.push(data);
            console.log( this.groupmrm);
            console.log( this.isDisplayed);
           }
           else
           {
            this.maxNo = true;
            this.checked = true;
           }
           
        }
        else{
          this.isDisplayed = false;
          this.groupmrm.customerId = this.groupmrm.customerId.filter(num => num !== data);
          console.log( this.groupmrm.customerId);
          console.log( this.isDisplayed);
        }}

      //  Test(){
      //   this.route.queryParams.subscribe(params => {
      //     this.value = params['value'];
      //   });
      //   console.log(this.value);
      //   console.log( this.groupmrm.customerId);
      //  }

       getgroupFormData(): void{

        this.route.queryParams.subscribe(params => {
          this.groupmrm.groupId = params['value'];
        });
        console.log(this.groupmrm.groupId)
          //console.log("AllData" +JSON.stringify(data)); 
         
          this.http.post(this.userData.groupmapcus, this.groupmrm).subscribe((result)=>{
           this.grpmapreslt = result;
            
           Object.keys(this.grpmapreslt).forEach(prop => {
              console.log("data : " +prop);
                console.log("value : "+this.grpmapreslt[prop]);
                 if(prop=="responseCode"){
                // this.ListOfEmpData = this.reslt[prop];
                  if(this.grpmapreslt[prop]=="200"){
                    if(window.confirm('Customer mapped successfully')){
                      location.reload();
                    }else(window.confirm('Error mapping customer'))
                    {
                      location.reload();
                    }
                  }
                  }
              });
            })
           }



       goToPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);
      } 
      searchFilter(type:any){
        console.log(this.selectedValue);
        this.http.get(this.userData.cuslistmappedgrop+type).subscribe((data) =>{
          this.custmapresponse=data;
          console.log("AllData" +JSON.stringify(data));
          
        Object.keys(this.custmapresponse).forEach(prop => {
        if(prop=="object"){
          this.ListOfCustMapData = this.custmapresponse[prop];
          // ('#my-datatable').DataTable.ajax.reload();
        }
        });
        
        })
      }
      
  ngOnInit(): void {
    // this.getCusDatabyFilter("allcustomer");
  }
  // reloadTable(): void {
  //   // this.getCusDatabyFilter("nonmappedcustomer");
  //   this.http.get(this.userData.cuslistmappedgrop+'nonmappedcustomer').subscribe((data) =>{
  //     this.custmapresponse=data;
  //     console.log("AllData" +JSON.stringify(data));
      
  //   Object.keys(this.custmapresponse).forEach(prop => {
  //   if(prop=="object"){
  //     this.ListOfCustMapData = this.custmapresponse[prop];
  //     // ('#my-datatable').DataTable.ajax.reload();
  //   }
  //   });
    
  //   })
  //   this.cdRef.detectChanges();
  
  //   }

}
