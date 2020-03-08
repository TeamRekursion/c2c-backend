//jshint esversion:6
const mongoose = require("mongoose");

const foodMenu = new mongoose.Schema({
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

module.exports = mongoose.model("Menu", foodMenu);
