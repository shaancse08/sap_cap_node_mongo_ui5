const EmployeeBasicDetails = require("../schemas/EmployeeBasicDetails");
const mongoose = require("mongoose");

const createEmployeeBasicDetails = async (req) => {
  try {
    const { ID, fName, lName, emailAddress, empAddress_ID, empSalary_ID } =
      req.data;
    const newEmployee = new EmployeeBasicDetails({
      ID,
      fName,
      lName,
      emailAddress,
      empAddress_ID,
      empSalary_ID,
    });
    await newEmployee.save();
  } catch (error) {
    console.log(error.message);
  }

  return;
};

const getEmployeeBasicDetails = (req) => {
  console.log("Read Done for EmployeeBasic details");
};

const updateEmployeeBasicDetails = (req) => {
  // Update Code Goes Here
};

const deleteEmployeeDetails = (req) => {
  //Delete code Goes here
};

module.exports = {
  createEmployeeBasicDetails,
  getEmployeeBasicDetails,
  updateEmployeeBasicDetails,
  deleteEmployeeDetails,
};
