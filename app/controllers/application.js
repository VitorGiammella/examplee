import Ember from 'ember';

export default Ember.Controller.extend({

  responseMessage: '',
  hotel_id: '',
  isValid: Ember.computed.notEmpty('hotel_id'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {

      this.set('responseMessage', `Result id: ${this.get('hotel_id')}`);
      this.send('goToRoom');
    },

    goToRoom() {
      const hotel_id = Ember.get(this, 'hotel_id');
      if (hotel_id) {
        alert(hotel_id);
        this.transitionToRoute('hotel', hotel_id);
      }
    }
  }

});
