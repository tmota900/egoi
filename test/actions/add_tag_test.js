const plg = require('pluga-plg');
const expect = require('chai').expect;

const action = require('../../lib/actions/add_tag');

const tag = {
  tagID: 3,
  target: '67bdc8f97e'
};

describe('Action: Add tag', function() {

  it('add a tag and return it', function(done) {
    const event = {
      meta: {
        baseURI: process.env.BASE_URI
      },
      auth: {
        api_key: process.env.API_KEY
      },
      input: {
        listID: 5,
        target: tag.target,
        tagID: tag.tagID
      }
    };

    action.handle(plg, event)
      .then((res) => {
        expect(res.result).to.eq('OK');

        done();
      })
      .catch(done);
  });
});
