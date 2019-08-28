const {
          log
      }   = require('./helper'),
      exp = require('./exports');

// exports
log(exp.name);  // > peter

/**
 * exports 和 module.exports 的区别？
 *
 * 1. module.exports 初始值为一个空对象 {}
 * 2. exports 是指向的 module.exports 的引用
 * 3. require() 返回的是 module.exports 而不是 exports
 *
 *
 * 使用场景：
 *
 * 1. 对于要导出的属性，可以简单直接挂到exports对象上
 * 2. 对于类，为了直接使导出的内容作为类的构造器可以让调用者使用new操作符创建实例对象，应该把构造函数挂到module.exports对象上，不要和导出属性值混在一起
 *
 * */


      // js 小例子
var a = {name: 1};
var b = a;

console.log(a);             // { name: 1 }
console.log(b);             // { name: 1 }

b.name = 2;
console.log(a);             // { name: 2 }
console.log(b);             // { name: 2 }

var b = {name: 3};
console.log(a);             // {name: 2 }
console.log(b);             // {name: 2 }

/**
 * a 是一个对象，b 是对 a 的引用，即 a 和 b 指向同一块内存，所以前两个输出一样。
 * 当对 b 作修改时，即 a 和 b 指向同一块内存地址的内容发生了改变，所以 a 也会体现出来，所以第三四个输出一样。
 * 当 b 被覆盖时，b 指向了一块新的内存，a 还是指向原来的内存，所以最后两个输出不一样。
 *
 * 出处：https://cnodejs.org/topic/5231a630101e574521e45ef8
 * */