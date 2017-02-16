import Ember from 'ember';

export default Ember.Controller.extend({

  responseMessage: '',
  hotel_id: '',

  isValid: Ember.computed.notEmpty('hotel_id'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      this.set('responseMessage', `Resultado pelo id: ${this.get('hotel_id')}`);

    }
  }

});
