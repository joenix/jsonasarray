export default function (scope, json) {
  return Object.assign(scope, json), scope.count;
}
