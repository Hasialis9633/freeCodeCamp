---
id: 5900f42b1000cf542c50ff3e
title: 'Problema N° 191: Cadenas de premios'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.

Durante el día se forma una cadena trinaria (Trinary string) para cada niño que consiste en L's (Llegada tarde), O's (A tiempo), y A's (No asistió).

Aunque hay 83 cadenas trinarias posibles durante 4 días, exactamente 43 cadenas llevarían a un premio:

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

¿Cuántas cadenas o strings de "premios" existen durante un período de 30 días?

# --hints--

`prizeStrings()` debería devolver `1918080160`.

```js
assert.strictEqual(prizeStrings(), 1918080160);
```

# --seed--

## --seed-contents--

```js
function prizeStrings() {

  return true;
}

prizeStrings();
```

# --solutions--

```js
// solution required
```
