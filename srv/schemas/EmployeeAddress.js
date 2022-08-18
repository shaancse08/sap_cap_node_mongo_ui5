const mongoose = require("mongoose");

/**
 * To create a table first we need to create a schema using mongoose and
 * once schema is created then we need to create a moel for that schema.
 * To create Schema we use mongoose.Schema(Object with key pair values) and the
 * object shows the field description and field type.
 * To create model we use mongoose.model("Table_name", created_Schema_Name).
 */

const EmployeeAddressSchema = new mongoose.Schema({
  ID: {
    type: String,
    unique: [true, "ID is mandatory parameter"],
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: [true, "City is mandatory Parameter"],
  },
  state: {
    type: String,
    required: [true, "state is mandatory"],
  },
  address1: {
    type: String,
    required: [true, "Address1 is mandatory"],
  },
  address2: String,
  country: {
    type: String,
    required: [true, "Country is mandatory"],
  },
  pincode: {
    type: Number,
    required: [true, "Pincode is mandatory"],
  },
  addressCreatedOn: {
    type: Date,
    default: () => Date().now,
    immutable: true,
  },
  addressUpdatedOn: {
    type: Date,
    default: () => Date().now,
  },
});

module.exports = mongoose.model("EmployeeAddress", EmployeeAddressSchema);
