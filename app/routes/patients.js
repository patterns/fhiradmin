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
    return this.store.query('patient', {
      page: {size: params.limit, number: params.offset},
      sort: params.sort
      }).then((results) => {
      return {
        patients: results,
        meta: results.get('links')
      };
    });
  },
  setupController(controller, {patients, meta}) {
    this._super(controller, patients);
    controller.set('meta', meta);
  }

});
