import count from './count';

export default function (scope, json) {
  return Object.assign(scope, json), count(scope);
}
