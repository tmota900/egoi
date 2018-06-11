const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/update_subscriber');

const subscriber = {
    first_name: 'João',
    last_name: 'Santos',
    email: 'example@e-goi.com'
};

describe('Action: Update subscriber', function () {

    it('update an existing subscriber and return it', function (done) {
        const event = {
            auth: {
                api_key: process.env.API_KEY
            },
            input: {
                listID: 5,
                subscriber: subscriber.email,
                first_name: subscriber.first_name
            }
        };

        action.handle(plg, event)
            .then((res) => {
                expect(res.first_name).to.eq(subscriber.first_name);

                done();
            })
            .catch(done);
    });
});
