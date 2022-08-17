const EmployeeBasicDetails = require("../schemas/EmployeeBasicDetails");

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

  const updatedData = await employeeDetails.save();
  return updatedData;
};

const deleteEmployeeDetails = (req) => {
  let { ID } = req.data;
  const deletedData = EmployeeBasicDetails.findOneAndDelete({ ID: ID });
  return deletedData;
};

module.exports = {
  createEmployeeBasicDetails,
  getEmployeeBasicDetails,
  updateEmployeeBasicDetails,
  deleteEmployeeDetails,
};
