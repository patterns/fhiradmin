import { helper } from '@ember/component/helper';

export function passportNumber([patient]) {
  let card = '';

  patient.identifier.some(function(id) {
    if (typeof id.type !== 'undefined') {
      if (id.type.coding[0].code === 'PPN') {
        card = id.value;
        return true;
      }
    }
    return false;
  });

  return `${card}`;
}

export default helper(passportNumber);
