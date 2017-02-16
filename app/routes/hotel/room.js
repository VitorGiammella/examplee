import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let hotelId = this.paramsFor('hotel').hotel_id;
    let roomId = params.room_id;
    let query = {
      hotelId: hotelId,
      roomId: roomId
    };
    return this.store.query('hotel', query);
  }
});
