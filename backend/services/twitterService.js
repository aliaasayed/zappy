const async = require('async');
const Twitter = require('twitter');
const tweetsModel = require('../models/tweets');
const config = require("../config");

var client = new Twitter({
    consumer_key: config.twitter.consumer_key,
    consumer_secret: config.twitter.consumer_secret,
    access_token_key: config.twitter.access_token_key,
    access_token_secret: config.twitter.access_token_secret
});

module.exports = {
    getTweets,
    saveTweets: function (callback) {
        var resultData = {};
        async.series([
            //find old tweets
            function (cb) {
                getTweets(function (err, oldTweets) {
                    if (err)
                        return cb(err);
                    resultData.oldTweetsIds = oldTweets.map(function (tweet) {
                        return tweet.id
                    });
                    return cb(null);
                });
            },
            //find new tweets
            function (cb) {
                fetchTweets(function (err, data) {
                    if (err)
                        return cb(err);
                    resultData.newTweets = data;
                    return cb(null)
                });
            },
            //save new tweets
            function (cb) {
                var newTweets = resultData.newTweets.filter(function (tweet) {
                    tweet.createdAt = tweet.created_at;
                    tweet.userName = tweet.user.name;
                    return resultData.oldTweetsIds.indexOf(tweet.id) == -1;
                });

                tweetsModel.create(newTweets, function (err, data) {
                    if (err)
                        return cb("cannot create new tweets");
                    return cb(null);
                });
            }
        ], function (err) {
            if (err)
                return callback(err);
            return callback(null, resultData);
        });
    }
}

function getTweets(callback) {
    tweetsModel.find({}, function (err, tweets) {
        if (err)
            return callback("cannot find tweets");
        return callback(null, tweets)
    });
}

function fetchTweets(callback) {
    var resultData = {};
    async.series([
        //find tweets
        function (cb) {
            client.get(config.twitter.url, config.twitter.screen_name, function (error, tweets, response) {
                if (error)
                    return cb("cannot get account tweets");
                resultData = tweets;
                return cb(null);
            });
        }
    ], function (err) {
        if (err)
            return callback(err);
        return callback(null, resultData);
    });
}