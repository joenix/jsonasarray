import { count } from './index';

export default function (scope, json) {
  return Object.assign(scope, json), count(scope);
}
