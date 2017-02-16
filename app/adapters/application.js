import RESTAdapter from 'ember-data/adapters/rest';
import ENV from 'exemple/config/environment';

export default RESTAdapter.extend({
  host: config.apiHost,
    namespace: config.apiNamespace,

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(modelName, id, snapshot, requestType, query);
    return `${url}/dev/${query.hotel_id}`;
    //return `${url}/${query.hotelId}/rooms/${query.roomId}`;
  },

  query(store, type, query) {
    var url = this.buildURL(type.modelName, null, null, 'query', query);
    return this.ajax(url, 'GET');
  }
});
