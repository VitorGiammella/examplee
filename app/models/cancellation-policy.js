import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  start:                    attr('string'),
  end:                      attr('string'),
  amount:                   attr('number'),
  percentageOfTotal:        attr('number'),
  nonRefundable:            attr('boolean'),
  room:                     belongsTo('room', {async: false})
});
