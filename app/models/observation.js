import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr(),
  code: DS.attr(),
  context: DS.attr(),
  meta: DS.attr(),
  effective: DS.attr(),
  issued: DS.attr(),
  status: DS.attr(),
  resourceType: DS.attr(),
  subject: DS.attr(),
  value: DS.attr()
});
