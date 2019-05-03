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
    return this.store.query('change', {
      page: {size: params.limit, number: params.offset},
      sort: params.sort
      }).then((results) => {
      return {
        tables: results,
        meta: results.get('links')
      };
    });
  },
  setupController(controller, {tables, meta}) {
    this._super(controller, tables);
    controller.set('meta', meta);
  }

});
