import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    name: {embedded: 'always'},
    location: {embedded: 'always'},
    rooms: {embedded: 'always'},
    contents: {embedded: 'always'},
    links: {embedded: 'always'}
  }
});
