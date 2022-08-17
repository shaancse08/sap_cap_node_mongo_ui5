const mongoose = require("mongoose");

/**
 * To create a table first we need to create a schema using mongoose and
 * once schema is created then we need to create a moel for that schema.
 * To create Schema we use mongoose.Schema(Object with key pair values) and the
 * object shows the field description and field type.
 * To create model we use mongoose.model("Table_name", created_Schema_Name).
 * Required: Parameter is to make the field mndatory
 * maxLength: Will check the maximum length of the String value
 * unique: Unique will make the value unique like emailid or username
 * immutable: This will make the value unchanged like created at once it is done no one can change
 * default: To make the default value
 */

const EmployeeBasicDetailsSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: [true, "Unique ID is mandatory Parameter"],
  },
  fName: {
    type: String,
    required: [true, "First Name is a mandatory Parameter"],
    maxLength: 12,
  },
  lName: {
    type: String,
    required: [true, "Last Name is a mandatory Parameter"],
    maxLength: 12,
  },
  emailAddress: {
    type: String,
    required: [true, "EMail address is mandatory Parameter"],
    unique: [true, "Email has to be unique"],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    lowercase: true,
  },
  empAddress_ID: String,
  empSalary_ID: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date().now,
  },
  updatedAt: {
    type: Date,
    default: () => Date().now,
  },
});

module.exports = mongoose.model(
  "EmployeeBasicDetails",
  EmployeeBasicDetailsSchema
);
