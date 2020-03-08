//jshint esversion:6
const router = require("express").Router();
const Menu = require("../model/menu");

router.get("/", (req, res) => {
  Menu.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;