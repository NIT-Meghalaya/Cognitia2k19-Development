require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const transporter = require("./models/transporter");


// mongoose.connect("mongodb://localhost/cognitia", { useNewUrlParser: true });


//-----------------------------------------------------------------------------------//

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
//---------------------------------------------------------------------------------------//

app.use("/registration", require("./routes/forms/registrationForms"));
app.use("/webdevteam", require("./routes/webdevteam/serviceSites"));
app.use("/events", require("./routes/events/events"));

//-----------------------------------------------------------------------------------//

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/timeline", function (req, res) {
    res.render("timeline")
});

//---------------------------------------------------------------------------------//
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Cognitia 2k19 is Live");
});