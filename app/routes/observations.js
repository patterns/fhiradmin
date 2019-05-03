import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    sort: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('observation', {
      page: {size: params.limit, number: params.offset},
      sort: params.sort
      }).then((results) => {
      return {
        observations: results,
        meta: results.get('links')
      };
    });
  },
  setupController(controller, {observations, meta}) {
    this._super(controller, observations);
    controller.set('meta', meta);
  }
});
