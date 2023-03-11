import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from "@syncfusion/ej2-angular-navigations";
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';


interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}

@Component({
  selector: 'app-customermanagement',
  templateUrl: './customermanagement.component.html',
  styleUrls: ['./customermanagement.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class CustomermanagementComponent implements OnInit {
  @ViewChild("adaptiveTab")
  public tabObj!: TabComponent;
  title = 'Chitfunds';
  users:any; 
  constructor(private http: HttpClient, private userData:UserDataService) { 
    this.userData.users().subscribe((data) =>{
      this.users=data;
  })
}
getUserFormData(data:any){
  console.warn(data)
  this.userData.saveUser(data).subscribe((result)=>{
    console.warn(result)
  })
}
 

  ngOnInit(): void {
  }
  public btnClick(): void {
    this.tabObj.selectedItem = 4;
  }
  
}
