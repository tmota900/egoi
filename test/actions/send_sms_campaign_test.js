const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/send_sms_campaign');

const campaign = {
  cellphone: '351-919702276',
  template: '3cde12690423965674f1d953b3db7514'
};

describe('Action: Send SMS campaign', function() {

  it('sends an SMS campaign and return it', function(done) {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI
      },
      auth: {
        api_key: process.env.API_KEY
      },
      input: {
        listID: 5,
        cellphone: campaign.cellphone,
        template: campaign.template
      }
    };

    action.handle(plg, event)
      .then((res) => {
        expect(res.to[0]).to.be.a('string');

        done();
      })
      .catch(done);
  });
});
