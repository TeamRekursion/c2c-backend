//jshint esversion:6
const mongoose = require("mongoose");

const food = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 0
  },
  date: {
    type: String,
    default: new Date().getDate().toString()+"-"+ new Date().getMonth().toString() +"-"+ new Date().getFullYear().toString()
  }
});

module.exports = mongoose.model("Food", food);
