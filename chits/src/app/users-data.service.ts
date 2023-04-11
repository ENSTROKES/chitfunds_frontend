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
  url = 'https://3.111.255.69/chitfund/getAllEmployee';
  createurl = 'https://3.111.255.69/chitfund/createEmployee';
  branchurl = 'https://3.111.255.69/chitfund/getAllBranches';
  branchbyidurl = 'https://3.111.255.69/chitfund/getBranchById?id=';
  headurl='https://3.111.255.69/chitfund/getAllHeadOffice';
  createbrnch = 'https://3.111.255.69/chitfund/createBranch';
  creategrp = 'https://3.111.255.69/chitfund/createGroup';
  createreceipt = 'https://3.111.255.69/chitfund/createReceipt';
  getAllgrp ='https://3.111.255.69/chitfund/getAllGroup';
  getAllcustomer ='https://3.111.255.69/chitfund/getAllCustomers';
  getReceipt ='https://3.111.255.69/chitfund/getAllReceipt';
  createcustomer='https://3.111.255.69/chitfund/createCustomer';
  customerbyidurl='https://3.111.255.69/chitfund/getCustomerById?id=';
  groupbyidurl='https://3.111.255.69/chitfund/getGroupById?id=';
  employeebyidurl='https://3.111.255.69/chitfund/getEmployeeById?id=';
  loginurl='https://3.111.255.69/chitfund/userLogin?userName=';
  creategroupMapping = 'https://3.111.255.69/chitfund/createCustomerGroupMapping';
  deleteemployee = 'https://3.111.255.69/chitfund/deleteEmployeeById?id=';
  deletegroup = 'https://3.111.255.69/chitfund/deleteGroupById?id=';
  deletecustomer = 'https://3.111.255.69/chitfund/deleteCustomerById?id=';
  deletebranch = 'https://3.111.255.69/chitfund/deleteBranchById?id=';
  fileupload = 'https://3.111.255.69/chitfund/upload';
  getslab='https://3.111.255.69/chitfund/getAllSlab';
  getDocbyid='http://3.111.255.69/chitfund/getImageByCustomer';
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

  //get all group
  group() {
    return this.http.get(this.getAllgrp);
  }

 //get all receipt
 receipt() {
  return this.http.get(this.getReceipt);
}


  //get all customers
  customer() {
    return this.http.get(this.getAllcustomer);
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

  // branchbyID(){
  //   return this.http.get(this.branchbyid);
  // }
   //create branch
   createbranch(data: any) {
    
    console.log("createbranch" + data);

    return this.http.post(this.createbrnch, data);
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
