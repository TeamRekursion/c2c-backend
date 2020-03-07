//jshint esversion:8
const router = require("express").Router();
const Student = require("../model/student");
const random = require("random-number");

router.post("/", (req, res) => {
  const options = {
    min: 100000,
    max: 999999,
    integer: true
  };
  const student = new Student({
    name: req.body.name,
    code: random(options),
    balance: 2500
  });
  student
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
