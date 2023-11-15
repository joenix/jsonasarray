export default function (scope, callback) {
  for (const [key, value] of Object.entries(scope)) {
    callback(value, key, scope);
  }
}
