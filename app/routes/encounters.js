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
    return this.store.query('encounter', {
      page: {size: params.limit, number: params.offset},
      sort: params.sort
      }).then((results) => {
      return {
        encounters: results,
        meta: results.get('links')
      };
    });
  },
  setupController(controller, {encounters, meta}) {
    this._super(controller, encounters);
    controller.set('meta', meta);
  }

});
