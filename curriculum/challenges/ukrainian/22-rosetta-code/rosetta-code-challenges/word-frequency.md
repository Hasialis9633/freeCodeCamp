---
id: 5e94a54cc7b022105bf0fd2c
title: Частота слів
challengeType: 1
forumTopicId: 393913
dashedName: word-frequency
---

# --description--

Дано текстовий рядок та ціле число n. Поверніть n слів, які найчастіше зустрічаються у файлі (та кількість повторень) в порядку спадання.

# --instructions--

Напишіть функцію, щоб порахувати кількість повторень кожного слова та повернути n найповторюваніших слів разом із кількістю їх повторень в порядку спадання.

Функція має повернути 2D-масив, де кожен елемент має такий вигляд: `[слово, кількість повторень]`. `слово` має бути словом в нижньому регістрі, а `кількість повторень` має бути числом.

Функція має повернути порожній масив, якщо рядок не надано.

Функція має бути нечутливою до регістру. Наприклад, між рядками "Hello" та "hello" немає різниці.

Слова, які містять спеціальні символи (підкреслення, тире, апострофи, коми), потрібно вважати різними.

Наприклад, якщо дано рядок "Hello hello goodbye", то функція має повернути `[['hello', 2], ['goodbye', 1]]`.

# --hints--

`wordFrequency` має бути функцією.

```js
assert(typeof wordFrequency == 'function');
```

`wordFrequency` має повернути масив.

```js
assert(Array.isArray(wordFrequency('test')));
```

`wordFrequency("Hello hello world", 2)` має повернути `[['hello', 2], ['world', 1]]`

```js
assert.deepEqual(wordFrequency(example_1, 2), example_1_solution);
```

`wordFrequency("The quick brown fox jumped over the lazy dog", 1)` має повернути `[['the', 2]]`

```js
assert.deepEqual(wordFrequency(example_2, 1), example_2_solution);
```

`wordFrequency("Opensource opensource open-source open source", 1)` має повернути `[['opensource', 2]]`

```js
assert.deepEqual(wordFrequency(example_3, 1), example_3_solution);
```

`wordFrequency("Apple App apply aPP aPPlE", 3)` має повернути `[['app', 2], ['apple', 2], ['apply', 1]]` або `[['apple', 2], ['app', 2], ['apply', 1]]`

```js
const arr = JSON.stringify(wordFrequency(example_4, 3));
assert(arr === example_4_solution_a || arr === example_4_solution_b);
```

`wordFrequency("c d a d c a b d d c", 4)` має повернути `[['d', 4], ['c', 3], ['a', 2], ['b', 1]]`

```js
assert.deepEqual(wordFrequency(example_5, 4), example_5_solution);
```

`wordFrequency("", 5)` має повернути `[]`

```js
assert.deepEqual(wordFrequency(example_6, 5), example_6_solution);
```

# --seed--

## --before-user-code--

```js
var example_1 = 'Hello hello world';
var example_1_solution = [['hello', 2], ['world', 1]];
var example_2 = 'The quick brown fox jumped over the lazy dog';
var example_2_solution = [['the', 2]];
var example_3 = 'Opensource opensource open-source open source';
var example_3_solution = [['opensource', 2]];
var example_4 = 'Apple App apply aPP aPPlE';
var example_4_solution_a = "[[\"app\",2],[\"apple\",2],[\"apply\",1]]";
var example_4_solution_b = "[[\"apple\",2],[\"app\",2],[\"apply\",1]]";
var example_5 = 'c d a d c a b d d c';
var example_5_solution = [['d', 4], ['c', 3], ['a', 2], ['b', 1]];
var example_6 = '';
var example_6_solution = [];
```

## --seed-contents--

```js
function wordFrequency(txt, n) {

}
```

# --solutions--

```js
function wordFrequency(txt, n) {
  var words = txt.split(/\s+/);
  var wordCount = {};
  words.forEach(word => {
    if (word == '') {
      return;
    }
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] =
      lowerWord in wordCount ? wordCount[lowerWord] + 1 : 1;
  });

  var wordsArray = [];
  for (let [word, count] of Object.entries(wordCount)) {
    wordsArray.push([word, count]);
  }

  wordsArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else if (a[0] !== b[0]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return 0;
  });
  return wordsArray.slice(0, n);
}
```
