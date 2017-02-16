import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.camelize(attr);
  },
  
  extractId(modelClass, resourceHash) {
    if (Ember.isEmpty(resourceHash.id)) {
      return Ember.guidFor(resourceHash);
    }
    return this._super(modelClass, resourceHash);
  }
});
