import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { and, not } from '@ember/object/computed';

export default Component.extend({
  router: service(),

  actions: {
    pageSelf() {
      this.get('router').transitionTo({queryParams: {offset: this.pself, limit: this.plimit, sort: this.psort}});
    },
    pagePrev() {
      this.get('router').transitionTo({queryParams: {offset: this.pprev, limit: this.plimit, sort: this.psort}});
    },
    pageNext() {
      this.get('router').transitionTo({queryParams: {offset: this.pnext, limit: this.plimit, sort: this.psort}});
    },
    pageFirst() {
      this.get('router').transitionTo({queryParams: {offset: this.pfirst, limit: this.plimit, sort: this.psort}});
    },
    pageLast() {
      this.get('router').transitionTo({queryParams: {offset: this.plast, limit: this.plimit, sort: this.psort}});
    }
  },
  pfirst: computed('links.first', function() {
    return extractPairsValue(this.get('links').first, /page\[number\]/);
  }),
  plast: computed('links.last', function() {
    return extractPairsValue(this.get('links').last, /page\[number\]/);
  }),
  pprev: computed('links.prev', function() {
    return extractPairsValue(this.get('links').prev, /page\[number\]/);
  }),
  pnext: computed('links.next', function() {
    return extractPairsValue(this.get('links').next, /page\[number\]/);
  }),
  pself: computed('links.self', function() {
    return extractPairsValue(this.get('links').self, /page\[number\]/);
  }),
  plimit: computed('links.self', function() {
    return extractPairsValue(this.get('links').self, /page\[size\]=/);
  }),
  psort: computed('links.self', function() {
    return extractPairsValue(this.get('links').self, /sort=/);
  }),
  disablePrev: computed('links', function() {
    return this.pself == 1;
  }),
  disableNext: computed('links', function() {
    return this.pself >= this.plast;
  }),
  disableFirst: computed('links', function() {
    return this.pself == 1;
  }),
  disableLast: computed('links', function() {
    return this.pself >= this.plast;
  }),
  validPrev: computed('links', function() {
    return this.pprev > this.pfirst;
  }),
  validNext: computed('links', function() {
    return this.pnext < this.plast;
  }),
  bothDisableValidPrev: and('validPrev', 'disablePrev'),
  enablePrev: not('disablePrev'),
  bothDisableValidNext: and('validNext', 'disableNext'),
  enableNext: not('disableNext')
});

function extractPairsValue(url, re) {
  let parser = document.createElement('a');
  parser.href = url;
  let query = parser.search.substring(1);
  let pairs = query.split('&');
  let found;
  pairs.some(function(element){
    if (re.test(element)) {
      let kv = element.split('=');
      found = kv[1];
      return true;
    }
    return false;
  });

  return found;
}
