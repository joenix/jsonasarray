import { noop } from '../preset';

export default function (scope, callback = noop) {
  for (const [key, value] of Object.entries(scope)) {
    callback(value, key, scope);
  }
}
