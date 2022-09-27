# 你必须知道的JS柯里化
### 前言
我们在各种算法题以及技术文档中经常会看到柯里化这个词，那么，柯里化到底是什么？它在js中如何运用？对我们的编程有什么作用？都9102年了，如果你还不知道这些，那么你在面试过程中很可能会被面试官diss🙄

---
### 什么是柯里化（Currying）
*维基百科*的[解释](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)是：把接收多个参数的函数变换成接收一个单一参数（最初函数的第一个参数）的函数，并返回接受剩余的参数而且返回结果的新函数的技术。其由数学家Haskell Brooks Curry提出，并以curry命名。

简单的说，柯里化函数持续地返回一个新函数直到所有的参数用尽为止。这些参数全部保持“活着”的状态（通过闭包），然后当柯里化链中的最后一个函数被返回和执行时会全部被用来执行。

这和[高阶组件](https://react.docschina.org/docs/higher-order-components.html)（Higher-order functions）如出一辙。前者返回一个新函数，后者返回一个新组件。

### 举个简单的栗子
本例使用到的部分ES6知识：[const](http://es6.ruanyifeng.com/#docs/let)，[arrow function](http://es6.ruanyifeng.com/#docs/function)。不了解的同学可先行查看。
写一个计算三个参数相乘的函数：
```
function multiply (a, b, c) {
  return a * b * c
}
multiply(1, 2, 3) // 6
```
这是我们第一反应写出来的demo，也是看起来最简单的实现方法。再来创建一个柯里化版本的函数：
```
function multiply (a) {
  return (b) => {
    return (c) => {
      return a * b * c
    }
  }
}
multiply(1)(2)(3) // 6
```
这里我们将multiply(1，2，3)调用变成了multiply (1) (2) (3) 调用。
单独一个函数被转换成了一系列函数。为了得到数字1、2、3相乘的结果，这些数字被一个接一个地传递，每个数字预填了下一个函数内联调用。

我们把multiply (1) (2) (3) 分割一下来帮助理解：
```
const mul1 = multiply(1)
const mul2 = mul1(2)
const result = mul2(3)
console.log(result) // 6
```
当mul2使用3作为参数调用时，它一起使用了之前已拿到的参数a=1和b=2进行运算并返回结果6。

作为一个嵌套函数，mul2能够访问到外部的两个函数multiply和mul1的作用域。这就是为什么mul2能利用定义在已经‘离场’的函数中的参数来进行乘法操作的原因。即使这些函数早已返回并且从内存中垃圾回收了，但其变量仍然保持‘活着’([闭包](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143449934543461c9d5dfeeb848f5b72bd012e1113d15000))。你可以看到3个数字每次只有1个提供给函数，并且同一时间里一个新函数会被返回，直到所有的数字用尽为止。

**柯里化背后的逻辑就是获取一个函数并派生出一个返回特殊函数的函数**，它实际上是一种思想，或者说是一种程序设计模式。

### 柯里化的应用
#### 1. 编写可以轻松复用和配置的小代码块，就像我们使用npm一样：
举个例子，你有一家商店，然后你想给你的优惠顾客10%的折扣：
```
function discount (price, discount) {
  return price * discount
}
// 当一个顾客消费了500元
const price = discount(500, 0.1) // $50

// 从长远看，你的每一笔生意都要计算10%的折扣
const price = discount(1500, 0.1) // $150
const price = discount(2000, 0.1) // $200
const price = discount(50, 0.1) // $5
const price = discount(300, 0.1) // $30

// 将这个函数柯里化，然后我们就不用每次都写那0.1了
function discount (discount) {
  return (price) => {
    return price * discount
  }
}
const tenPercentDiscount = discount(0.1)

// 现在，我们只需用商品价格来计算就可以了：
tenPercentDiscount(500) // $50

// 接下来，有些优惠顾客越来越重要，让我们称为vip顾客，然后我们要给20%的折扣，我们这样来使用柯里化了的discount函数：
const twentyPercentDiscount = discount(0.2)

// 我们为vip顾客使用0.2调用柯里化discount函数来配置了一个新的函数。这个twentyPercentDiscount函数会被用来计算vip顾客的折扣：
twentyPercentDiscount(500) // $100
twentyPercentDiscount(3000) // $600
twentyPercentDiscount(80000) // $16000
```
这个例子说明，使用柯里化思想能让我们在遇到只能确定一个参数而无法确定另一个参数时，代码设计编的变得更方便与高效，达到提升性能的目的。
应对复杂问题时能提升效率，增强可读性。希望读者都能体会这种思想并运用于实践，相信在提升技术的路上能越走越远，成为一名优秀的工程师！