import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    thumbnailImage: {embedded: 'always'},
    images: {embedded: 'always'},
    videos: {embedded: 'always'}
  }
});
