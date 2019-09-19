const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let roboticsTeams = require("../../models/roboticsTeams");
let departmentalTeams = require("../../models/departmentalTeams");
let transporter = require("../../models/transporter");

router.get("/", function (req, res) {
    res.render("forms/registration.ejs");
});

router.get("/robotics", function (req, res) {
    res.render("forms/robotics_form.ejs")
});

router.get("/departmental", function (req, res) {
    res.render("forms/departmental_form.ejs"); 
});

//----------------------------------------------------------------------------------------------//
router.post("/departmental", function (req, res) {

    departmentalTeams.create(req.body.teams, function (err, team) {
        if (err){
            console.log(err)
        }
        else {
            let eventsRegistered =  Object.values(team.ECE) + " " + Object.values(team.CSE) + " " +
                                    Object.values(team.EEE) + " " + Object.values(team.ME) + " " +
                                    Object.values(team.CE);
            
            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Departmental Team!</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please check details about your registration:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Member(s): ${team.member1},${team.member2}</li>
                    <li>Events: ${eventsRegistered}</li>
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any decrepencies immediately contact at <span><strong>cognitiawebdev@gmail.com</strong></span></small>`;
            let mailOptions = {
                from: process.env.EMAIL,
                to: team.teamEmail,
                subject: "Registration Details",
                html: emailMsg
            };
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
            res.redirect("/");
        }
    });
});
//--------------------------------------------------------------------------------------------//
router.post("/robotics", function (req, res) {

    roboticsTeams.create(req.body.teams, function (err, team) {
        if (err) {
            console.log(err);
        }
        else {
            let eventsRegistered = Object.values(team.events);
            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Robotics Team!</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please check details about your registration:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Team Leader Name: ${team.teamLeader}</li>
                    <li>Team Members: ${team.teamMember1},${team.teamMember2},${team.teamMember3},${team.teamMember4}</li>
                    <li>Events: ${eventsRegistered}</li>
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any decrepencies immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
            let mailOptions = {
                from: process.env.EMAIL,
                to: team.teamEmail,
                subject: "Registration Details",
                html: emailMsg
            };
            transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                    console.log(err);
                } 
            });
            res.redirect("/");

        }
    });


});

module.exports = router;