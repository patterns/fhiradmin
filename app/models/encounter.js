import DS from 'ember-data';

export default DS.Model.extend({
  class: DS.attr(),
  extension: DS.attr(),
  meta: DS.attr(),
  period: DS.attr(),
  serviceProvider: DS.attr(),
  status: DS.attr(),
  resourceType: DS.attr(),
  subject: DS.attr(),
  type: DS.attr()
});
