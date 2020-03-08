//jshint esversion:6
const router = require("express").Router();
const Menu = require("../model/menu");

router.post("/", (req, res) => {
  const menu = new Menu({
    name: req.body.name,
    price: req.body.price,
    junk: req.body.junk
  });
  menu
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});
module.exports = router;