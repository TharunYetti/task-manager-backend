const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Taskflow", taskSchema);