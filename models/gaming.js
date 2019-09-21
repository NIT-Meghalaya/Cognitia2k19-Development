const mongoose = require("mongoose");
let roboticsSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    teamName: String,
    teamEmail: String,
    teamContact: String,
    teamCollege: String,
    teamLeader: String,
    teamMember1: String,
    teamMember2: String,
    teamMember3: String,
    teamMember4: String,

    group: {
        event1: String,
        event2: String,
    },
    individual: {
        event1:String
    }

});

module.exports = mongoose.model("gamingTeam", roboticsSchema);