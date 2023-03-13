import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isDisplayed: boolean | undefined;
  searchText: any;
  users:any;
  constructor(private http: HttpClient, private userData:UserDataService) { 
    this.userData.users().subscribe((data) =>{
    this.users=data;
  })
}
  ngOnInit(): void {
  }
  showHideText(event:any){
  
    if(event.target.checked==true){
      this.isDisplayed = true;
    }
    else{
      this.isDisplayed = false;
    }
    // Add other stuff
  }

}
