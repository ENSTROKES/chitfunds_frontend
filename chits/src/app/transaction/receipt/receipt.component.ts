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

  NameList: any;
  service: any;
  constructor(private http: HttpClient, private userData: UserDataService) {
    console.log('Hello');
    // this.userData.users().subscribe((data) => {
    //   // var userdata = JSON.parse(data).object;
    //   console.log('data' + userdata);
    //   this.users = data;
    // });
  }

  getUserFormData(data: any) {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result) => {
      console.warn(result);
    });
  }

  ngOnInit(): void {
    this.userData.getNameList().subscribe((data: any) => {
      this.NameList = data;
    });
  }
}
