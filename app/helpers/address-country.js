import { helper } from '@ember/component/helper';

export function addressCountry([patient]) {
  let country = 'Default';

  patient.address.some(function(ad) {
    if (typeof ad.line !== 'undefined') {
      country = ad.country;
      return true;
    }
    return false;
  });

  return `${country}`;
}

export default helper(addressCountry);
