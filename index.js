//jshint esversion:6
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
dotEnv.config();
app.use(cors());

//Connect to Database
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => console.log("connected to DB")
);

//Setting up server
app.listen(process.env.PORT, () => console.log("Server is up and running"));

const auth = require("./routes/auth");
const addStudent = require("./routes/addstudent");
const present = require("./routes/present");
const orderitems = require("./routes/orderitems");
const getStudent = require("./routes/getStudent");
const addFood = require("./routes/addFood");
const getFood = require("./routes/getFood");
const addData = require("./routes/addData");
const getData = require("./routes/getData");

app.use("/api/auth", auth);
app.use("/api/addStudent", addStudent);
app.use("/api/present", present);
app.use("/api/orderItems", orderitems);
app.use("/api/getStudent", getStudent);
app.use("/api/addFood", addFood);
app.use("/api/getFood", getFood);
app.use("/api/addData", addData);
app.use("/api/getData", getData);