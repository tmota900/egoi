/**
 * Trigger handler
 *
 * @param {object} plg - Pluga developer platform toolbox.
 * @param {object} plg.axios - [axios](https://github.com/axios/axios)
 *
 * @param {object} event - Event bundle to handle.
 * @param {object} event.meta - Pluga event meta data.
 * @param {number} event.meta.lastReqAt - Last task handle timestamp.
 * @param {object} event.auth - Your app.json auth fields.
 * @param {object} event.input - Your meta.json configuration fields.
 *
 * @returns {Promise} Promise object represents an array of resources to handle.
 */
exports.handle = function (plg, event) {
    const headers = { Authorization: `Bearer ${event.auth.api_key}` };
    let listID = event.input.listID;
    const url = 'http://pluginmanager.e-team.biz/app/pluga/unsubscribers/' + listID;

    return plg.axios({
        method: 'get',
        url: url,
        headers: headers
    }).then((res) => res.data);
};