const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let roboticsTeams = require("../../models/roboticsTeams");
let departmentalTeams = require("../../models/departmentalTeams");


router.get("/robotics", function (req, res) {
    roboticsTeams.find({}, function (err, allTeams) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("teamDetails/roboticsTeam", { allTeams: allTeams });
        }
    });
});

router.get("/departmental", function (req, res) {
    departmentalTeams.find({}, function (err, allTeams) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("teamDetails/departmentalTeam", { allTeams: allTeams });
        }
    });
});

module.exports = router;