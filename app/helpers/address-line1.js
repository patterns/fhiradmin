import { helper } from '@ember/component/helper';

export function addressLine1([patient]) {
  let line1 = 'Default';
  let city = '';
  let state = '';
  let zip = '';

  patient.address.some(function(ad) {
    if (typeof ad.line !== 'undefined') {
      line1 = ad.line[0];
      city = ad.city;
      if (typeof ad.state !== 'undefined') {
        state = ad.state;
      }
      if (typeof ad.postalCode !== 'undefined') {
        zip = ad.postalCode;
      }
      return true;
    }
    return false;
  });

  return `${line1}, ${city}, ${state} ${zip}`;
}

export default helper(addressLine1);
