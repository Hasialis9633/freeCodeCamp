---
id: 5900f4d21000cf542c50ffe5
title: 'Завдання 358: циклічні числа'
challengeType: 1
forumTopicId: 302018
dashedName: problem-358-cyclic-numbers
---

# --description--

Циклічне число з $n$ цифр має цікаву властивість:

Якщо його помножити на 1, 2, 3, 4, ... $n$, то всі добутки складатимуться з однакових цифр в однаковому порядку, але будуть переміщатись по колу!

Найменше циклічне число — це шестизначне число 142857:

$$\begin{align}   & 142857 × 1 = 142857 \\\\
  & 142857 × 2 = 285714 \\\\   & 142857 × 3 = 428571 \\\\
  & 142857 × 4 = 571428 \\\\   & 142857 × 5 = 714285 \\\\
  & 142857 × 6 = 857142 \end{align}$$

Наступне циклічне число 0588235294117647 з 16 цифр:

$$\begin{align}   & 0588235294117647 × 1 = 0588235294117647 \\\\
  & 0588235294117647 × 2 = 1176470588235294 \\\\   & 0588235294117647 × 3 = 1764705882352941 \\\\
  & \ldots \\\\ & 0588235294117647 × 16 = 9411764705882352 \end{align}$$

Зауважте, що для циклічних чисел важливі нулі на початку.

Існує лише одне циклічне число, одинадцятьма крайніми лівими цифрами якого є 00000000137 та п’ятьма крайніми правими цифрами є 56789 (тобто воно має вигляд $00000000137\ldots56789$ з невідомою кількістю цифр всередині). Знайдіть суму всіх його цифр.

# --hints--

`cyclicNumbers()` має повернути `3284144505`.

```js
assert.strictEqual(cyclicNumbers(), 3284144505);
```

# --seed--

## --seed-contents--

```js
function cyclicNumbers() {

  return true;
}

cyclicNumbers();
```

# --solutions--

```js
// solution required
```
