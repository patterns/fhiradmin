import DS from 'ember-data';

export default DS.Model.extend({
  resourceType: DS.attr(),
  count: DS.attr(),
  last: DS.attr()
});
