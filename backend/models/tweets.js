var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tweets = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String
    },
    text: {
        type: String
    },
    createdAt: {
        type: String
    },
});

var tweets = mongoose.model("tweets", tweets);
module.exports = tweets;