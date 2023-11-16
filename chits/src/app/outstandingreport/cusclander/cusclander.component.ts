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

interface Receipt {
  billAmount: number;
  receiptDate: string;
  receiptId: string;
  // Add other properties as per your API response
}

@Component({
  selector: 'app-cusclander',
  templateUrl: './cusclander.component.html',
  styleUrls: ['./cusclander.component.css']
})
export class CusclanderComponent {
  subscription:any;
  value:any;
  brnroute:any;
  brnhvalue:any;
  cid:any;
  paidamount:any;
  installement:any;
  pendingamount:any;
  constructor(private http: HttpClient, private userData:UserDataService,private router: Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef,private apiService: ApiService ){
    this.route.queryParams.subscribe(params => {
      this.subscription= params['subvalue'];
      this.value= params['routvalue'];
      this.brnroute=params['brnroute'];
      this.brnhvalue=params['brnhvalue'];
      this.cid=params['cid'];
      this.paidamount=params['pidamt'];
      this.installement=params['inst'];
      this.pendingamount=params['pend'];
    });
    this.getrecieptId(this.cid)
  }
  goTobackPage(pageName: string): void {
    console.log(this.brnhvalue);
    this.router.navigate([`${pageName}`], {
      queryParams: {
        subvalue:this.subscription,
        routvalue:this.value,
        brnroute:this.brnroute,
        brnhvalue: this.brnhvalue
      }
    });
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [] // Initialize events as an empty array
    
  };

  recptcusid:any;
  receiptByCustomerId:any;
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
                title: `Rs.${receipt.billAmount} `,
                rid: 'Id.${receipt.receiptId}',
                start: receipt.receiptDate,
                
                
                // backgroundColor: 'red'
              });
              this.calendarOptions.events.push({
                title: `RID.${receipt.receiptId}`,
                start: receipt.receiptDate,
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
