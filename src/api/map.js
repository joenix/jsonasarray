export default function (scope, callback) {
  const set = {};

  for (const [key, value] of Object.entries(scope)) {
    set[key] = callback(value, key, scope);
  }

  return set;
}
