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
  url = 'http://15.207.195.199/chitfund/getAllEmployee';
  createurl = 'http://15.207.195.199/chitfund/createEmployee';
  branchurl = 'http://15.207.195.199/chitfund/getAllBranches';
  branchbyidurl = 'http://15.207.195.199/chitfund/getBranchById?id=';
  headurl='http://15.207.195.199/chitfund/getAllHeadOffice';
  createbrnch = 'http://15.207.195.199/chitfund/createBranch';
  creategrp = 'http://15.207.195.199/chitfund/createGroup';
  createreceipt = 'http://15.207.195.199/chitfund/createReceipt';
  getAllgrp ='http://15.207.195.199/chitfund/getAllGroup';
  getAllcustomer ='http://15.207.195.199/chitfund/getAllCustomers';
  getReceipt ='http://15.207.195.199/chitfund/getAllReceipt';
  createcustomer='http://15.207.195.199/chitfund/createCustomer';
  customerbyidurl='http://15.207.195.199/chitfund/getCustomerById?id=';
  groupbyidurl='http://15.207.195.199/chitfund/getGroupById?id=';
  employeebyidurl='http://15.207.195.199/chitfund/getEmployeeById?id=';
  loginurl='http://15.207.195.199/chitfund/userLogin?userName=';
  creategroupMapping = 'http://15.207.195.199/chitfund/createCustomerGroupMapping';
  deleteemployee = 'http://15.207.195.199/chitfund/deleteEmployeeById?id=';
  deletegroup = 'http://15.207.195.199/chitfund/deleteGroupById?id=';
  deletecustomer = 'http://15.207.195.199/chitfund/deleteCustomerById?id=';
  deletebranch = 'http://15.207.195.199/chitfund/deleteBranchById?id=';
  fileupload = 'http://15.207.195.199/chitfund/upload';
  getslab='http://15.207.195.199/chitfund/getAllSlab';
  getDocbyid='http://15.207.195.199/chitfund/getImageByCustomer?id=';
  groupmapcus='http://15.207.195.199/chitfund/customerGroupMapping';
  grouplistmapdcus="http://15.207.195.199/chitfund/getCustomerForGroup?groupId=";
  cuslistmappedgrop="http://15.207.195.199/chitfund/getCustomersForCustomerMapping"
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
