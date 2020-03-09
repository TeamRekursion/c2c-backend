//jshint esversion:6
const router = require("express").Router();
const student = require("../model/student");
const mongoose = require("mongoose");

router.post("/", (req, res) => {
  const id = { _id: mongoose.Types.ObjectId() };
  student.updateOne(
    { name: req.body.name },
    { $push: { history: id } },
    err => {
      if (err) {
        res.json(err);
      } else {
        res.json({ ID:id });
      }
    }
  );
});

module.exports = router;
