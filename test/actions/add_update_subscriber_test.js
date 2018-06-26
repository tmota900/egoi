const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/add_update_subscriber');

const subscriber = {
  first_name: 'João',
  last_name: 'Pluga 3',
  email: 'joaosantos.pluga3@e-goi.com'
};

describe('Action: Add/Update subscriber', function() {

  it('creates/updates a subscriber and return it', function(done) {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI
      },
      auth: {
        api_key: process.env.API_KEY
      },
      input: {
        listID: 5,
        email: subscriber.email,
        first_name: 'João'
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
