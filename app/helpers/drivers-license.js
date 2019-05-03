import { helper } from '@ember/component/helper';

export function driversLicense([patient]) {
  let card = '';

  patient.identifier.some(function(id) {
    if (typeof id.type !== 'undefined') {
      ////if (id.system === 'urn:oid:2.16.840.1.113883.4.3.25') {
      if (id.type.coding[0].code === 'DL') {
        card = id.value;
        return true;
      }
    }
    return false;
  });

  return `${card}`;
}

export default helper(driversLicense);
