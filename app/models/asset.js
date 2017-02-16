import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  href:                     attr('string'),
  title:                    attr('string'),
  description:              attr('string'),
  thumbnailImage:           belongsTo('link', {async: false}),
  images:                   belongsTo('link', {async: false}),
  videos:                   belongsTo('link', {async: false})
});
