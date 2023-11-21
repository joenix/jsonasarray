# jsonasarray

🍻 Make Json as smooth as Array

## How to use ?

#### 1. install

```sh
npm install jsonasarray
# or
yarn add jsonasarray
```

#### 2. import

```js
import jsonasarray from 'jsonasarray';
```

> All APIs will be registered in the Object upon importing jsonasarray.

#### 3. define APIs

```js
// define APIs
jsonasarray();

// define alias for APIs
const apis = jsonasarray({ forEach: 'loop' });
```

#### 4. Use

```js
x.forEach((value, key) => console.log(key, value));

// or u can also use the original
apis.loop(x, (value, key) => console.log(key, value));
```

## APIs

```js
// just for testing
const x = { z: 0, a: 11, b: 22, c: 33 };
```

### Innovations

#### 1. count of json

```js
x.count(); // 4
```

#### 2. keys of json

```js
x.keys(); // ['z', 'a', 'b', 'c']
```

#### 3. values of json

```js
x.values(); // [0, 11, 22, 33]
```

### Iterator

#### 1. forEach

```js
x.forEach((value, key) => {
  console.log(key, value);
});
// z: 0, a: 11, b: 22, c: 33
```

#### 2. map

```js
x.map((value, key) => {
  return value + 1;
});
// { z: 1, a: 12, b: 23, c: 34 }
```

#### 3. filter

```js
x.filter((value, key) => {
  return value > 1;
});
// { b: 22, c: 33 }
```

#### 4. some

```js
x.some((value, key) => {
  return value > 0;
});
// true
```

#### 5. every

```js
x.every((value, key) => {
  return value > 0;
});
// false
```

### Operate

#### 1. includes

```js
x.includes(22); // true
```

#### 2. indexOf

```js
x.indexOf(22); // 2
```

#### 3. unshift

```js
x.unshift({ v: 100 }); // 5
// x: { v: 100, z: 0, a: 11, b: 22, c: 33 }
```

#### 4. push

```js
x.push({ v: 100 }); // 5
// x: { z: 0, a: 11, b: 22, c: 33, v: 100 }
```

#### 5. shift

```js
x.shift(); // { z: 0 }
// x: { a: 11, b: 22, c: 33 }
```

#### 6. pop

```js
x.pop(); // { c: 33 }
// x: { z: 0, a: 11, b: 22 }
```

#### 7. slice

```js
x.slice(1, 2); // { a: 11, b: 22 }
// x: { z: 0, a: 11, b: 22, c: 33 }
```

#### 8. splice

```js
x.splice(2, 1, { v: 100, w: 200 }); // { b: 22 }
// x: { z: 0, a: 11, v: 100, w: 200, c: 33 }
```

#### 9. join

```js
x.join(); // '0,11,22,33'
x.join('.', 'key'); // 'z.a.b.c'
```

#### 10. concat

```js
x.concat({ v: 100 }, { w: 200 }); // { z: 0, a: 11, b: 22, c: 33, v: 100, w: 200 }
// x: { z: 0, a: 11, b: 22, c: 33 }
```
