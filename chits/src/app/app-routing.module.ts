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


import { PagesContactComponent } from './pages/pages-contact/pages-contact.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages/pages-faq/pages-faq.component';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';



const routes: Routes = [
  // { path: '',redirectTo:'pages-login', pathMatch: 'full' },
  // { path: 'pages-login', component: PagesLoginComponent,pathMatch: 'full' },
  {path:'', component:PagesLoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'auctionpaymentdisbursal', component: AuctionpaymentdisbursalComponent},
  { path: 'closure', component: ClosureComponent},
  { path: 'committedchitdetail', component: CommittedchitdetailComponent},
  { path: 'minutesofauction', component: MinutesofauctionComponent},
  { path: 'customermanagement', component: CustomermanagementComponent},
  { path: 'employeemanagement', component: EmployeemanagementComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'accountexpenses', component: AccountexpensesComponent},
  { path: 'employeeincentive', component: EmployeeincentiveComponent},
  { path: 'pettycash', component: PettycashComponent},
  { path: 'receipt', component: ReceiptComponent},
  { path: 'payroll', component: PayrollComponent},
  { path: 'collectionareamapping', component: CollectionAreaMappingComponent},
  
  { path: 'pages-contact', component: PagesContactComponent },
  { path: 'pages-error404', component: PagesError404Component },
  { path: 'pages-faq', component: PagesFaqComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
