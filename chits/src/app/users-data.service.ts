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
  // urlstrng= "https://api.vanmohportal.com/"
 urlstrng= "http://3.109.252.15/chitfund/"
  // url = 'https://jsonplaceholder.typicode.com/users';
  url = this.urlstrng +'getAllEmployee';
  createurl = this.urlstrng +'createEmployee';
  empupdate=this.urlstrng +'updateEmployee';
  branchurl = this.urlstrng +'getAllBranches';
  branchbyidurl = this.urlstrng +'getBranchById?id=';
  headurl=this.urlstrng +'getAllHeadOffice';
  createbrnch = this.urlstrng +'createBranch';
  creategrp = this.urlstrng +'createGroup';
  createreceipt = this.urlstrng +'createReceipt';
  getAllgrp =this.urlstrng +'getAllGroup';
  getAllcustomer =this.urlstrng +'getAllCustomers';
  getReceipt =this.urlstrng +'getAllReceipt';
  createcustomer=this.urlstrng +'createCustomer';
  customerbyidurl=this.urlstrng +'getCustomerById?id=';
  groupbyidurl=this.urlstrng +'getGroupById?id=';
  employeebyidurl=this.urlstrng +'getEmployeeById?id=';
  loginurl=this.urlstrng +'userLogin?userName=';
  //loginurl='https://api.vanmohportal.com/userLogin?userName=';
  creategroupMapping = this.urlstrng +'createCustomerGroupMapping';
  deleteemployee = this.urlstrng +'deleteEmployeeById?id=';
  deletegroup = this.urlstrng +'deleteGroupById?id=';
  deletecustomer = this.urlstrng +'deleteCustomerById?id=';
  deletebranch = this.urlstrng +'deleteBranchById?id=';
  fileupload = this.urlstrng +'upload';
  getslab=this.urlstrng +'getAllSlab';
  getDocbyid=this.urlstrng +'getImageByCustomer?id=';
  groupmapcus=this.urlstrng +'customerGroupMapping';
  grouplistmapdcus=this.urlstrng +"getCustomerForGroup?groupId=";
  cuslistmappedgrop=this.urlstrng +"getCustomersForCustomerMapping?type=";
  getroute=this.urlstrng +"getRouteForLedger";
  getledgerbyroute=this.urlstrng +"getLedgerByRoute?route=";
  getrecipetbycusid=this.urlstrng +"getReceiptByCustomerId?id=";
  getcustomercount=this.urlstrng +"getCustomersCount";
  getgroupcount=this.urlstrng +"getGroupCount";
  getreceiptcount=this.urlstrng +"getReceiptCount";
  getbranchcount=this.urlstrng +"getBranchCount";
  exportledgerbyroute=this.urlstrng+"exportLedgerByRouteAndTime?route=KARAMADAI&fromdate=1680287401000&todate=1690828199000";
 exportledgerbygroup=this.urlstrng+"exportLedgerByGroup?group=";
  outstandingreport=this.urlstrng+"getOutStandingReport";
  outstandingcustomer=this.urlstrng+"customerOutstandingBySubscription";
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
    
    //console.log("createUser" + data);

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
    
    //console.log("createbranch" + data);

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
