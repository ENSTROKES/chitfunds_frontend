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
  searchText: any;
  // get branch
  response:any;
  ListOfBranchData:any;
  constructor(private http: HttpClient, private userData:UserDataService) { 
    this.userData.branch().subscribe((data) =>{
      this.response=data;
  Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfBranchData = this.response[prop];
    }
  });
    
  })
}
getUserFormData(data:any){
  console.warn(data)
  this.userData.createUser(data).subscribe((result)=>{
    console.warn(result)
  })
}
 

  ngOnInit(): void {
  }
  
  
}