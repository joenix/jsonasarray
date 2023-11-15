export default function (scope) {
  let sign;
  let last;

  for (const key in scope) {
    sign = key;
  }

  last = { [sign]: scope[sign] };
  delete scope[sign];

  return last;
}
