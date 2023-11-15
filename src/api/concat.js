export default function (scope) {
  return { ...scope, ...Object.assign({}, ...Array.from(arguments).splice(1)) };
}
