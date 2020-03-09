//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.post("/:StudentID/:DayID", (req, res) => {
  Student.findById(req.params.StudentID).then(data => {
    let balance = data.balance;
    let cost = 0;
    let p = [...data.history[0].item];
    for (let day of data.history) {
      if (day._id.toString() === req.params.DayID) {
        console.log(day);
        for (let items of day.item) {
          //console.log(items);
          cost = cost + items.price * items.quantity;
        }
      }
    }
    for (let r of req.body) {
      p.push(r);
    }
    balance = balance - cost;
    Student.findOneAndUpdate(
      { _id: req.params.StudentID, "history._id": req.params.DayID },
      { $set: { "history.$.item": p, balance: balance } }
    )
      .then(() => {
        res.json({ Status: "Updated Balance" });
      })
      .catch(err => {
        res.json(err);
      });
  });
});

module.exports = router;
