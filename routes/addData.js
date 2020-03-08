//jshint esversion:6
const router = require("express").Router();
const Food = require("../model/food");

router.post("/", (req, res) => {
  const food = new Food({
    name: req.body.name
  });
  food
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;