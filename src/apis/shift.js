export default function (scope) {
  let first;

  for (const key in scope) {
    first = { [key]: scope[key] };

    delete scope[key];
    break;
  }

  return first;
}
