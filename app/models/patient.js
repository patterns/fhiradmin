import DS from 'ember-data';

export default DS.Model.extend({
  address: DS.attr(),
  birthDate: DS.attr(),
  communication: DS.attr(),
  deceased: DS.attr(),
  gender: DS.attr(),
  identifier: DS.attr(),
  maritalStatus: DS.attr(),
  multipleBirth: DS.attr(),
  name: DS.attr(),
  resourceType: DS.attr(),
  telecom: DS.attr(),
  text: DS.attr()
});
