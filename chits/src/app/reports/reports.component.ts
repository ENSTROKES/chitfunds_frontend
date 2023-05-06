import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Group } from '../model/groupbyid.model';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../users-data.service';
import { Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { ActivatedRoute } from '@angular/router';
import { GroupMap } from '../model/groupmapping.model';
import { FormsModule } from '@angular/forms';
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  routresp:any;
  ListOfRouteData:any;
  selectedValue:any;
  ledbyroute:any;
  ListOflegbyrtpData:any;
  constructor(private http: HttpClient, private userData:UserDataService ,private router:Router,private route: ActivatedRoute,private cdRef: ChangeDetectorRef) {

    // get all Route
    this.http.get(this.userData.getslab).subscribe((data) =>{
      this.routresp=data;
    Object.keys(this.routresp).forEach(prop => {
    if(prop=="object"){
      this.ListOfRouteData = this.routresp[prop];
      console.log("GetData" +this.ListOfRouteData);
   
  }
});

})
  }


  searchFilter(type:any){
    console.log(this.selectedValue);
    this.http.get(this.userData.cuslistmappedgrop+type).subscribe((data) =>{
      this.ledbyroute=data;
      console.log("AllData" +JSON.stringify(data));
      
    Object.keys(this.ledbyroute).forEach(prop => {
    if(prop=="object"){
      this.ListOflegbyrtpData = this.ledbyroute[prop];
      // ('#my-datatable').DataTable.ajax.reload();
    }
    });
    
    })
  }
  
  ngOnInit(): void {
  }

}
