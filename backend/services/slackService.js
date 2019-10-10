const { RTMClient } = require('@slack/rtm-api');
const config = require('../config');

const slackConfig = config.slack;
const rtm = new RTMClient(slackConfig.token);

module.exports = {
    listen: function (callback) {
        rtm.start()
            .then(() => {
                console.log("start slack connection...");
            })
            .catch(err => callback(err));

        rtm.on('message', (event) => {
            console.log(event);
        });
    }
}