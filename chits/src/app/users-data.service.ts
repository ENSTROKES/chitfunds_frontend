import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from 'src/app/employee';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  get(user_id: any) {
    throw new Error('Method not implemented.');
  }
  data = String;

  // url = 'https://jsonplaceholder.typicode.com/users';
  url = 'http://3.108.194.170/chitfund/getAllEmployee';
  createurl = 'http://3.108.194.170/chitfund/createEmployee';
  branchurl = 'http://3.108.194.170/chitfund/getAllBranches';
  branchbyid = 'http://3.108.194.170/chitfund/getBranchById?branchId=2';
  headurl='http://3.108.194.170/chitfund/getAllHeadOffice';
  constructor(private http: HttpClient) {
    //employeeData: any;
  }
  CategoryName = ['Name', 'Username', 'Email'];
 

  //employee
  users() {
    return this.http.get(this.url);
  }
  user() {
    return this.http.get(this.url);
  }

  //create employee
  createUser(data: any) {
    
    console.log("createUser" + data);

    return this.http.post(this.createurl, data);
  }

  //get branch
  branch() {
    return this.http.get(this.branchurl);
  }

  branchbyID(){
    return this.http.get(this.branchbyid);
  }

  //get head office
  head() {
    return this.http.get(this.headurl);
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
  view(id: any) {
    return this.http.get(this.url + '/' + id);
  }
  getNameList(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }
}
