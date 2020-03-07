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
  }
});

module.exports = mongoose.model("Food", food);
