import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { Group } from '../model/groupbyid.model';
import { Router } from '@angular/router';
import { GroupMapCusList } from '../model/groupmapcustlist.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isDisplayed: boolean | undefined;
  searchText: any;
  users:any;
  slaboutpt:any;
  listofslabdata:any;
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
  grpmapidoutput:any;
  stringformid:any;
  stringformvalue:any
  grpselectvalue:any;
  dateselectedvalye:any;
  GroupDeletebyId: Group={
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



  GroupDetailsbyId: Group={
  id: ' ' ,
  branchName: ' ' ,
  _id:null,
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

//groupmap cu details by id
GroupMappdetails: GroupMapCusList ={
  mappingId :  ' ' ,
             groupId :  ' ' ,
             _id:null,
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


//filter
grpfiltertype:any;
grpfilterscheme:any;
grpfilterdatetyp:any;
grpfilterdateinp:any;
grpfilres:any;
ListOfGroupfilData:any;
  //spinner
  button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

  totalGroup: any;
pageNumber: number = 1;
  constructor(private http: HttpClient, private userData:UserDataService, private router:Router) { 
    //get all group
    // this.userData.group().subscribe((data) =>{
    //   this.grpres=data;
    // Object.keys(this.grpres).forEach(prop => {
    // if(prop=="object"){
    //   this.ListOfGroupData = this.grpres[prop];
    // }
    // });
    
    // })
    // this.searchFilter("all","all");


//get customer count fot pagenation
this.http.get(this.userData.getgroupcount).subscribe((data) =>{
  this.totalGroup=data;
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
  //  //console.log("GetData" +data.officeName);

    //console.log("AllData" +JSON.stringify(data)); 
    //console.log("slab id and name"+ data.schemeId.slabid+"  "+data.schemeId.slabname)
    ////console.log("GetData" +this.userData.headOffice);
   ////console.log(new Date("2015/04/29 11:24:00").getTime()
   this.stringformid=data.schemeId.slabid.toString();
   this.stringformvalue=data.schemeId.slabname.toString() +"-"+ data.schemeId.slabinst.toString();
   //console.log(this.stringformid);
   //console.log(this.stringformvalue);

   data.schemeName=this.stringformvalue;
   data.schemeId=this.stringformid;
   if (data.groupType === '')
   {
    data.groupType="false";
    //console.log(data.groupType);
   }

    this.http.post(this.userData.creategrp, data).subscribe((result)=>{
     this.grpreslt = result;
    
     if(this.grpreslt.responseCode=="200"){
      {   
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Group Created successfully!',
          showConfirmButton: false,
        })
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      
    }
    else {
      {    
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error with Group Creation!',
          showConfirmButton: false,
        })
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    }
        });
      // })
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


/// Get group mapped customer list
       getGroupmappedcusbyId(data:any): void{
        // //console.log("GetData" +data);
         
         // //console.log("AllData" +JSON.stringify(data));
            
         ////console.log(new Date("2015/04/29 11:24:00").getTime());
         
         this.http.get(this.userData.grouplistmapdcus+data).subscribe((data) =>{
          this.grpmapidoutput=data;
        Object.keys(this.grpmapidoutput).forEach(prop => {
        if(prop=="object"){
          this.GroupMappdetails = this.grpmapidoutput[prop];
          ////console.log("GetData" +this.userData.branchbyidurl);
        }
        });
        
        })
           }

       //grpip mapping post
       getgrpMappingFormData(data:any): void{
        //  //console.log("GetData" +data.officeName);
          //console.log("AllData" +JSON.stringify(data));
      
          this.http.post(this.userData.creategroupMapping, data).subscribe((result)=>{
           this.grpMappingreslt = result;
            
           Object.keys(this.grpMappingreslt).forEach(prop => {
              //console.log("data : " +prop);
                //console.log("value : "+this.grpMappingreslt[prop]);
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
          gropdelete:any;
          deleteGroupbyId(data:any): void{
           
            
              Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this action!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                customClass: {
                  confirmButton: 'my-confirm-button-class',
                  cancelButton: 'my-cancel-button-class',
                  title:'my-alert-title-class',
                  
                }
              }).then((result) => {
          
                if (result.isConfirmed) {
                  //console.log('Clicked Yes, File deleted!');
                  this.http.delete(this.userData.deletegroup+data).subscribe((data) =>{
                    this.gropdelete=data;
                    
                     
                          if(this.gropdelete.responseCode =="200"){
                            
                            Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Group Deleted successfully',
                              showConfirmButton: false,
                            })
                            setTimeout(() => {
                              location.reload();
                            }, 1000);
                          }
                          else {
                            {    
                              Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Error with Group Deletion!',
                                showConfirmButton: false,
                              })
                              setTimeout(() => {
                                location.reload();
                              }, 1000);
                            }
                          }
                        })
                      } 
                        
                        else if (result.isDismissed) {
          
                  //console.log('Clicked No, File is safe!');
          
                }
              })
               
            }
  

             //Group filter
scheme_value:any;
grp_type:any;
start_date:any;
auc_date:any;
url_value:any;
//ListOfGroupfilData:any;
//grpfilres:any;
scheme_id:any;
grpouptype:any;
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


  goToPage(pageName:string,value:any):void{
    this.router.navigate([`${pageName}`],{ queryParams: { value }  });
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
