import attr from 'ember-data/attr';
import ContentProvider from './content-provider';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default ContentProvider.extend({
  rph:                                attr('number'),
  name:                               attr('string'),
  description:                        attr('string'),
  mealPlan:                           attr('string'),
  category:                           attr('string'),
  lodging:                            attr('string'),
  minPax:                             attr('number'),
  maxPax:                             attr('number'),
  quantityAvailable:                  attr('number'),
  isAvailable:                        attr('boolean'),
  hotel:                              belongsTo('hotel', {async: false}),
  rates:                              hasMany('rate', {async: false}),
  cancellationPolicy:                 hasMany('cancellation-policy', {async: false}),
  links:                              belongsTo('link', {async: false}),
  group:                              attr('string')
});
