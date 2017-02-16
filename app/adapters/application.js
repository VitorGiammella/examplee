import ENV from 'ember-example/config/environment';
import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  host: ENV.API_HOST,
  namespace: 'api',

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(modelName, id, snapshot, requestType, query);
    return `${url}/${query.hotelId}/rooms/${query.roomId}`;
  },

  query(store, type, query) {
    var url = this.buildURL(type.modelName, null, null, 'query', query);
    return this.ajax(url, 'GET');
  }
});
