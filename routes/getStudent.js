//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.get("/", (req, res) => {
  Student.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
