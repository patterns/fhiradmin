import { helper } from '@ember/component/helper';

export function languagePreference([patient]) {
  let lang = 'Default';

  patient.communication.some(function(comm) {
    if (typeof comm.language !== 'undefined') {
      lang = comm.language.text;
      return true;
    }
    return false;
  });

  return `${lang}`;
}

export default helper(languagePreference);
