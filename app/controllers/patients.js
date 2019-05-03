import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['offset', 'limit', 'sort'],
  offset: 1,
  limit: 20,
  sort: "-ts"
});
