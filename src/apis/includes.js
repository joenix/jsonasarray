export default function (scope, value) {
  for (const key in scope) {
    if (scope[key] === value) {
      return true;
    }
  }

  return false;
}
