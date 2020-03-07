//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.post("/", (req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  Student.findOne({ name: name })
    .then(data => {
      if (data.code === parseInt(code)) {
        res.json(data);
      } else {
        res.json({ Error: "Code and Student does not match" });
      }
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
