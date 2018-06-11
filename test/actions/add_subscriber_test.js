const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/add_subscriber');

const subscriber = {
    first_name: 'João',
    last_name: 'Santos',
    email: 'example@e-goi.com'
};

describe('Action: Add subscriber', function () {

    it('creates a new subscriber and return it', function (done) {
        const event = {
            auth: {
                api_key: process.env.API_KEY
            },
            input: {
                listID: 5,
                email: subscriber.email
            }
        };

        action.handle(plg, event)
            .then((res) => {
                expect(res.email).to.eq(subscriber.email);

                done();
            })
            .catch(done);
    });
});
