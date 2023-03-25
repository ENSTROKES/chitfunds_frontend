import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private listCustomer: Customer[] = [];
  constructor() { }

  // getEmployees() : Emp[]
  // {
  //   return this.listEmp;
  // }

  getCustomerFormData(customer : Customer) : void {
    this.listCustomer.push(customer);
  }
}
