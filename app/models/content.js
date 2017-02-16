import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  code:                     attr('string'),
  name:                     attr('string'),
  description:              attr('string'),
  contentProvider:          belongsTo('content-provider', {polymorphic: true}),
  items:                    hasMany('item', {async: false})
});
