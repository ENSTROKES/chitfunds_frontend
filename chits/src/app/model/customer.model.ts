import { PersonalDetails } from  './customerpersonalDetails.model' ;
import { customerNomineeDetails } from  './cusNomineeDetails.model' ;
import { customerChitDetails } from './customerchitdetails.model';
export class Customer {
        customerId:any;
        branchName:string;
        joiningDate:string;
        _id:any;
        referedType:string;
        referedBy:string;
        personalDetails: PersonalDetails;
        customerNomineeDetails:customerNomineeDetails;
        customerChitDetails:customerChitDetails[];
}