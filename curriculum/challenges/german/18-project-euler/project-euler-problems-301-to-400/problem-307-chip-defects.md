---
id: 5900f4a01000cf542c50ffb2
title: 'Problem 307: Chip-Fehler'
challengeType: 1
forumTopicId: 301961
dashedName: problem-307-chip-defects
---

# --description--

$k$ defects are randomly distributed amongst $n$ integrated-circuit chips produced by a factory (any number of defects may be found on a chip and each defect is independent of the other defects).

Lasse $p(k,n)$ die Wahrscheinlichkeit sein, dass es einen Chip mit mindestens 3 Defekten gibt. For instance $p(3,7) ≈ 0.0204081633$.

Find $p(20\\,000, 1\\,000\\,000)$ and give your answer rounded to 10 decimal places in the form 0.abcdefghij

# --hints--

`chipDefects()` should return `0.7311720251`.

```js
assert.strictEqual(chipDefects(), 0.7311720251);
```

# --seed--

## --seed-contents--

```js
function chipDefects() {

  return true;
}

chipDefects();
```

# --solutions--

```js
// solution required
```
