/**
 * Action handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json action_fields.
 *
 * @returns {Promise} Promise object represents the action result.
 */
exports.handle = function (plg, event) {
  const headers = { Authorization: `Bearer ${event.auth.api_key}` };
  let listID = event.input.listID;
  const url = event.meta.baseURI + '/subscribers/' + listID;

  if ((event.input.cellphone || '').length > 0){
    event.input.cellphone = event.input.cellphone.replace(/\D/g, '').replace(/(\d{2})/, `$1-`);
  }

  if ((event.input.telephone || '').length > 0){
    event.input.telephone = event.input.telephone.replace(/\D/g, '').replace(/(\d{2})/, `$1-`);
  }

  return plg.axios({
    method: 'post',
    url: url,
    headers: headers,
    data: event.input
  }).then((res) => res.data);
};