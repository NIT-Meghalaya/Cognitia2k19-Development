const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let roboticsTeams = require("../../models/roboticsTeams");
let departmentalTeams = require("../../models/departmentalTeams");
let exhibitionTeams = require("../../models/exhibition");
let techstormTeams = require("../../models/techstorm");
let quizDebateTeams = require("../../models/quiz_debateTeams");
let gamingTeams = require("../../models/gaming");

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

router.get("/otherevents/exhibition", function (req, res) {
    res.render("forms/exhibition.ejs"); 
});

router.get("/otherevents/techstorm", function (req, res) {
    res.render("forms/techstorm.ejs");
});

router.get("/otherevents/quizanddebate", function (req, res) {
    res.render("forms/quiz.ejs");
});

router.get("/otherevents/gaming", function (req, res){
    res.render("forms/gaming.ejs");
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
                    <li>Member(s): ${team.member1} ${team.member2}</li>
                    <li>Events: ${eventsRegistered}</li>
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancy immediately contact at <span><strong>cognitiawebdev@gmail.com</strong></span></small>`;
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
                    <li>Team Members: ${team.teamMember1} ${team.teamMember2} ${team.teamMember3} ${team.teamMember4}</li>
                    <li>Events: ${eventsRegistered}</li>
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancy immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
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

router.post("/otherevents/exhibition", function (req, res) {

    exhibitionTeams.create(req.body.teams, function (err, team) {
        if (err) {
            console.log(err);
        }
        else {
            
            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Science Team</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please your registration details about Science Exhibition:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Team Leader Name: ${team.teamLeader}</li>
                    <li>Team Members: ${team.teamMember1} ${team.teamMember2} ${team.teamMember3} ${team.teamMember4}</li>
                    
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancy immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
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

router.post("/otherevents/techstorm", function (req, res) {

    techstormTeams.create(req.body.teams, function (err, team) {
        if (err) {
            console.log(err);
        }
        else {

            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Science Team</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please check your registration details about Tech Storm:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Team Leader Name: ${team.teamLeader}</li>
                    <li>Team Members: ${team.teamMember1} ${team.teamMember2} ${team.teamMember3} ${team.teamMember4}</li>
                    
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancy immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
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

router.post("/otherevents/quizanddebate", function (req, res) {

    quizDebateTeams.create(req.body.teams, function (err, team) {
        if (err) {
            console.log(err);
        }
        else {

            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Quizzing and Debating Team</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please check your registration details:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Team Leader Name: </li>
                    <li>Team Member(s): ${team.teamLeader} ${team.teamMember1}</li>
                    <li>Events Registered: ${team.events.event1} ${team.events.event2}
                    
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancydecrepencies immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
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
router.post("/otherevents/gaming", function (req, res) {

    gamingTeams.create(req.body.teams, function (err, team) {
        if (err) {
            console.log(err);
        }
        else {
            
            let emailMsg = `<h1>Cognitia 2k19</h1>
                <p>Greetings from the Cognitia's Gaming Team!</p>
             <p>We are very excited and thankful for you being a part of Cognitia 2k19.</p>
                </p>Please check details about your registration:</p>
                <ul>
                    <li> TeamName: ${team.teamName}</li>
                    <li>Team Contact Number: ${team.teamContact}</li>
                    <li>Team Email Contact: ${team.teamEmail}</li>
                    <li>Player's Registered: ${team.teamLeader} ${team.teamMember1} ${team.teamMember2} ${team.teamMember3} ${team.teamMember4}</li>
                    <li>Group Events: ${team.group.event1} ${team.group.event2}</li>
                    <li>Individual Events: ${team.individual.event1}</li>
                </ul>
            <p>We wish you all the very best. May the best team win! </p>
            <small>Incase of any discrepancy immediately contact at <strong>cognitiawebdev@gmail.com</strong></small>`;
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