const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TaskFlow");
    console.log("MongoDB successfully connected");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

module.exports = connectDB;