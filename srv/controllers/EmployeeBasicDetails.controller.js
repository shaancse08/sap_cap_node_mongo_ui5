const EmployeeBasicDetails = require("../schemas/EmployeeBasicDetails");
const mongoose = require("mongoose");

const createEmployeeBasicDetails = async (req) => {
  try {
    await mongoose.connect(
      "mongodb+srv://shaancse08:EKXUzV4lRQvp1arw@sapcapmongodb.v4s7wz9.mongodb.net/?retryWrites=true&w=majority"
    );
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
