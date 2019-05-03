import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    zoom(eid) {
      this.get('router').transitionTo('encounters.encounter', eid);
    }
  }
});
