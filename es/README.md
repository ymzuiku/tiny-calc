# Tiny Calc - fix JS decimals

Code from: https://blog.csdn.net/wkyseo/article/details/77447842

only 350b (gzip) size, support Typescript

## Feature

In Javascript:

```js
const a = 3.1 + 2.000001;
console.log(a); // 5.100001000000001
```

Use tiny-calc

```js
const a = calc.add(3.1, 2.000001);
console.log(a); // 5.100001
```

## API

```js
import calc from 'tiny-calc';

// add
const a = calc.add(10000000001.11, 2.22);
console.log(a); // 10000000003.33

// subtraction
const b = calc.sub(3.110030001, 2.11001);
console.log(b); // 1.000020001

// multiplication
const c = calc.mul(3.110030001, 2.11001);
console.log(c); // 1.000020001

// division
const d = calc.div(4.4222222224, 2);
console.log(d); // 2.2111111112
```

## Unit Test:

```js
(() => {
  const a = 3.1 + 2.000001;
  console.log(a); // 5.100001000000001
})();

// add test
(() => {
  const a = calc.add(1, 2);
  console.log(a);
  assert(a === 3);
})();

(() => {
  const a = calc.add(100000000, 2);
  console.log(a);
  assert(a === 100000002);
})();

(() => {
  const a = calc.add(1, 2.000001);
  console.log(a);
  assert(a === 3.000001);
})();

(() => {
  const a = calc.add(1.110000001, 2.110001);
  console.log(a);
  assert(a === 3.220001001);
})();

(() => {
  const a = calc.add(10000000001.11, 2.22);
  console.log(a);
  assert(a === 10000000003.33);
})();

// sub test
(() => {
  const a = calc.sub(5, 2);
  console.log(a);
  assert(a === 3);
})();

(() => {
  const a = calc.sub(100000004, 2);
  console.log(a);
  assert(a === 100000002);
})();

(() => {
  const a = calc.sub(3, 2.000001);
  console.log(a);
  assert(a === 0.999999);
})();

(() => {
  const a = calc.sub(0, 0.000001);
  console.log(a);
  assert(a === -0.000001);
})();

(() => {
  const a = calc.sub(1.110000001, 2.110000001);
  console.log(a);
  assert(a === -1);
})();

(() => {
  const a = calc.sub(3.110030001, 2.11001);
  console.log(a);
  assert(a === 1.000020001);
})();

(() => {
  const a = calc.sub(10000000004.33, 2.22);
  console.log(a);
  assert(a === 10000000002.11);
})();

// mul test
(() => {
  const a = calc.mul(5, 2);
  console.log(a);
  assert(a === 10);
})();

(() => {
  const a = calc.mul(100000004, 2);
  console.log(a);
  assert(a === 200000008);
})();

(() => {
  const a = calc.mul(4.400000004, 2);
  console.log(a);
  assert(a === 8.800000008);
})();

(() => {
  const a = calc.mul(666666666.666, 1);
  console.log(a);
  assert(a === 666666666.666);
})();

(() => {
  const a = calc.mul(666666666.666, 0);
  console.log(a);
  assert(a === 0);
})();

(() => {
  const a = calc.mul(666.6660001, 4);
  console.log(a);
  assert(a === 2666.6640004);
})();

(() => {
  const a = calc.mul(666.666, 2.2);
  console.log(a);
  assert(a === 1466.6652);
})();

// div test
(() => {
  const a = calc.div(5, 2);
  console.log(a);
  assert(a === 2.5);
})();

(() => {
  const a = calc.div(50000000.1, 1);
  console.log(a);
  assert(a === 50000000.1);
})();

(() => {
  const a = calc.div(1123.10000001, 1);
  console.log(a);
  assert(a === 1123.10000001);
})();

(() => {
  const a = calc.div(400000002, 2);
  console.log(a);
  assert(a === 200000001);
})();

(() => {
  const a = calc.div(4.4222222224, 2);
  console.log(a);
  assert(a === 2.2111111112);
})();

(() => {
  const a = calc.div(666666666.666, -3);
  console.log(a);
  assert(a === -222222222.222);
})();

(() => {
  const a = calc.div(666666666.666, -2.2);
  console.log(a);
  assert(a === -303030303.03);
})();
```
