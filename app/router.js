import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hotels');
  this.route('hotel', {path: 'hotel/:hotel_id'}, function() {
    this.route('rooms');
    this.route('room', {path: '/rooms/:room_id'});
  });
});

export default Router;
