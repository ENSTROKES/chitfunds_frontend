import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from 'src/app/users-data.service';
import { FormGroup, FormControl, Validators,NgForm} from '@angular/forms';
import {Branch} from 'src/app/model/branch.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  title = 'Chitfunds';
  
  isChecked = false;
  users:any; 
  response:any; //allbranch
  result:any; //branchbyID
  ListOfBranchData:any; //allbranch
  ListOfBranchIDData:any; //branchbyID
  output:any;	//headoffice
  ListOfHeadData:any; //headoffice
  searchText:any;
  idoutput:any ;
  //BranchDetailsById: Array<Branch>=[] ; //branchID
  BranchDetailById: Branch={ branchId: ' ',
  officeName: ' ',
  _id:'',
  phoneNumber: ' ',
  branchCode:'',
  emailID: ' ',
  address: ' ',
  pincode: ' ',
  state: ' ',
  district: ' ',
  city: ' ',
  landmark: ' ',
  remarks: ' ',
  headOffice:' ',
  createdDate: ' ',
  lastUpdatedDate: ' ',
  headOfficeName: ' ',
  startUpDate:' '
} ;
  reslt:any;
  //popup
  //isSubmitted = false;
// delete branch
branchdelete:any;
BranchDeleteById: Branch={ branchId: ' ',
  officeName: ' ',
  branchCode:'',
  _id:'',
  phoneNumber: ' ',
  emailID: ' ',
  address: ' ',
  pincode: ' ',
  state: ' ',
  district: ' ',
  city: ' ',
  landmark: ' ',
  remarks: ' ',
  headOffice:' ',
  createdDate: ' ',
  lastUpdatedDate: ' ',
  headOfficeName: ' ',
  startUpDate:' '
} ;

  isDisplayed: boolean | undefined;
  button = 'Submit';
  isLoading = false;
  buttons = {
    button1: {
      name: 'Button 1',
      loading: false
    }
  }

  brchselectvalue:any;
  
  totalBranches: any;
 pageNumber: number = 1; 
  
  
  constructor(private http: HttpClient, private userData:UserDataService, ) {

    
    //get branch method
  //   this.userData.branch().subscribe((data) =>{
  //     this.response=data;
  // Object.keys(this.response).forEach(prop => {
  //   if(prop=="object"){
  //     this.ListOfBranchData = this.response[prop];
  //   }
  // });
    
  // })

  //getbranchbyid
//   this.userData.branchbyID().subscribe((data) =>{
//     this.result=data;
// Object.keys(this.result).forEach(prop => {
//   if(prop=="object"){
//     this.ListOfBranchIDData = this.result[prop];
//   }
// });
  
// })
 
// this.userData.branchbyID().subscribe((data) =>{
//   this.result=data;
// Object.keys(this.result).forEach(prop => {
// if(prop=="object"){
//   this.ListOfBranchIDData = this.result[prop];
// }
// });

// })

//get branch count fot pagenation
this.http.get(this.userData.getbranchcount).subscribe((data) =>{
  this.totalBranches=data;


})

// this.searchFilter(true);

//head office
this.userData.head().subscribe((data) =>{
  this.output=data;
Object.keys(this.output).forEach(prop => {
if(prop=="object"){
  this.ListOfHeadData = this.output[prop];
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
  
//   exit() {
//     window.location.reload();
//  }
// GGet BRANCH by ID

  getBranchbyId(data:any): void{
    // //console.log("GetData" +data);
     
      //console.log("AllData" +JSON.stringify(data));
        
     ////console.log(new Date("2015/04/29 11:24:00").getTime());
     
     this.http.get(this.userData.branchbyidurl+data).subscribe((data) =>{
      this.idoutput=data;
    Object.keys(this.idoutput).forEach(prop => {
    if(prop=="object"){
      this.BranchDetailById = this.idoutput[prop];
      //console.log("GetData" +this.BranchDetailById._id);
    }
    });
    
    })
       }


  

// create Branch

getbranchFormData(data:any): void{
 //console.log("GetData" +data);
  //console.log("AllData" +JSON.stringify(data));
  ////console.log("GetData" +this.userData.headOffice);
 ////console.log(new Date("2015/04/29 11:24:00").getTime());
 
  this.http.post(this.userData.createbrnch, data).subscribe((result)=>{
    
   this.reslt = result;
   if(this.reslt.responseCode=="200"){
    {   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Barnch Created successfully!',
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
        title: 'Error with Branch Creation!',
        showConfirmButton: false,
      })
      setTimeout(() => {
       
        location.reload();
      }, 1000);
    }
  }
  //  Object.keys(this.reslt).forEach(prop => {
  //     //console.log("data : " +prop);
  //       //console.log("value : "+this.reslt[prop]);
  //        if(prop=="responseCode"){
  //       // this.ListOfEmpData = this.reslt[prop];
  //         if(this.reslt[prop]=="200"){
  //           if(window.confirm('Branch is created successfully')){
  //             location.reload();
  //           }else{
  //             location.reload();
  //           }
  //         }
  //         }
  //     });
    })
   }

   //delete branch
   
   deleteBranchbyId(data:any): void{
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
    this.http.delete(this.userData.deletebranch+data).subscribe((data) =>{
   if(confirm('Are you sure to delete?'))
     this.branchdelete=data;
     if(this.branchdelete.responseCode=="200"){
      {   
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Barnch Deleted successfully!',
          showConfirmButton: false,
        })
        setTimeout(() => {
          
          location.reload();
        }, 1000);
      }
      
    }
   
   })
      }else {
        {    
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error with Branch Deletion!',
            showConfirmButton: false,
          })
          setTimeout(() => {
           
            location.reload();
          }, 1000);
        }
      }
    
    });
  
    }
      // branch filter
      
      offctyp:any;
      url_value:any;
      searchFilter(offctype:any){
        //console.log(offctype);
        this.url_value= this.userData.branchurl+'?size=10&page=' + this.pageNumber;

        if (offctype != undefined && offctype !="All"){
          this.url_value+=("&headOffice="+offctype);
        }

        this.http.get(this.url_value).subscribe((data) =>{
          this.response=data;
      Object.keys(this.response).forEach(prop => {
        if(prop=="object"){
          this.ListOfBranchData = this.response[prop];
        }
      });
        
      })
      }
      changePage(event: number) {
        this.pageNumber = event;
        this.searchFilter(this.offctyp);
      }

  showHideText(event:any){
  
    if(event.target.checked==true){
      this.isDisplayed = true;
    }
    else{
      this.isDisplayed = false;
    }
    // Add other stuff


    
  }
  ngOnInit(): void {
    
  }
}
function userDetails(branchID: any, string: any) {
  throw new Error('Function not implemented.');
}

