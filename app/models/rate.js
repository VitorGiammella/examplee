import attr from 'ember-data/attr';
import ContentProvider from './content-provider';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default ContentProvider.extend({
  packageGroup:                       attr('string'),
  rateToken:                          attr('string'),
  currency:                           attr('string'),
  priceWithTax:                       attr('number'),
  priceWithoutTax:                    attr('number'),
  pricePerDayWithTax:                 attr('number'),
  pricePerDayWithoutTax:              attr('number'),
  room:                               belongsTo('room', {async: false}),
  loyalty:                            belongsTo('loyalty', {async: false}),
  taxes:                              hasMany('tax', {async: false})
});
