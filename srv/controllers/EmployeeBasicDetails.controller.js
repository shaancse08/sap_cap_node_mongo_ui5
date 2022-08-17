const EmployeeBasicDetails = require("../schemas/EmployeeBasicDetails");
const mongoose = require("mongoose");

const createEmployeeBasicDetails = async (req) => {
  const oPayload = req.data;
  try {
    const newEmployee = new EmployeeBasicDetails(oPayload);
    await newEmployee.save();
  } catch (error) {
    return req.reject("400", error.message);
  }
  return oPayload;
};

const getEmployeeBasicDetails = (req) => {
  const employeeBasicDetails = EmployeeBasicDetails.find();
  return employeeBasicDetails;
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
