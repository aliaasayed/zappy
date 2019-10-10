var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tweets = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    content: {
        type: String
    }
});

mongoose.model("tweets", tweets);

module.exports = UsersModel;