import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/users-data.service';
import { Observable } from 'rxjs';
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  title = 'Chitfunds';
  users: any;
  userId: any; 
  searchText:any;
  CategoryName = {};
  Users = {};
  res : any;
  ListOfEmpData :any;
  NameList: any;
  service: any;
  constructor(private http: HttpClient, private userData: UserDataService) {
    //console.log('Hello');
    // this.userData.users().subscribe((data) => {
    //   // var userdata = JSON.parse(data).object;
    //   console.log('data' + userdata);
    //   this.users = data;
    // });

    //get method
    this.userData.users().subscribe((data) =>{
      this.res =  data;

      Object.keys(this.res).forEach(prop => {
       // console.log("key : " +prop);
       // console.log("value : "+this.res[prop]);
        if(prop=="object"){
          this.ListOfEmpData = this.res[prop];
        }
      });
     // console.log("get string data ==>>" +JSON.stringify(this.ListOfEmpData[0]));
     // console.log("get data ==>>" + JSON.parse(this.empData));
   // this.users=this.ListOfEmpData;
  })
  }

  getUserFormData(data: any) {
    console.warn(data);
    this.userData.createUser(data).subscribe((result) => {
      console.warn(result);
    });
  }

  ngOnInit(): void {
    this.userData.getNameList().subscribe((data: any) => {
      this.NameList = data;
    });
  }
}
