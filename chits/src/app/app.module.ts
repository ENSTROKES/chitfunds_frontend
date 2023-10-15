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
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PayrollComponent } from './employeemanagement/payroll/payroll.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { CollectionAreaMappingComponent } from './employeemanagement/collectionareamapping/collectionareamapping.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthguradServiceService } from './authgurad-service.service';
import { AddgroupmemberComponent } from './addgroupmember/addgroupmember.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { FiltergridComponent } from './filtergrid/filtergrid.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { ReportsComponent } from './reports/reports.component';
import { LedgerComponent } from './ledger/ledger.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BnNgIdleService } from 'bn-ng-idle';
import { MinusPipe } from './minus.pipe';
import { ExcelService } from './excel.service';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { OutstandingbranchComponent } from './outstandingreport/outstandingbranch/outstandingbranch.component';
import { OutstandingrouteComponent } from './outstandingreport/outstandingroute/outstandingroute.component';
import { OutstandingroutsubComponent } from './outstandingreport/outstandingroutsub/outstandingroutsub.component';
import { OutstandingcusComponent } from './outstandingreport/outstandingcus/outstandingcus.component';



// import { HashLocationStrategy, LocationStrategy  } from '@angular/common';



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
    PagesLoginComponent,
    AddgroupmemberComponent,
    AddmemberComponent,
    SpinnerComponent,
    FiltergridComponent,
    GrouplistComponent,
    ReportsComponent,
    LedgerComponent,
    MinusPipe,
    OutstandingbranchComponent,
    OutstandingrouteComponent,
    OutstandingroutsubComponent,
    OutstandingcusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    // MbscModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CanvasJSAngularChartsModule,
    FullCalendarModule
    
  ],
   
  providers: [
    // {provide : LocationStrategy , useClass: HashLocationStrategy}
    AuthguradServiceService,BnNgIdleService,
  {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  },ExcelService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
