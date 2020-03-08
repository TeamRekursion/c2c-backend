//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");
const Food = require("../model/food");

router.post("/:StudentID/:DayID", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.StudentID, "history._id": req.params.DayID },
    { $push: { "history.$.item": req.body } }
  )
    .then(() => {
      Food.findOneAndUpdate(
        { name: req.body.name },
        { $inc: { quantity: req.body.quantity } }
      )
        .then(() => {
          res.json({ Status: "Successfully Added Items" });
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
