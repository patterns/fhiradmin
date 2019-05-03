import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { pluralize } from 'ember-inflector';

export default Component.extend({
  router: service(),

  actions: {
    zoom(rtype) {
      // The show-btn click action, to zoom the resource-type.
      let dest = pluralize(rtype);
      this.get('router').transitionTo(dest);
    },
  },
});
