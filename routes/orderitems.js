//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.post("/:StudentID/:DayID", (req, res) => {
  Student.findOneAndUpdate(
    { _id: req.params.StudentID, "history._id": req.params.DayID },
    { $set: { "history.$.item": req.body } }
  )
    .then(() => {
      Student.findById(req.params.StudentID)
        .then(data => {
          let balance = data.balance;
          let cost = 0;
          for (let day of data.history) {
            if (day._id.toString() === req.params.DayID) {
              for (let items of day.item) {
                cost = cost + items.price * items.quantity;
              }
            }
          }
          balance = balance - cost;
          Student.findByIdAndUpdate(
            req.params.StudentID,
            { $set: { balance: balance } },
            err => {
              if (err) {
                res.json(err);
              } else {
                res.json({
                  Status: "Successfully Updated Balance",
                  "Balance Remaining": balance
                });
              }
            }
          );
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
