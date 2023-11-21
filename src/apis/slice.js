import { count } from './index';

export default function (scope, start = 0, step = count(scope) - start) {
  let index = -1;
  let set = {};

  for (const [key, value] of Object.entries(scope)) {
    index++;

    if (index < start) {
      continue;
    }

    if (index >= start + step) {
      break;
    }

    set[key] = value;
  }

  return set;
}
