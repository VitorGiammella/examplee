import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  parity:                   attr('number'),
  min:                      attr('object'),
  max:                      attr('object'),
  rate:                     belongsTo('rate', {async: false})
});
