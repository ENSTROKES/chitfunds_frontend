import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/model/customer.model';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
interface outstandcus {
  subscription:string,
  value: string
}
interface Receipt {
  billAmount: number;
  receiptDate: string;
  receiptId: string;
  // Add other properties as per your API response
}
@Component({
  selector: 'app-outstandingcus',
  templateUrl: './outstandingcus.component.html',
  styleUrls: ['./outstandingcus.component.css']
})
export class OutstandingcusComponent {
  customerDetailbyid : Customer = {
    // customerId:'',
    _id:'',
    customerGenId:'',
    branchName:'',
    branchCode:'',
    joiningDate:'',
    customerId:0,
    referedType:'',
    referedBy:'',
    personalDetails:{customerPersonalId:0,
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
    customerNomineeDetails:{ nomineeId:0,                                 
                            name:'',
                            
                            relationship:'',
                            
                            adharNumber:'',
                            createdDate: 0 ,
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
  cusdata : outstandcus = {
    subscription:"",
    value:""
  }
  brnroute: any;
  brnhvalue : any;
  data: any;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef,private apiService: ApiService) {
    this.route.queryParams.subscribe(params => {
      this.cusdata.subscription= params['subvalue'];
      this.cusdata.value= params['routvalue'];
      this.brnroute=params['brnroute'];
      this.brnhvalue=params['brnhvalue'];
    });
    this.cusDataToApi(this.cusdata);
  }
  goTobackPage(pageName:string):void{
    this.router.navigate([`${pageName}`],{ queryParams: {brnhvalue : this.brnhvalue ,brnroute :this.brnroute }  });
  } 
  custmapresponse:any;
  ListOfCustdata:any;
  cusDataToApi(data: any): void {
    this.http.post(this.userData.outstandingcustomer,data).subscribe((data) =>{
      this.custmapresponse=data;
      //console.log("AllData" +JSON.stringify(data));
    Object.keys(this.custmapresponse).forEach(prop => {
    if(prop=="object"){
      this.ListOfCustdata = this.custmapresponse[prop];
      // ('#my-datatable').DataTable.ajax.reload();
    }
    });
    })
  }

  idoutput: any ;

  getCustomerbyId(custid:any): void{
  
    this.http.get(this.userData.customerbyidurl+custid).subscribe((data) =>{
     //console.log("AllData" +JSON.stringify(data));
     this.idoutput=data;
   Object.keys(this.idoutput).forEach(prop => {
   if(prop=="object"){
     this.customerDetailbyid = this.idoutput[prop];
     ////console.log("GetData" +this.userData.branchbyidurl);
     // this.getDocumentbyId(custid);
   }
   });
   
   })
      }

      calendarOptions: CalendarOptions = {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        events: [] // Initialize events as an empty array
        
      };
      recptcusid:any;
      receiptByCustomerId:any;
      // getrecieptId(data:any): void{
         
      //    this.http.get(this.userData.getrecipetbycusid+data).subscribe((data) =>{
      //     this.recptcusid=data;
      //   Object.keys(this.recptcusid).forEach(prop => {
      //   if(prop=="object"){
      //     this.receiptByCustomerId = this.recptcusid[prop];
      //     //console.log("GetData" +this.receiptByCustomerId);
      //   }
      //   });
        
      //   })
        
      //   this.calendarOptions.events = this.receiptByCustomerId.object.map((event: EventType) => {
      //     return {
      //       title: `Rs.${event.billAmount}`,
      //       start: event.receiptDate,
      //       backgroundColor: 'red'
      //     };
      //   });
        
      //      }
      
      getrecieptId(data: any): void {
        this.http.get(this.userData.getrecipetbycusid + data).subscribe((response: any) => {
          this.recptcusid = response;
          Object.keys(this.recptcusid).forEach(prop => {
            if (prop === "object") {
              this.receiptByCustomerId = this.recptcusid[prop];
              this.calendarOptions.events = []; // Clear existing events
              this.receiptByCustomerId.forEach((receipt: Receipt) => {
                if (this.calendarOptions.events && Array.isArray(this.calendarOptions.events)) {
                  this.calendarOptions.events.push({
                    title: `Rs.${receipt.billAmount}  Id.${receipt.receiptId}`,
                    rid: 'Id.${receipt.receiptId}',
                    start: receipt.receiptDate
                    
                    // backgroundColor: 'red'
                  });
                }
              });
              console.log('Events:', this.calendarOptions.events); 
            }
          });
        });
      }
      


          
}
