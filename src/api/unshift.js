import { count } from './index';

export default function (scope, json) {
  const group = Object.entries(scope);
  group.unshift(...Object.entries(json));

  for (const key in scope) {
    delete scope[key];
  }

  for (const [key, value] of group) {
    scope[key] = value;
  }

  return count(scope);
}
