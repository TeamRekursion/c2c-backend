//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.post("/:StudentID/:DayID", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.StudentID, "history._id": req.params.DayID },
    { $push: { "history.$.item": req.body } },
    err => {
      if (err) {
        res.json(err);
      } else {
        res.json({ Status: "Added Item" });
      }
    }
  );
});

module.exports = router;
