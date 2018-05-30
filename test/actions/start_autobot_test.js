const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/start_autobot');

const autobot = {
    autobotID: 3,
    actionID: 9,
    subscriber: '67bdc8f97e'
};

describe('Action: Start autobot', function () {

    it('start an autobot and return it', function (done) {
        const event = {
            auth: {
                api_key: process.env.API_KEY
            },
            input: autobot
        };

        action.handle(plg, event)
            .then((res) => {
                expect(res.result).to.eq('OK');

                done();
            })
            .catch(done);
    });
});
