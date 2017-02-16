import attr from 'ember-data/attr';
import ContentProvider from './content-provider';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default ContentProvider.extend({
  name:                               attr('string'),
  description:                        attr('string'),
  award:                              attr('number'),
  isPreferential:                     attr('boolean'),
  location:                           belongsTo('location', {async: false}),
  rooms:                              hasMany('room', {async: false}),
  links:                              belongsTo('link', {async: false})
});
