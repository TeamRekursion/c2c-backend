//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.get("/:StudentID", (req, res) => {
  Student.findbyId(req.params.StudentID)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
