import { helper } from '@ember/component/helper';

export function formatSsn([patient]) {
  let card = '';

  patient.identifier.some(function(id) {
    if (typeof id.type !== 'undefined') {
      if (id.type.coding[0].code === 'SB') {
        // only right most 4 digits
        card = id.value.slice(-4);
        return true;
      }
    }
    return false;
  });

  return `***-**-${card}`;
}

export default helper(formatSsn);
