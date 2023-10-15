import { Component } from '@angular/core';
import { ExcelService } from '../excel.service';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})


export class ReportsComponent {
  routeoutpt: any;
  listofroutedata: any[] | undefined;
  
  grpselectedvalue:any;
  rotselectvalue:any;
  grpfilterdatetyp:any;
  grpfilterdateinp:any;
  selectedValue:any;
  listofroutedatafrfilter:any;
  grpeoutpt:any;
  listofgrpdata:any;
  dateselectedvalye:any;
  constructor(private excelService:ExcelService,private http: HttpClient, private userData:UserDataService ){

    // get all route 
// this.http.get(this.userData.cuslistmappedgrop+"MTP").subscribe((data) =>{
//   this.routeoutpt=data;
// Object.keys(this.routeoutpt).forEach(prop => {
// if(prop=="object"){
//   this.listofroutedata = this.routeoutpt[prop];
//   ////console.log("GetData" +this.userData.branchbyidurl);
// }
// });
// })

// get all route 
this.http.get(this.userData.getroute).subscribe((data) =>{
  this.routeoutpt=data;
Object.keys(this.routeoutpt).forEach(prop => {
if(prop=="object"){
  this.listofroutedatafrfilter = this.routeoutpt[prop];
  //console.log("GetData" +this.listofroutedatafrfilter);
}
});

})

// get all group 
this.http.get(this.userData.getAllgrp).subscribe((data) =>{
  this.grpeoutpt=data;
Object.keys(this.grpeoutpt).forEach(prop => {
if(prop=="object"){
  this.listofgrpdata = this.grpeoutpt[prop];
  //console.log("GetData" +this.listofgrpdata);
}
});

})


  }

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      { title: 'Rs.1500', start: '2023-10-06',backgroundColor: 'red' },
      { title: 'Rs.500', start: '2023-10-02',backgroundColor: 'red' },
      { title: 'Rs.800', start: '2023-09-28',backgroundColor: 'red' }
    ]
  };


  // exportAsXLSX():void {
  //   this.excelService.exportAsExcelFile(this.listofroutedata, 'sample');
  // }
  exportAsXLSX(type:any,value:any): void {

//console.log("type",type);
//console.log("value",value);

if(type == "Group"){

this.http.get(this.userData.exportledgerbygroup).subscribe((data) => {
  //console.log("URL:", this.userData.exportledgerbygroup+value);
  //console.log("API response:", data);
  this.routeoutpt = data;
  //console.log("routeoutpt:", this.routeoutpt);
  //console.log("Type of this.routeoutpt:", typeof this.routeoutpt);
  if (typeof this.routeoutpt === 'object' && Array.isArray(this.routeoutpt.object)) {
    //console.log("Data is an array");
    this.listofroutedata = this.routeoutpt.object;
    //console.log("listofroutedata:", this.listofroutedata);
  }
});
}
if(type == "Route"){
  this.http.get(this.userData.exportledgerbyroute).subscribe((data) => {
    //console.log("URL:", this.userData.exportledgerbyroute+value);
    //console.log("API response:", data);
    this.routeoutpt = data;
    //console.log("routeoutpt:", this.routeoutpt);
    //console.log("Type of this.routeoutpt:", typeof this.routeoutpt);
    if (typeof this.routeoutpt === 'object' && Array.isArray(this.routeoutpt.object)) {
      //console.log("Data is an array");
      this.listofroutedata = this.routeoutpt.object;
      //console.log("listofroutedata:", this.listofroutedata);
    }
  });
}



    //console.log("listofroutedata:", this.listofroutedata);
    if (this.listofroutedata && this.listofroutedata.length > 0) {
      
      this.excelService.exportAsExcelFile(this.listofroutedata, 'Ledger_of_'+value);
      location.reload();
    } else {
      //console.log("listofroutedata is empty or undefined");
      // Handle case when the list is empty or not yet populated
    }
  }
}
