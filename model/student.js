//jshint esversion:6
const mongoose = require("mongoose");
const food = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  junk: {
    type: Boolean,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});
const day = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: new Date().getTime()
  },
  item: {
    type: [food],
    default: []
  }
});
const student = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  history: {
    type: [day],
    default: []
  }
});

module.exports = mongoose.model("Student", student);