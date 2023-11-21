export default function (scope, value) {
  let index = -1;

  for (const key in scope) {
    index++;

    if (scope[key] === value) {
      return index;
    }
  }

  return index;
}
