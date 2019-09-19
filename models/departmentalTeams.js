const mongoose = require("mongoose");
let departmentalSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    teamName: String,
    teamEmail: String,
    teamContact: String,
    teamCollege: String,
    member1: String,
    member2: String,
    ECE: {
        event1: String,
        event2: String,
        event3: String
    },
    CSE: {
        event1: String,
        event2: String,
        event3: String,
        event4: String,
        event5: String,
        event6: String
    },
    EEE: {
        event1: String,
        event2: String,
        event3: String
    },
    ME: {
        event1: String,
        event2: String,
        event3: String
    },
    CE: {
        event1: String,
        event2: String,
        event3: String,
        event4: String,
        event5: String,
        event6: String,
    }
});

module.exports = mongoose.model("departmentalTeam", departmentalSchema);