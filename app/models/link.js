import Model from 'ember-data/model';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  thumbnailImage:           belongsTo('asset', {async: false, inverse: 'thumbnailImage'}),
  images:                   hasMany('asset', {async: false, inverse: 'images'}),
  videos:                   hasMany('asset', {async: false, inverse: 'videos'}),
  hotel:                    belongsTo('hotel', {async: false})
});
