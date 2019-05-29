import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  router: service(),
  isShowingTouchMenu: false,

  actions: {
    toggleTouchMenu() {
      this.toggleProperty('isShowingTouchMenu');
    }
  },
  touchActive: computed('isShowingTouchMenu', function() {
    if (this.isShowingTouchMenu) {
      return 'is-active';
    }
    return '';
  }),
  routeName: computed('router.currentRouteName', function() {
    return this.router.currentRouteName;
  })
});

