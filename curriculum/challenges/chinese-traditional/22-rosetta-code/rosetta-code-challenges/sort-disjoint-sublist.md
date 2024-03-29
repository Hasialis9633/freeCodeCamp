---
id: 5a23c84252665b21eecc8000
title: 排序不相交的子列表
challengeType: 1
forumTopicId: 302307
dashedName: sort-disjoint-sublist
---

# --description--

Given a list of values and a set of integer indices into that value list, the task is to sort the values at the given indices, but preserving the values at indices outside the set of those to be sorted.

使您的函數使用以下值列表和索引集：

<code>values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>

```js
indices(0-based): {6, 1, 7}
```

正確的結果是：

<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.

# --hints--

`sortDisjoint` 應該是一個函數。

```js
assert(typeof sortDisjoint == 'function');
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` 應該返回一個數組。

```js
assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` 應該返回 `[7, 0, 5, 4, 3, 2, 1, 6]`。

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [
  7,
  0,
  5,
  4,
  3,
  2,
  1,
  6
]);
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])` 應該返回 `[7, 1, 2, 4, 3, 5, 6, 0]`。

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [
  7,
  1,
  2,
  4,
  3,
  5,
  6,
  0
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])` 應該返回 `[8, 1, 6, 5, 4, 3, 2, 7]`。

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [
  8,
  1,
  6,
  5,
  4,
  3,
  2,
  7
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])` 應該返回 `[8, 2, 6, 3, 4, 5, 7, 1]`。

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [
  8,
  2,
  6,
  3,
  4,
  5,
  7,
  1
]);
```

`sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])` 應該返回 `[6, 1, 7, 1, 3, 5, 6]`。

```js
assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [
  6,
  1,
  7,
  1,
  3,
  5,
  6
]);
```

# --seed--

## --seed-contents--

```js
function sortDisjoint(values, indices) {

}
```

# --solutions--

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```
