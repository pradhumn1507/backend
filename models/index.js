const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  skills: [String],
  salaryDetails: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
