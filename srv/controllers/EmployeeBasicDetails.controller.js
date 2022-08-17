const EmployeeBasicDetails = require("../schemas/EmployeeBasicDetails");
const mongoose = require("mongoose");
const { rawListeners } = require("../schemas/EmployeeBasicDetails");

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

const updateEmployeeBasicDetails = async (req) => {
  let oPayload = req.data;
  let employeeDetails = await EmployeeBasicDetails.findOne({
    ID: oPayload.ID,
  }).exec();
  for (const empDtls in oPayload) {
    if (empDtls !== "ID") {
      employeeDetails[empDtls] = oPayload[empDtls];
    }
  }

  const updatedData = await EmployeeBasicDetails.save();

  return employeeDetails;
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
