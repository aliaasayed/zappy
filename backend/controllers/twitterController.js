var express = require("express");
var router = express.Router();
const twitterService = require('../services/twitterService');

// get all tweets
router.get("/tweets", function (req, res) {
    twitterService.getTweets(function (err, data) {
        if (err)
            res.json({ statusCode: 404, err: err });
        res.json({ statusCode: 200, tweets: data });
    });
});

module.exports = router;
