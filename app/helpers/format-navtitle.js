import { helper } from '@ember/component/helper';

export function formatNavtitle([dottedpath]) {
  let title = 'tables';
  let arr = dottedpath.split('.');
  if (arr.length == 1) {
    title = dottedpath;
  } else {
    // Nested path, assume nav UI is "tables"
    title = arr[0];
  }
  return `${title}`;
}

export default helper(formatNavtitle);
