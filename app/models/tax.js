import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  code:                     attr('string'),
  description:              attr('string'),
  percent:                  attr('number'),
  amount:                   attr('number'),
  rate:                     belongsTo('rate', {async: false})
});
