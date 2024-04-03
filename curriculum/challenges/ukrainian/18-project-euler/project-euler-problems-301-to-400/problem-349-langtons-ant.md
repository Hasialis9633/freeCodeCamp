---
id: 5900f4ca1000cf542c50ffdc
title: 'Завдання 349: мураха Ленґтона'
challengeType: 1
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

Мураха рухається по звичайній сітці квадратів, забарвлених у чорний або білий колір.

Мураха завжди орієнтується на один з основних напрямів (вліво, вправо, вгору або вниз) і рухається від квадрата до сусіднього квадрата за такими правилами:

- якщо вона знаходиться на чорному квадраті, то перегортає квадрат на білу сторону, повертається на 90° проти годинникової стрілки і рухається вперед на один квадрат.
- якщо вона знаходиться на білому квадраті, то перегортає квадрат на чорну сторону, повертається на 90° за годинниковою стрілкою і рухається вперед на один квадрат.

Скільки квадратів будуть чорними після ${10}^{18}$ ходів мурахи, якщо розпочати з повністю білої сітки?

# --hints--

`langtonsAnt()` має повернути `115384615384614940`.

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function langtonsAnt() {

  return true;
}

langtonsAnt();
```

# --solutions--

```js
// solution required
```