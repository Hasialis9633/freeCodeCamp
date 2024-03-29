---
id: 5900f4051000cf542c50ff18
title: '問題 153：研究高斯整數'
challengeType: 1
forumTopicId: 301784
dashedName: problem-153-investigating-gaussian-integers
---

# --description--

As we all know the equation $x^2 = -1$ has no solutions for real $x$.

然而，如果我們引入虛數 $i$，則該等式具有兩個解： $x = i$ 與 $x = -i$。

如果我們更進一步，方程式 ${(x - 3)}^2 = -4$ 有兩個複數解： $x = 3 + 2i$ 和 $x = 3 - 2i$， 被稱爲共軛複數。

形式 $a + bi$ 的數字稱爲複數。

通常 $a + bi$ 與 $a − bi$ 爲共軛複數。 高斯整數是指複數 $a + bi$，$a$ 與 $b$ 都是整數。

常規整數也是高斯整數（$b = 0$）。

爲了將它們與 $b ≠ 0$ 的高斯整數區分開來，我們稱這樣的整數爲“有理整數”。

一個高斯整數可以作爲有理整數 $n$ 的約數，如果得到的餘數也是一個高斯整數。

例如，如果我們將 5 除以 $1 + 2i$，我們可以通過以下方式進行簡化：

將分子和分母乘以 $1 + 2i$ 的複共軛：$1 − 2i$。

結果是：

$$\frac{5}{1 + 2i} = \frac{5}{1 + 2i} \frac{1 - 2i}{1 - 2i} = \frac{5(1 - 2i)}{1 - {(2i)}^2} = \frac{5(1 - 2i)}{1 - (-4)} = \frac{5(1 - 2i)}{5} = 1 - 2i$$

所以 $1 + 2i$ 是 5 的約數.

請注意，$1 + i$ 不是 5 的除數，因爲：

$$\frac{5}{1 + i} = \frac{5}{2} - \frac{5}{2}i$$

注意，如果高斯整數（$a + bi$）是有理整數 $n$ 的約數，則其共軛複數（$a − bi$）也是 $n$ 的因子。 事實上，5 有六個因數，使得實部爲正數：{1, 1 + 2i, 1 − 2i, 2 + i, 2 − i, 5}。

以下是前五個正整數的所有約數表：

| n | 實數部分爲正的高斯整數約數表                        | 這些除數的總和 s(n) |
| - | ------------------------------------- | ------------ |
| 1 | 1                                     | 1            |
| 2 | 1, 1 + i, 1 - i, 2                    | 5            |
| 3 | 1, 3                                  | 4            |
| 4 | 1, 1 + i, 1 - i, 2, 2 + 2i, 2 - 2i, 4 | 13           |
| 5 | 1, 1 + 2i, 1 - 2i, 2 + i, 2 - i, 5    | 12           |

對於實數部分爲正的約數，我們有：$\displaystyle\sum_{n=1}^5 s(n) = 35$。

對於 $1 ≤ n ≤ {10}^5$, $\displaystyle\sum_{n = 1}^{{10}^5} s(n) = 17924657155$.

求 $\displaystyle\sum_{n=1}^{{10}^8} s(n)$?

# --hints--

`sumGaussianIntegers()` 應得 `17971254122360636`。

```js
assert.strictEqual(sumGaussianIntegers(), 17971254122360636);
```

# --seed--

## --seed-contents--

```js
function sumGaussianIntegers() {

  return true;
}

sumGaussianIntegers();
```

# --solutions--

```js
// solution required
```
