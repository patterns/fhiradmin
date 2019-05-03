import { helper } from '@ember/component/helper';

export function phonePreference([patient]) {
  let phone = 'Default';

  patient.telecom.some(function(tele) {
    if (tele.system === 'phone') {
      phone = tele.value;
      return true;
    }
    return false;
  });

  return `${phone}`;
}

export default helper(phonePreference);
