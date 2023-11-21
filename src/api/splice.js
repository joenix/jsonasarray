import { count } from './index';

export default function (scope, start = 0, step = count(scope) - start, json) {
  const group = Object.entries(scope);
  const lost = group.splice(start, step, ...Object.entries(json));

  for (const key in scope) {
    delete scope[key];
  }

  for (const [key, value] of group) {
    scope[key] = value;
  }

  return Object.fromEntries(lost);
}
