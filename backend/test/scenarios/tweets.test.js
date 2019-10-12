const app = require('../../app');
const expect = require('expect');
const request = require("supertest");

describe("Zappy App Test", function () {
    it("list tweets", function (done) {
        request(app)
            .get('/tweets')
            .expect(function (res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.tweets.length).not.toBe(0);
            })
            .end(function (err, res) {
                if (err)
                    return done(err);
                done();
            });
    });
});
