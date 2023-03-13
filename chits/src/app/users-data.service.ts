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
  url = 'http://13.126.215.67/chitfund/getAllEmployee';
  createurl = 'http://13.126.215.67/chitfund/createEmployee';

  constructor(private http: HttpClient) {
    //employeeData: any;
  }
  CategoryName = ['Name', 'Username', 'Email'];
 
  
  users() {
    return this.http.get(this.url);
  }
  user() {
    return this.http.get(this.url);
  }
  createUser(data: any) {
    
    console.log("createUser" + data);

    return this.http.post(this.createurl, data);
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
