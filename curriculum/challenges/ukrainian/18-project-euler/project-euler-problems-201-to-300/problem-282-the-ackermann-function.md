---
id: 5900f4861000cf542c50ff99
title: 'Завдання 282: функція Акермана'
challengeType: 1
forumTopicId: 301933
dashedName: problem-282-the-ackermann-function
---

# --description--

Для невід’ємних цілих чисел $m$ та $n$, функція Акермана $A(m, n)$ визначається таким чином:

$$A(m, n) = \begin{cases} n + 1                 & \text{якщо $m = 0$}             \\\\
A(m - 1, 1)           & \text{якщо $m > 0$ та $n = 0$} \\\\ A(m - 1, A(m, n - 1)) & \text{якщо $m > 0$ та $n > 0$} \end{cases}$$

Наприклад, $A(1, 0) = 2$, $A(2, 2) = 7$ та $A(3, 4) = 125$.

Знайдіть $\displaystyle\sum_{n = 0}^6 A(n, n)$ та надайте відповідь за модулем ${14}^8$.

# --hints--

`ackermanFunction()` має повернути `1098988351`.

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

# --seed--

## --seed-contents--

```js
function ackermanFunction() {

  return true;
}

ackermanFunction();
```

# --solutions--

```js
// solution required
```
