import { helper } from '@ember/component/helper';

export function officialName([patient]) {
  let family = '';
  let given = '';

  patient.name.some(function(name) {
    if (name.use == "official") {
      family = name.family;
      given = name.given[0];
      return true;
    }
    return false;
  });

  return `${given} ${family}`;
}

export default helper(officialName);
