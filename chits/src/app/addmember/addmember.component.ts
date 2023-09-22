import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Group } from '../model/groupbyid.model';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../users-data.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { ActivatedRoute } from '@angular/router';
import { GroupMap } from '../model/groupmapping.model';
import { customerChitDetails } from '../model/customerchitdetails.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})

export class AddmemberComponent implements OnInit {
  grpidoutput:any;
  filterselc = false;
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
  catselectvalue:any;
  slabValue:any;
  groupmrm :GroupMap={
    groupId: '',
    customerDetails:[]
  }
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
      customerGenId:'',
      joiningDate:'',
      customerId:0,
      referedType:'',
      referedBy:'',
      branchCode:'',
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
      listofslabdata:any;
      slaboutpt:any;
      dateselectedvalye:any;
      grpfilterdatetyp:any;
      grpfiltersubtyp:any;


      selectedMonth: string ;
      selectedYear: string | undefined;
      months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      years: number[] = [2019,2020,2021,2022,2023]; // Modify the range of years as needed
  
  constructor(private http: HttpClient, private userData:UserDataService ,private router:Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef) { 
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


    // get all customer for mapping method
// this.http.get(this.userData.cuslistmappedgrop).subscribe((data) =>{
//   this.custmapresponse=data;
//   //console.log("AllData" +JSON.stringify(data));
  
// Object.keys(this.custmapresponse).forEach(prop => {
// if(prop=="object"){
//   this.ListOfCustMapData = this.custmapresponse[prop];
// }
// });

// })
//console.log( this.groupmrm);
    
  }



getCusDatabyFilter(type:any){
  this.http.get(this.userData.cuslistmappedgrop+type).subscribe((data) =>{
    this.custmapresponse=data;
    //console.log("AllData" +JSON.stringify(data));
    
  Object.keys(this.custmapresponse).forEach(prop => {
  if(prop=="object"){
    this.ListOfCustMapData = this.custmapresponse[prop];
    // ('#my-datatable').DataTable.ajax.reload();
  }
  });
  
  })
}





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

///Method to get cutomer id from checkbox
       GroupMappingCustomer(event:any,cusid:any,jod:any,mos:any,genid:any,firstname:any,lastname:any){
        this.route.queryParams.subscribe(params => {
          this.vaccent = +params['vaccent'] ;
          this.groupmrm.groupId = params['value'];
        });
        //console.log("vac"+(this.vaccent));
        //console.log("gr"+this.groupmrm.groupId);
        //console.log("len"+(this.groupmrm.customerDetails).length);
        if(event.target.checked==true){
          this.isDisplayed = true;
          //console.log("array_size"+Object.keys(this.groupmrm.customerDetails).length);
           if(Object.keys(this.groupmrm.customerDetails).length <= (this.vaccent))
           {
            this.groupmrm.customerDetails.push({cutomerId:cusid,joiningDate:'',subscription:'',cusgenid:genid,cusname:(firstname+" "+lastname),selectedMonth:this.selectedMonth,selectedYear:this.selectedYear});
            //console.log( this.groupmrm);
            //console.log( this.isDisplayed);
            if(Object.keys(this.groupmrm.customerDetails).length == (this.vaccent)){
              this.maxNo = true;
            }
           }
            else
            {
              this.maxNo = true;
            }
           
        }
        else{
          this.isDisplayed = false;
          // this.groupmrm.customerDetails[0].cutomerId = this.groupmrm.customerDetails[0].cutomerId.filter((num: any) => num !== cusid);
          const dataToFind = cusid; // Data value to search for
          // finding the index of array to remove when unselected
          const index = this.groupmrm.customerDetails.findIndex(customerDetails => customerDetails.cutomerId === dataToFind);
          // remove unselected details from array
          if (index !== -1) {
            this.groupmrm.customerDetails.splice(index, 1);
          }

          //console.log( this.groupmrm.customerDetails);
          //console.log( this.isDisplayed);
          this.maxNo = false;
        }}

      //  Test(){
      //   this.route.queryParams.subscribe(params => {
      //     this.value = params['value'];
      //   });
      //   //console.log(this.value);
      //   //console.log( this.groupmrm.customerId);
      //  }


      addDatesToArray() {
        // mapping the choosen joining dates and mode of subscription to respective customers
        // const selectedCustomers = this.groupmrm.customerDetails.filter(customerDetails => customerDetails.joiningDate !== '',(customerDetails: { subscription: string; }) => customerDetails.subscription !== '');
        // const cusDetailswithDate = selectedCustomers.map(customerDetails => customerDetails.joiningDate,(customerDetails: { subscription: any; }) => customerDetails.subscription);
        const selectedCustomers = this.groupmrm.customerDetails.filter(customerDetails => customerDetails.selectedMonth !== '',(customerDetails: { subscription: string; }) => customerDetails.subscription !== '');
        const cusDetailswithDate = selectedCustomers.map(customerDetails => customerDetails.selectedMonth,(customerDetails: { subscription: any; }) => customerDetails.subscription);
        

// Function to convert selectedMonth and selectedYear to a valid joiningDate
function convertToJoiningDate(selectedMonth: string, selectedYear: string): string {
  const monthNames: { [key: string]: number } = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const monthIndex = monthNames[selectedMonth.toLowerCase()];
  const year = Number(selectedYear);
  const date = new Date(year, monthIndex, 1);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

// Function to convert the date string to a timestamp
function convertToTimestamp(dateString: string): number {
  const [day, month, year] = dateString.split("-");
  const timestamp = new Date(`${year}-${month}-${day}`).getTime();
  return timestamp;
}

// Updating joiningDate for each object in customerDetails
this.groupmrm.customerDetails.forEach((customer) => {
  const { selectedMonth, selectedYear } = customer;
  customer.joiningDate = convertToJoiningDate(selectedMonth, selectedYear);
  customer.joiningDate = convertToTimestamp(customer.joiningDate);
});
// Now the customerDetails array has the joiningDate updated for each object
console.log("After date converion-1",this.groupmrm.customerDetails);

        
        
        // Remove the cusgenid and cusname 
        for (let customer of this.groupmrm.customerDetails) {
          delete customer.cusgenid;
          delete customer.cusname;
          delete customer.selectedMonth;
          delete customer.selectedYear;
        }
        // console.log('Selected Dates:', cusDetailswithtimestp);
        console.log("after deletion" ,this.groupmrm);



        
         
        // Post method to save the mapped data api  call
        this.http.post(this.userData.groupmapcus, this.groupmrm).subscribe((result)=>{
           this.grpmapreslt = result;
           if(this.grpmapreslt.responseCode=="200"){
            {   
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Customer mapped successfully!',
                showConfirmButton: false,
              })
              setTimeout(() => {
                this.router.navigate(['addgroupmember']);
              }, 1000);
              setTimeout(() => {
                location.reload();
              }, 1100);
              
            }
            
          }
          else {
            {    
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Error with Customer Mapping!',
                showConfirmButton: false,
              })
              setTimeout(() => {
                this.router.navigate(['addgroupmember']);
              }, 1000);
              setTimeout(() => {
                location.reload();
              }, 1100);
              
            }
          }
            
          //  Object.keys(this.grpmapreslt).forEach(prop => {
          //     console.log("data : " +prop);
          //       console.log("value : "+this.grpmapreslt[prop]);
          //        if(prop=="responseCode"){
          //       // this.ListOfEmpData = this.reslt[prop];
          //         if(this.grpmapreslt[prop]=="200"){
          //           if(window.confirm('Customer mapped successfully')){
          //             this.router.navigate(['addgroupmember']);
          //             location.reload();
          //           }else(window.confirm('Error mapping customer'))
          //           {
          //             this.router.navigate(['addgroupmember']);
                      
          //           }
          //         }
          //         }
          //     });
            })



        
      }

      //get receipt by id
      recptcusid:any;
      receiptByCustomerId:any;
      getrecieptId(data:any): void{
        // //console.log("GetData" +data);
         
         // //console.log("AllData" +JSON.stringify(data));
            
         ////console.log(new Date("2015/04/29 11:24:00").getTime());
         
         this.http.get(this.userData.getrecipetbycusid+data).subscribe((data) =>{
          this.recptcusid=data;
        Object.keys(this.recptcusid).forEach(prop => {
        if(prop=="object"){
          this.receiptByCustomerId = this.recptcusid[prop];
          //console.log("GetData" +this.receiptByCustomerId);
        }
        });
        
        })
           }

      //  getgroupFormData(cid:any,jdate:any,mosub:any): void{

      //   // this.route.queryParams.subscribe(params => {
      //   //   this.groupmrm.groupId = +params['value'];
      //   // });
      //   //console.log("grpid"+jdate)
      //     ////console.log("AllData" +JSON.stringify(data)); 
         
      //     this.http.post(this.userData.groupmapcus, this.groupmrm).subscribe((result)=>{
      //      this.grpmapreslt = result;
            
      //      Object.keys(this.grpmapreslt).forEach(prop => {
      //         //console.log("data : " +prop);
      //           //console.log("value : "+this.grpmapreslt[prop]);
      //            if(prop=="responseCode"){
      //           // this.ListOfEmpData = this.reslt[prop];
      //             if(this.grpmapreslt[prop]=="200"){
      //               if(window.confirm('Customer mapped successfully')){
      //                 this.router.navigate(['addgroupmember']);
                      
      //               }else(window.confirm('Error mapping customer'))
      //               {
      //                 this.router.navigate(['addgroupmember']);
                      
      //               }
      //             }
      //             }
      //         });
      //       })
      //      }



       goToPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);
      } 



      filturl:any;
        searchFilter(type:any,slabval:any){
          //console.log("sec  "+slabval);
          //console.log("type  "+type);
          
        // if (slabval != undefined && type != undefined){
        //   this.filturl=("?type="+type+"&slabId="+slabval)

        // }  

        this.http.get(this.userData.cuslistmappedgrop+type).subscribe((data) =>{
          this.custmapresponse=data;
          //console.log("AllData" +JSON.stringify(data));
        Object.keys(this.custmapresponse).forEach(prop => {
        if(prop=="object"){
          this.ListOfCustMapData = this.custmapresponse[prop];
          // ('#my-datatable').DataTable.ajax.reload();
        }
        });
        })


      }


      toggleState(){
        this.filterselc = !this.filterselc
      }

      
  ngOnInit(): void {
    // this.getCusDatabyFilter("allcustomer");
  }
  // reloadTable(): void {
  //   // this.getCusDatabyFilter("nonmappedcustomer");
  //   this.http.get(this.userData.cuslistmappedgrop+'nonmappedcustomer').subscribe((data) =>{
  //     this.custmapresponse=data;
  //     //console.log("AllData" +JSON.stringify(data));
      
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
