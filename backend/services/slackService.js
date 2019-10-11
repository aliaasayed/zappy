const { RTMClient } = require('@slack/rtm-api');
const config = require('../config');
const twitterService = require('./twitterService');
const keyword = config.keyword;

const rtm = new RTMClient(config.slack.token);
module.exports = {
    listen: function (callback) {
        rtm.start()
            .then(() => {
                console.log("start slack connection...");
            })
            .catch(err => callback(err));

        rtm.on('message', (event) => {
            if (event.channel == config.slack.channel && event.text.toLowerCase().includes(keyword)) {
                twitterService.saveTweets(function (err, data) {
                    if (err)
                        return callback(err);
                    return callback(null);
                });
            }
        });
    }
}