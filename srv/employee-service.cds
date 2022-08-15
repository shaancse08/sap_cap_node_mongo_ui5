using {sap.cap.mongo as db} from '../db/data-model';

@path : '/empSRV'
service EmployeeService {
    entity EmployeeBasicDetails as projection on db.EmployeeDetails.EmployeeBasicDetails;
    entity EmployeeSalary       as projection on db.EmployeeDetails.EmployeeSalary;
    entity EmployeeAddress      as projection on db.EmployeeDetails.EmployeeAddress;
}
