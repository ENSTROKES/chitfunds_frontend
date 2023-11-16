import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BranchesComponent } from './branches/branches.component';
import { AuctionpaymentdisbursalComponent } from './auctions/auctionpaymentdisbursal/auctionpaymentdisbursal.component';
import { ClosureComponent } from './auctions/closure/closure.component';
import { CommittedchitdetailComponent } from './auctions/committedchitdetail/committedchitdetail.component';
import { MinutesofauctionComponent } from './auctions/minutesofauction/minutesofauction.component';
import { CustomermanagementComponent } from './customermanagement/customermanagement.component';
import { EmployeemanagementComponent } from './employeemanagement/employeemanagement.component';
import { PayrollComponent } from './employeemanagement/payroll/payroll.component';
import { CollectionAreaMappingComponent } from './employeemanagement/collectionareamapping/collectionareamapping.component';
import { GroupsComponent } from './groups/groups.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountexpensesComponent } from './transaction/accountexpenses/accountexpenses.component';
import { EmployeeincentiveComponent } from './transaction/employeeincentive/employeeincentive.component';
import { PettycashComponent } from './transaction/pettycash/pettycash.component';
import { ReceiptComponent } from './transaction/receipt/receipt.component';
import { AddgroupmemberComponent } from './addgroupmember/addgroupmember.component';
import { AddmemberComponent } from './addmember/addmember.component';

import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { FiltergridComponent } from './filtergrid/filtergrid.component';
import { AuthenticationGuard } from './authentication.guard';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { LedgerComponent } from './ledger/ledger.component';
import { OutstandingbranchComponent } from './outstandingreport/outstandingbranch/outstandingbranch.component';
import { OutstandingrouteComponent } from './outstandingreport/outstandingroute/outstandingroute.component';
import { OutstandingroutsubComponent } from './outstandingreport/outstandingroutsub/outstandingroutsub.component';
import { OutstandingcusComponent } from './outstandingreport/outstandingcus/outstandingcus.component';
import { RouteComponent } from './route/route.component';
import { CusclanderComponent } from './outstandingreport/cusclander/cusclander.component';

const routes: Routes = [
  { path: '',redirectTo:'/pages-login', pathMatch: 'full' },
  { path: 'pages-login', component: PagesLoginComponent,pathMatch: 'full' },
  // {path:'', component:PagesLoginComponent},

  { path: 'pages-login',component:PagesLoginComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard]},
  { path: 'branches', component: BranchesComponent,canActivate:[AuthenticationGuard]},
  { path: 'auctionpaymentdisbursal', component: AuctionpaymentdisbursalComponent,canActivate:[AuthenticationGuard]},
  { path: 'closure', component: ClosureComponent,canActivate:[AuthenticationGuard]},
  { path: 'committedchitdetail', component: CommittedchitdetailComponent,canActivate:[AuthenticationGuard]},
  { path: 'minutesofauction', component: MinutesofauctionComponent,canActivate:[AuthenticationGuard]},
  { path: 'ledger', component:LedgerComponent,canActivate:[AuthenticationGuard]},
  { path: 'customermanagement', component: CustomermanagementComponent,canActivate:[AuthenticationGuard]},
  { path: 'employeemanagement', component: EmployeemanagementComponent,canActivate:[AuthenticationGuard]},
  { path: 'groups', component: GroupsComponent,canActivate:[AuthenticationGuard]},
  { path: 'reports', component: ReportsComponent,canActivate:[AuthenticationGuard]},
  { path: 'accountexpenses', component: AccountexpensesComponent,canActivate:[AuthenticationGuard]},
  { path: 'employeeincentive', component: EmployeeincentiveComponent,canActivate:[AuthenticationGuard]},
  { path: 'pettycash', component: PettycashComponent,canActivate:[AuthenticationGuard]},
  { path: 'receipt', component: ReceiptComponent,canActivate:[AuthenticationGuard]},
  { path: 'payroll', component: PayrollComponent,canActivate:[AuthenticationGuard]},
  { path: 'collectionareamapping', component: CollectionAreaMappingComponent,canActivate:[AuthenticationGuard]},
  
  { path: 'pages-contact', component: PagesContactComponent, canActivate:[AuthenticationGuard]},
  { path: 'pages-error404', component: PagesError404Component,canActivate:[AuthenticationGuard] },
  { path: 'pages-faq', component: PagesFaqComponent ,canActivate:[AuthenticationGuard]},
  { path: 'pages-login', component: PagesLoginComponent ,canActivate:[AuthenticationGuard]},
  { path: 'pages-register', component: PagesRegisterComponent ,canActivate:[AuthenticationGuard]},
  { path: 'user-profile', component: UsersProfileComponent,canActivate:[AuthenticationGuard] },
  { path: 'addgroupmember', component: AddgroupmemberComponent,canActivate:[AuthenticationGuard] },
  { path: 'addmember', component: AddmemberComponent,canActivate:[AuthenticationGuard] },
  { path: 'filtergrid', component: FiltergridComponent,canActivate:[AuthenticationGuard] },
  { path: 'grouplist', component: GrouplistComponent,canActivate:[AuthenticationGuard] },
  { path: 'outstandbranch', component: OutstandingbranchComponent,canActivate:[AuthenticationGuard]},
  { path: 'outstandroute', component: OutstandingrouteComponent,canActivate:[AuthenticationGuard]},
  { path: 'outstandsub', component: OutstandingroutsubComponent,canActivate:[AuthenticationGuard]},
  { path: 'outstandcus', component: OutstandingcusComponent,canActivate:[AuthenticationGuard]},
  { path: 'route', component: RouteComponent,canActivate:[AuthenticationGuard]},
  { path: 'cusclander', component: CusclanderComponent,canActivate:[AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
