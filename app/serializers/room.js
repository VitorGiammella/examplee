import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    rates: {embedded: 'always'},
    contents: {embedded: 'always'},
    cancellationPolicy: {embedded: 'always'},
    links: {embedded: 'always'}
  },

  extractId(modelClass, resourceHash) {
    return resourceHash.rates[0].rateToken;
  }
});
