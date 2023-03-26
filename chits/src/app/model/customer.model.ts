import { PersonalDetails } from  './customerpersonalDetails.model' ;
import { customerNomineeDetails } from  './cusNomineeDetails.model' ;

export class Customer {
        customerId:string;
        branch_name:string;
        joining_date:string;
        guarantor:string;
        refered_type:string;
        refered_by:string;
        personalDetails: PersonalDetails;
        customerNomineeDetails:customerNomineeDetails;
}