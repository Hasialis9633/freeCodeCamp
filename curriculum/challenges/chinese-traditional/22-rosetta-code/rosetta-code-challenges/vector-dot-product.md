---
id: 594810f028c0303b75339ad3
title: 矢量點積
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

A vector can have one or more values represented by an ordered collection. Examples could be (x), (x, y), or (x, y, z).

# --instructions--

編寫一個函數，將兩個向量（表示爲一維數組）作爲輸入並計算它們的點積。 您的函數應該在無效輸入上返回 `null`，例如不同長度的向量或傳遞兩個向量以外的任何內容。

# --hints--

`dotProduct` 應該是一個函數。

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` 應該返回 `null`。

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` 應該返回 `1`。

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` 應該返回 `null`。

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` 應該返回 `3`。

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` 應該返回 `null`。

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` 應該返回 `360`。

```js
assert.equal(dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ]), 360);
```

# --seed--

## --seed-contents--

```js
function dotProduct(...vectors) {

}
```

# --solutions--

```js
function dotProduct(...vectors) {
  if (!vectors || !vectors.length || vectors.length > 2 || vectors[0].length !== vectors[1].length) {
    return null;
  }
  const vectorLen = vectors[0].length;

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = 2;
  // Sum terms
  while (j--) {
    i = 2;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
