import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  code:                     attr('string'),
  name:                     attr('string'),
  description:              attr('string'),
  amount:                   attr('number'),
  content:                  belongsTo('content', {async: false})
});
