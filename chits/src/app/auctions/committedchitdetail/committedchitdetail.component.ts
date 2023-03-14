import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';


@Component({
  selector: 'app-committedchitdetail',
  templateUrl: './committedchitdetail.component.html',
  styleUrls: ['./committedchitdetail.component.css']
})
export class CommittedchitdetailComponent implements OnInit {

  title = 'Chitfunds';
  users:any;
  //branch name
  response:any;
  ListOfBranchData:any

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
