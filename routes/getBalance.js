//jshint esversion:6
const router = require("express").Router();
const Student = require("../model/student");

router.get("/:StudentID", (req, res) => {
    Student.findById(req.params.StudentID).then(data => {
        res.json({ balance: data.balance });
    }).catch(err => {
        res.json(err);
    }); 
});

module.exports = router;