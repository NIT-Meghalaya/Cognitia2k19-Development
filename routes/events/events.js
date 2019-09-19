const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/");
});
router.get("/robotics", function (req, res) {
    res.render("robotics/robotics");
});

router.get("/departmental", function (req, res) {
    res.render("departmental/cse");
});

router.get("/departmental/ece", function (req, res) {
    res.render("departmental/ece");
});
router.get("/departmental/eee", function (req, res) {
    res.render("departmental/eee");
});
router.get("/departmental/me", function (req, res) {
    res.render("departmental/me");
});
router.get("/departmental/ce", function (req, res) {
    res.render("departmental/ce");
});

router.get("/otherevents", function (req, res) {
    res.render("otherEvents/otherevents");
});

module.exports = router;