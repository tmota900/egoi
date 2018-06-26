const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/remove_subscriber');

const subscriber = {
  first_name: 'Plg',
  last_name: 'Contact 3',
  email: 'some-example3@e-goi.com'
};

describe('Action: Remove subscriber', function() {

  it('remove an existing subscriber and return it', function(done) {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI
      },
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
        expect(res.result).to.eq('ok');

        done();
      })
      .catch(done);
  });
});
