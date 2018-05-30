const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/send_email_campaign');

const campaign = {
    email: 'jrafael@e-goi.com',
    template: 'a47af35f6e07e518c1cba6c769f7db46'
};

describe('Action: Send e-mail campaign', function () {

    it('sends an e-mail campaign and return it', function (done) {
        const event = {
            auth: {
                api_key: process.env.API_KEY
            },
            input: {
                listID: 5,
                email: campaign.email,
                template: campaign.template
            }
        };

        action.handle(plg, event)
            .then((res) => {
                expect(res.to).to.eq(campaign.email);

                done();
            })
            .catch(done);
    });
});
