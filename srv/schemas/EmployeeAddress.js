const mongoose = require("mongoose");

/**
 * To create a table first we need to create a schema using mongoose and
 * once schema is created then we need to create a moel for that schema.
 * To create Schema we use mongoose.Schema(Object with key pair values) and the
 * object shows the field description and field type.
 * To create model we use mongoose.model("Table_name", created_Schema_Name).
 */

const EmployeeAddressSchema = new mongoose.Schema({
  ID: String,
  employeeID: String,
  city: String,
  state: String,
  address1: String,
  address2: String,
  country: String,
  pincode: Number,
  addressUpdatedOn: Date,
});

module.exports = mongoose.model("EmployeeAddress", EmployeeAddressSchema);
