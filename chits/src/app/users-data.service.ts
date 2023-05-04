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
  url = 'http://3.111.255.69/chitfund/getAllEmployee';
  createurl = 'http://3.111.255.69/chitfund/createEmployee';
  branchurl = 'http://3.111.255.69/chitfund/getAllBranches';
  branchbyidurl = 'http://3.111.255.69/chitfund/getBranchById?id=';
  headurl='http://3.111.255.69/chitfund/getAllHeadOffice';
  createbrnch = 'http://3.111.255.69/chitfund/createBranch';
  creategrp = 'http://3.111.255.69/chitfund/createGroup';
  createreceipt = 'http://3.111.255.69/chitfund/createReceipt';
  getAllgrp ='http://3.111.255.69/chitfund/getAllGroup';
  getAllcustomer ='http://3.111.255.69/chitfund/getAllCustomers';
  getReceipt ='http://3.111.255.69/chitfund/getAllReceipt';
  createcustomer='http://3.111.255.69/chitfund/createCustomer';
  customerbyidurl='http://3.111.255.69/chitfund/getCustomerById?id=';
  groupbyidurl='http://3.111.255.69/chitfund/getGroupById?id=';
  employeebyidurl='http://3.111.255.69/chitfund/getEmployeeById?id=';
  loginurl='http://3.111.255.69/chitfund/userLogin?userName=';
  creategroupMapping = 'http://3.111.255.69/chitfund/createCustomerGroupMapping';
  deleteemployee = 'http://3.111.255.69/chitfund/deleteEmployeeById?id=';
  deletegroup = 'http://3.111.255.69/chitfund/deleteGroupById?id=';
  deletecustomer = 'http://3.111.255.69/chitfund/deleteCustomerById?id=';
  deletebranch = 'http://3.111.255.69/chitfund/deleteBranchById?id=';
  fileupload = 'http://3.111.255.69/chitfund/upload';
  getslab='http://3.111.255.69/chitfund/getAllSlab';
  getDocbyid='http://3.111.255.69/chitfund/getImageByCustomer?id=';
  groupmapcus='http://3.111.255.69/chitfund/customerGroupMapping';
  grouplistmapdcus="http://3.111.255.69/chitfund/getCustomerForGroup?groupId=";
  cuslistmappedgrop="http://3.111.255.69/chitfund/getCustomersForCustomerMapping?type="
  //getDocbyid='http://192.168.1.12:8082/getImageByCustomer?id=3';
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
