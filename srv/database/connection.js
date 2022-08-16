const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async () => {
  const con = await mongoose.connect(process.env.MONGO_DATABASE_URL);
  return con;
};

module.exports = { connectDatabase };
