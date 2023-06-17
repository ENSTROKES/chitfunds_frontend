import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/users-data.service';
import { Observable } from 'rxjs';
interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  title = 'Chitfunds';
  users: any;
  userId: any; 
  searchText:any;
  CategoryName = {};
  Users = {};
  res : any;
  ListOfEmpData :any;
  NameList: any;
  service: any;
  response:any;
  ListOfBranchData:any;
  recptreslt:any;
  ListOfGroupData:any;
//customer
ListOfCustomerData:any;
custmresponse:any;

recprelpop = false;

//recipt
ListOfReceiptData:any;
receiptres:any;
group_name :any;
group_id :any;
emp_name:any;
emp_id:any;
cus_name:any;
cus_id:any;
collect_route:any;
//spinner
button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

  //filter
  routeValue:any;
  routeoutpt:any;
  listofroutedata:any;
  recptype:any;
  recpdate:any;
  recptselectvalue:any;
  constructor(private http: HttpClient, private userData: UserDataService) {
// get all receipt
// this.userData.receipt().subscribe((data) =>{
//   this.receiptres=data;
// Object.keys(this.receiptres).forEach(prop => {
// if(prop=="object"){
//   this.ListOfReceiptData = this.receiptres[prop];
// }
// });

// })




    // get all group method
    this.userData.group().subscribe((data) =>{
      this.response=data;
    Object.keys(this.response).forEach(prop => {
    if(prop=="object"){
      this.ListOfGroupData = this.response[prop];
    }
    });
    
    })

    // get all customer method
    this.userData.customer().subscribe((data) =>{
      this.custmresponse=data;
      console.log("AllData" +JSON.stringify(data));
    Object.keys(this.custmresponse).forEach(prop => {
    if(prop=="object"){
      this.ListOfCustomerData = this.custmresponse[prop];
    }
    });
    
    })

    //get employee method
    this.userData.users().subscribe((data) =>{
      this.res =  data;

      Object.keys(this.res).forEach(prop => {
       // console.log("key : " +prop);
       // console.log("value : "+this.res[prop]);
        if(prop=="object"){
          this.ListOfEmpData = this.res[prop];
        }
      });
  })
// get branch

this.userData.branch().subscribe((data) =>{
  this.response=data;
Object.keys(this.response).forEach(prop => {
if(prop=="object"){
  this.ListOfBranchData = this.response[prop];
}
});

})


// get all route 
this.http.get(this.userData.getroute).subscribe((data) =>{
  this.routeoutpt=data;
Object.keys(this.routeoutpt).forEach(prop => {
if(prop=="object"){
  this.listofroutedata = this.routeoutpt[prop];
  //console.log("GetData" +this.userData.branchbyidurl);
}
});

})


  }
//spinner
  
click() {
  this.isLoading = true;
  this.button = 'Processing';

  setTimeout(() => {
    this.isLoading = false;
    this.button = 'Submit';
    //alert('Done loading');
  }, 2000)
}
  //create reciept
  collectionEmployee:any;
  selectEnrollment:any;
  tdata:any;
  getrecieptFormData(data:any): void{
    //  console.log("GetData" +data.officeName);
    console.log("AllData post method" +JSON.stringify(data));
    console.log("groupid"+this.grpidvalue.groupid);
    //console.log("name and id : "+ data.branchName.groupId)
    data.groupId = this.grpidvalue.groupid;
    data.selectEnrollment = this.grpidvalue.gropName;
 
    data.employeeId = data.collectionEmployee.empId;
    data.collectionEmployee = data.collectionEmployee.empName;
    
    console.log("cusid"+data.customerName.custicket);
    data.customerId = data.customerName.cusId;
    data.collectionRoute = data.customerName.collectroute;
    data.ticketNumber = data.customerName.custicket;
    data.customerName = data.customerName.cusName;

console.log("cusid"+data.customerName.custicket);
console.log("cusid"+data.ticketNumber);
    console.log("AllData after set id " +JSON.stringify(data));

      this.http.post(this.userData.createreceipt, data).subscribe((result)=>{
       this.recptreslt = result;
        
       Object.keys(this.recptreslt).forEach(prop => {
          console.log("data : " +prop);
            console.log("value : "+this.recptreslt[prop]);
             if(prop=="responseCode"){
            // this.ListOfEmpData = this.reslt[prop];
              if(this.recptreslt[prop]=="200"){
                if(window.confirm('Receipt is created successfully')){
                  location.reload();
                  // this.recprelpop=false;
                }else(window.confirm('Error in creating receipt'))
                {
                  location.reload();
                  // this.recprelpop=false;
                }
              }

              }
          });
        })
       }



      // filter
      url_value=this.userData.getReceipt;
      //routeall_value:any;
      searchFilter(routeValue:any,recptype:any,recpdate:any){
        console.log("rout:"+routeValue);
        console.log("type:"+recptype);
        console.log("date:"+recpdate);
        
        // filter with specific route , type and if date entered
        if(routeValue != undefined && routeValue !="All"  )
              {
                this.url_value+="?branch="+routeValue;
                if(recptype != undefined && recptype != "All"){
                
            
                this.url_value +="&type="+recptype;
                }

               if(recpdate != undefined )
               {
                this.url_value +="&billDate="+recpdate;
                
               }
            }

        // filter with all route , specific type and if date entered
            else if( (routeValue =="All" || routeValue == undefined) && recptype != undefined && recptype != "All" ){
              
                this.url_value +="?type="+recptype;

             if(recpdate != undefined )
              {
                this.url_value +="&billDate="+recpdate;
                
              }
            }

        // filter with all route and type if date entered
       else if( (routeValue =="All" || routeValue == undefined) && (recptype == "All"||recptype == undefined) && recpdate != undefined ){
       
       if(recpdate != undefined )
        {
          this.url_value +="?billDate="+recpdate;
          
        }
      }

        this.http.get(this.url_value).subscribe((data) =>{
          this.receiptres=data;
        Object.keys(this.receiptres).forEach(prop => {
        if(prop=="object"){
          this.ListOfReceiptData = this.receiptres[prop];
          this.url_value=this.userData.getReceipt;
        }
        });
        
        })
              

      }


      grpidvalue:any;
      grpidoutput:any;
      GroupDetailsbyId:any;
  //group details by id 
  recpdetailsbygrpid(data:any){

    console.log("GetData" +data);
    this.http.get(this.userData.grouplistmapdcus+data).subscribe((data) =>{
      this.grpidoutput=data;
    Object.keys(this.grpidoutput).forEach(prop => {
    if(prop=="object"){
      this.GroupDetailsbyId = this.grpidoutput[prop];
      this.recprelpop=true;
      console.log("Recpt grp filter");
      // console.log("AllData" +JSON.stringify(this.GroupDetailsbyId));
    }
    });
    
    })
  }

  //recepit creation
 // selectEnrollmentval:any;
  grpmapidoutput:any;
  GroupMappdetails:any;
// recepitcreation(data:any){
//   // console.log("AllData" +JSON.stringify(data));

// console.log("id -"+this.selectEnrollmentval.groupId);
// console.log("name -"+this.selectEnrollmentval.groupName);

// /// get method group customer details by id
// this.http.get(this.userData.grouplistmapdcus+this.selectEnrollmentval.groupId).subscribe((data) =>{
//   this.grpmapidoutput=data;
// Object.keys(this.grpmapidoutput).forEach(prop => {
// if(prop=="object"){
//   this.GroupMappdetails = this.grpmapidoutput[prop];
//   console.log("Recpt creatiom");
//   // enabling form
//   this.recprelpop=true;
// }
// });

// })

// }










  ngOnInit(): void {
    this.userData.getNameList().subscribe((data: any) => {
      this.NameList = data;
    });
  }
}
