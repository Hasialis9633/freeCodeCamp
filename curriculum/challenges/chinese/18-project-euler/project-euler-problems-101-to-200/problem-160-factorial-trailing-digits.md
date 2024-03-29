---
id: 5900f40d1000cf542c50ff1f
title: '问题 160：因子尾随数字'
challengeType: 1
forumTopicId: 301794
dashedName: problem-160-factorial-trailing-digits
---

# --description--

For any $N$, let $f(N)$ be the last five digits before the trailing zeroes in $N!$.

例如，

$$\begin{align}   & 9! = 362880 \\; \text{so} \\; f(9) = 36288 \\\\
  & 10! = 3628800 \\; \text{so} \\; f(10) = 36288 \\\\ & 20! = 2432902008176640000 \\; \text{so} \\; f(20) = 17664 \end{align}$$

计算 $f(1,000,000,000,000)$

# --hints--

`factorialTrailingDigits()` 应该返回 `16576`。

```js
assert.strictEqual(factorialTrailingDigits(), 16576);
```

# --seed--

## --seed-contents--

```js
function factorialTrailingDigits() {

  return true;
}

factorialTrailingDigits();
```

# --solutions--

```js
// solution required
```
