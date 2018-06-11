const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/remove_subscriber');

const subscriber = {
    first_name: 'João',
    last_name: 'Santos',
    email: 'example@e-goi.com'
};

describe('Action: Remove subscriber', function () {

    it('remove an existing subscriber and return it', function (done) {
        const event = {
            auth: {
                api_key: process.env.API_KEY
            },
            input: {
                listID: 5,
                subscriber: subscriber.email
            }
        };

        action.handle(plg, event)
            .then((res) => {
                expect(res.error).to.be.a('string');

                done();
            })
            .catch(done);
    });
});
