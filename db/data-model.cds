namespace sap.cap.mongo;

context EmployeeDetails {

    @assert.unique : {email : [emailAddress]}
    entity EmployeeBasicDetails {
        key ID            : UUID not null;
            fName         : String(20) not null;
            lName         : String(20) not null;
            emailAddress  : String not null;
            empAddress_ID : UUID;
            empAddress    : Association to many EmployeeAddress
                                on empAddress_ID = empAddress.ID;
            empSalary_ID  : UUID;
            empSalary     : Association to many EmployeeSalary
                                on empSalary_ID = empSalary.ID;
    }

    entity EmployeeAddress {
        key ID               : UUID;
            employeeID       : UUID;
            city             : String;
            state            : String;
            address1         : String;
            address2         : String;
            country          : String;
            pincode          : Integer;
            addressCreatedOn: Date;
            addressUpdatedOn : Date;
    }

    entity EmployeeSalary {
        key ID                   : UUID;
            salary               : Decimal(10, 2);
            lastSalaryReviewed   : Date;
            lastIncrementPercent : Integer;
    }
}
