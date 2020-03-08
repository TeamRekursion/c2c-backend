//jshint esversion:6
const router = require("express").Router();
const Food = require("../model/food");

router.get("/", (_req, res) => {
  Food.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
