import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  address:                  attr('string'),
  coordinates:              attr('coordinate-point'),
  hotel:                    belongsTo('hotel', {async: false})
});
