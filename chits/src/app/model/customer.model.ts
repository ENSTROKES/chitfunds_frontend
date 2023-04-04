import { PersonalDetails } from  './customerpersonalDetails.model' ;
import { customerNomineeDetails } from  './cusNomineeDetails.model' ;
import { customerChitDetails } from './customerchitdetails.model';
export class Customer {
        customerId:any;
        branch_name:string;
        joining_date:string;
        
        refered_type:string;
        refered_by:string;
        personalDetails: PersonalDetails;
        customerNomineeDetails:customerNomineeDetails;
        customerChitDetails:customerChitDetails[];
}