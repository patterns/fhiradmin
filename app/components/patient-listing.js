import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  actions: {
    zoom(pid) {
      this.get('router').transitionTo('patients.patient', pid);
    }
  }
});
