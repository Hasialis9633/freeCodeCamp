---
id: 597b2b2a2702b44414742771
title: Факторіал
challengeType: 1
forumTopicId: 302263
dashedName: factorial
---

# --description--

Напишіть функцію, яка поверне факторіал числа.

Факторіал числа задано виразом:

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

Наприклад:

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**Примітка:** `0! = 1`

# --hints--

`factorial` має бути функцією.

```js
assert(typeof factorial === 'function');
```

`factorial(2)` має повернути число.

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` має повернути `6`.

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` має повернути `120`.

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` має повернути `3,628,800`.

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --seed-contents--

```js
function factorial(n) {

}
```

# --solutions--

```js
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
}
```
