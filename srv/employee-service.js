const cds = require("@sap/cds");
const {
  createEmployeeBasicDetails,
  getEmployeeBasicDetails,
  updateEmployeeBasicDetails,
  deleteEmployeeDetails,
} = require("./controllers/EmployeeBasicDetails.controller");

const {
  createEmployeeAddress,
  getEmployeeAddress,
  updateEmployeeAddress,
  deleteEmployeeAddress,
} = require("./controllers/EmployeeAddress.controller");

const { EmployeeBasicDetails, EmployeeAddress, EmployeeSalary } = cds.entities(
  "sap.cap.mongo.EmployeeDetails"
);

module.exports = cds.service.impl(async (srv) => {
  srv.on("CREATE", "EmployeeBasicDetails", createEmployeeBasicDetails);
  srv.on("READ", "EmployeeBasicDetails", getEmployeeBasicDetails);
  srv.on("UPDATE", "EmployeeBasicDetails", updateEmployeeBasicDetails);
  srv.on("DELETE", "EmployeeBasicDetails", deleteEmployeeDetails);

  srv.on("CREATE", "EmployeeAddress", createEmployeeAddress);
  srv.on("READ", "EmployeeAddress", getEmployeeAddress);
  srv.on("UPDATE", "EmployeeAddress", updateEmployeeAddress);
  srv.on("DELETE", "EmployeeAddress", deleteEmployeeAddress);
});
