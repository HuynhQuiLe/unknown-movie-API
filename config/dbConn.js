const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATA_BASE_URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
