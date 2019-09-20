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
    events: {
        event1: String,
        event2: String,
        event3: String,
        event4: String,

    }
});

module.exports = mongoose.model("exhibitionTeam", roboticsSchema);