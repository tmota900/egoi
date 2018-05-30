const plg = require('pluga-plg');
const expect = require('chai').expect;

const trigger = require('../../lib/triggers/new_subscriber');

describe('Trigger: New subscriber', function () {

    it('get new subscribers and return it as array', function (done) {
        const event = {
            meta: { lastReqAt: 1525287122584 },
            auth: {
                api_key: process.env.API_KEY
            },
            input: {
                listID: 5
            }
        };

        trigger.handle(plg, event)
            .then((res) => {
                expect(res[0]).to.be.an('object');
                expect(res[0]).to.have.property('email');
                done();
            })
            .catch(done);
    });
});
