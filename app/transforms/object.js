import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if (!Ember.$.isPlainObject(serialized)) {
      return {};
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    if (!Ember.$.isPlainObject(deserialized)) {
      return {};
    } else {
      return deserialized;
    }
  }
});
