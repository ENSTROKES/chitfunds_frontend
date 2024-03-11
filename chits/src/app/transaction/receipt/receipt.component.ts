import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/users-data.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
declare var $: any;
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
  gropdelete:any;
  Users = {};
  res : any;
  ListOfEmpData :any;
  NameList: any;
  service: any;
  response:any;
  ListOfBranchData:any;
  recptreslt:any;
  ListOfGroupData:any;
  grpreslt:any;
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

//For paination
totalReceipt: any;
pageNumber: number = 1;



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

// this.searchFilter("All" ,"All" ,this.recpdate);


this.http.get(this.userData.getreceiptcount).subscribe((data) =>{
  this.totalReceipt=data;
})



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
      //console.log("AllData" +JSON.stringify(data));
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
       // //console.log("key : " +prop);
       // //console.log("value : "+this.res[prop]);
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
  ////console.log("GetData" +this.userData.branchbyidurl);
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
    //  //console.log("GetData" +data.officeName);
    //console.log("AllData post method" +JSON.stringify(data));
    //console.log("groupid"+this.grpidvalue.groupid);
    ////console.log("name and id : "+ data.branchName.groupId)
    data.groupId = this.grpidvalue.groupid;
    data.selectEnrollment = this.grpidvalue.gropName;
 
    data.employeeId = data.collectionEmployee.empId;
    data.collectionEmployee = data.collectionEmployee.empName;
    
    //console.log("cusid"+data.customerName.custicket);
    data.customerId = data.customerName.cusId;
    data.collectionRoute = data.customerName.collectroute;
    data.ticketNumber = data.customerName.custicket;
    data.customerName = data.customerName.cusName;

//console.log("cusid"+data.customerName.custicket);
//console.log("cusid"+data.ticketNumber);
    //console.log("AllData after set id " +JSON.stringify(data));

      this.http.post(this.userData.createreceipt, data).subscribe((result)=>{
       this.recptreslt = result;

       if(this.recptreslt.responseCode=="200"){
        {   
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Receipt Created successfully!',
            showConfirmButton: false,
          })
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
        
      } else if(this.recptreslt.responseCode=="1000"){
        {   
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Receipt already exists!',
            showConfirmButton: false,
          })
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
        
      }
      else {
        {    
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error with Receipt Creation!',
            showConfirmButton: false,
          })
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      }
       
             
          });
        
       }



      // filter
      url_value=(this.userData.getReceipt+ '?size=10&page=' + this.pageNumber);
      //routeall_value:any;
      
      searchFilter(routeValue:any,recptype:any,recpdate:any){
        //console.log("rout:"+routeValue);
        //console.log("type:"+recptype);
        //console.log("date:"+recpdate);
        this.url_value=(this.userData.getReceipt+ '?size=10&page=' + this.pageNumber);
        // filter with specific route , type and if date entered
        if(routeValue != undefined && routeValue !="All" )
              {
                this.url_value+="&branch="+routeValue;
              }
        if(recptype != undefined && recptype !="All" )
              {
                this.url_value+="&type="+recptype;
              }
        if(recpdate != undefined && recpdate !="All" )
              {
                this.url_value+="&billDate="+recpdate;
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
      this.url_value=(this.userData.getReceipt+ '?size=10&page=' + this.pageNumber);        

      }
      changePage(event: number) {
        this.pageNumber = event;
        this.searchFilter(this.routeValue,this.recptype,this.recpdate);
      }


      grpidvalue:any;
      grpidoutput:any;
      ReceiptDetailsbyId:any={};
  //group details by id 
  recpdetailsbygrpid(data:any){

    //console.log("GetData" +data);
    this.http.get(this.userData.grouplistmapdcus+data).subscribe((data) =>{
      this.grpidoutput=data;
    Object.keys(this.grpidoutput).forEach(prop => {
    if(prop=="object"){
      this.ReceiptDetailsbyId = this.grpidoutput[prop];
      this.recprelpop=true;
      //console.log("Recpt grp filter");
      // //console.log("AllData" +JSON.stringify(this.ReceiptDetailsbyId));
    }
    });
    
    })
  }

  //recepit creation
 // selectEnrollmentval:any;
  grpmapidoutput:any;
  GroupMappdetails:any;
// recepitcreation(data:any){
//   // //console.log("AllData" +JSON.stringify(data));

// //console.log("id -"+this.selectEnrollmentval.groupId);
// //console.log("name -"+this.selectEnrollmentval.groupName);

// /// get method group customer details by id
// this.http.get(this.userData.grouplistmapdcus+this.selectEnrollmentval.groupId).subscribe((data) =>{
//   this.grpmapidoutput=data;
// Object.keys(this.grpmapidoutput).forEach(prop => {
// if(prop=="object"){
//   this.GroupMappdetails = this.grpmapidoutput[prop];
//   //console.log("Recpt creatiom");
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
  getReceiptDetailsbyId(receiptId:any){
    this.http.get(this.userData.getReceiptById+receiptId).subscribe((data) =>{
      this.grpidoutput=data;
      Object.keys(this.grpidoutput).forEach(prop => {
        if(prop=="object"){
          this.ReceiptDetailsbyId = this.grpidoutput[prop];  
          $('#EditReceipt').modal('toggle');
          console.log(this.ReceiptDetailsbyId)        
        }
        });
    })
  }
  deleteGroupbyId(){

  }
  updateReceipt(ReceiptModal:any){
    
    this.http.put(this.userData.updatereceipt, ReceiptModal).subscribe((result)=>{
      this.grpreslt = result;
     
      if(this.grpreslt.responseCode=="200"){
       {   
         Swal.fire({
           position: 'center',
           icon: 'success',
           title: 'Receipt Updated successfully!',
           showConfirmButton: false,
         })
         setTimeout(() => {
           location.reload();
         }, 1000);
       }
       
     }
     else {
       {    
         Swal.fire({
           position: 'center',
           icon: 'error',
           title: 'Error with Receipt Updation!',
           showConfirmButton: false,
         })
         setTimeout(() => {
           location.reload();
         }, 1000);
       }
     }
    });
  }

  deleteReceipt(data:any): void{
           
            
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      customClass: {
        confirmButton: 'my-confirm-button-class',
        cancelButton: 'my-cancel-button-class',
        title:'my-alert-title-class',
        
      }
    }).then((result) => {

      if (result.isConfirmed) {
        //console.log('Clicked Yes, File deleted!');
        this.http.delete(this.userData.deleteReceiptById+data).subscribe((data) =>{
          this.gropdelete=data;
          
           
                if(this.gropdelete.responseCode =="200"){
                  
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Receipt Deleted successfully',
                    showConfirmButton: false,
                  })
                  setTimeout(() => {
                    location.reload();
                  }, 1000);
                }
                else {
                  {    
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'Error with Receipt Deletion!',
                      showConfirmButton: false,
                    })
                    setTimeout(() => {
                      location.reload();
                    }, 1000);
                  }
                }
              })
            } 
              
              else if (result.isDismissed) {

        //console.log('Clicked No, File is safe!');

      }
    })
     
  }
}
