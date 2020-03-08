//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.post("/", (req, res) => {
  const name = req.body.name;
  const code = req.body.code;
  Student.findOne({ name: name })
    .then(data => {
      if (data === null) {
        res.status(404).send({ Status: "User Not Found" });
      }
      else if (data.code === parseInt(code)) {
        res.json(data);
      } else {
        res.status(401).json({ Error: "Code and Student does not match" });
      }
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
