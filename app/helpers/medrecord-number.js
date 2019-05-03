import { helper } from '@ember/component/helper';

export function medrecordNumber([patient]) {
  let card = '';

  patient.identifier.some(function(id) {
    if (typeof id.type !== 'undefined') {
      if (id.type.coding[0].code === 'MR') {
        card = id.value;
        return true;
      }
    }
    return false;
  });

  return `${card}`;
}

export default helper(medrecordNumber);
