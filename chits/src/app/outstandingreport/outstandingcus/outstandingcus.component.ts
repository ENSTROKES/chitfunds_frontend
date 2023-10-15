import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outstandingcus',
  templateUrl: './outstandingcus.component.html',
  styleUrls: ['./outstandingcus.component.css']
})
export class OutstandingcusComponent {

  constructor(private http: HttpClient, private userData:UserDataService,private router: Router ) {}
  goTobackPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  } 
}
