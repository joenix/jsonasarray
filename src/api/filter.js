export default function (scope, callback) {
  const set = {};

  for (const [key, value] of Object.entries(scope)) {
    if (callback(value, key, scope) === true) {
      set[key] = value;
    }
  }

  return set;
}