import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';

@Component({
  selector: 'app-collectionareamapping',
  templateUrl: './collectionareamapping.component.html',
  styleUrls: ['./collectionareamapping.component.css']
})
export class CollectionAreaMappingComponent implements OnInit {
  users:any; 
  Users = {};
  res : any;
  ListOfCollData :any;
  userId: any; 
  response:any;
  ListOfBranchData:any
searchText:any;
  constructor(private http: HttpClient, private userData:UserDataService) {
    this.userData.users().subscribe((data) =>{
      this.res =  data;
  
      Object.keys(this.res).forEach(prop => {
       // console.log("key : " +prop);
       // console.log("value : "+this.res[prop]);
        if(prop=="object"){
          this.ListOfCollData = this.res[prop];
        }
      });
     // console.log("get string data ==>>" +JSON.stringify(this.ListOfEmpData[0]));
     // console.log("get data ==>>" + JSON.parse(this.empData));
   // this.users=this.ListOfEmpData;
  })

  //branch

  this.userData.branch().subscribe((data) =>{
    this.response=data;
Object.keys(this.response).forEach(prop => {
  if(prop=="object"){
    this.ListOfBranchData = this.response[prop];
  }
});
  
})
  }
  delete(user_id:any){
  
    this.userData.delete(user_id).subscribe((result) =>
    {
      if(confirm('Are you sure to delete?'))
      console.log(result);
      //this.ngOnInit();
    })
   }
   

  ngOnInit(): void {
  }

}
