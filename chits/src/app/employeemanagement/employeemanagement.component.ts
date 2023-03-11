import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';

interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
  }

@Component({
  selector: 'app-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.css']
})
export class EmployeemanagementComponent implements OnInit {
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
  
}



