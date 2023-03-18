import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BranchesComponent } from './branches/branches.component';
import { AuctionpaymentdisbursalComponent } from './auctions/auctionpaymentdisbursal/auctionpaymentdisbursal.component';
import { ClosureComponent } from './auctions/closure/closure.component';
import { CommittedchitdetailComponent } from './auctions/committedchitdetail/committedchitdetail.component';
import { MinutesofauctionComponent } from './auctions/minutesofauction/minutesofauction.component';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';
import { EmployeemanagementComponent } from './employeemanagement/employeemanagement.component';
import { GroupsComponent } from './groups/groups.component';
import { AccountexpensesComponent } from './transaction/accountexpenses/accountexpenses.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { PettycashComponent } from './transaction/pettycash/pettycash.component';
import { ReceiptComponent } from './transaction/receipt/receipt.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PayrollComponent } from './employeemanagement/payroll/payroll.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { CollectionAreaMappingComponent } from './employeemanagement/collectionareamapping/collectionareamapping.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


// import { MbscModule } from '@mobiscroll/angular';
@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    SidebarComponent,
    DashboardComponent,
    BranchesComponent,
    AuctionpaymentdisbursalComponent,
    ClosureComponent,
    CommittedchitdetailComponent,
    MinutesofauctionComponent,
    CustomermanagementComponent,
    EmployeemanagementComponent,
    GroupsComponent,
    AccountexpensesComponent,
    UsersProfileComponent,
    PettycashComponent,
    ReceiptComponent,
    PayrollComponent,
    CollectionAreaMappingComponent,
    PagesLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    // MbscModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }