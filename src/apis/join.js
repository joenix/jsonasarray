export default function (scope, separator = ',', mode = 'value') {
  const key = mode === 'value';
  let set = '';

  for (const item of Object.entries(scope)) {
    set += `${separator}${item[+key]}`;
  }

  return set.substring(1);
}
