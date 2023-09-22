import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup } from '@angular/forms';





@Component({
  selector: 'app-minutesofauction',
  templateUrl: './minutesofauction.component.html',
  styleUrls: ['./minutesofauction.component.css']
})

export class MinutesofauctionComponent implements OnInit {
  
  
  title = 'Chitfunds';
  users:any;
  userId: any; 
  searchText:any;
  CategoryName = {};
  Users = {};
  res : any;
  ListOfEmpData :any;
  constructor(private http: HttpClient, private userData:UserDataService) { 
    this.userData.users().subscribe((data) =>{
      this.res =  data;

      Object.keys(this.res).forEach(prop => {
       // //console.log("key : " +prop);
       // //console.log("value : "+this.res[prop]);
        if(prop=="object"){
          this.ListOfEmpData = this.res[prop];
        }
      });
     // //console.log("get string data ==>>" +JSON.stringify(this.ListOfEmpData[0]));
     // //console.log("get data ==>>" + JSON.parse(this.empData));
   // this.users=this.ListOfEmpData;
  })
  
  }
  getUserFormData(data:any){
    console.warn(data)
    this.userData.createUser(data).subscribe((result)=>{
      console.warn(result)
    })
  }
  edit(user_id:any){
    
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1',user_id)
    .subscribe(data => 
      
      this.userId = data.id);
   }
   selectedUser = null;
   el:any;
   
 
   delete(user_id:any){
    
    this.userData.delete(user_id).subscribe((result) =>
    {
      if(confirm('Are you sure to delete?'))
      console.log(result);
      //this.ngOnInit();
    })
   }
  
  ngOnInit(): void {
    this.CategoryName = this.userData.CategoryName;
    
  }
  
  
  
  
   

}
