import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    let coordinates =  {
      latitude: serialized.latitude,
      longitude: serialized.longitude
    };
    return coordinates;
  },

  serialize(deserialized) {
    if (!deserialized || !deserialized.latitude || !deserialized.longitude) {
      return;
    }
    return Ember.Object.create({
      latitude: deserialized.latitude,
      longitude: deserialized.longitude
    });
  }
});
