/**
 * 一个比较经典的例子
 * */

var toString = Object.prototype.toString;

var isStr = function (obj) {
    return toString.call(obj) == '[object String]';
};

var isFunc = function (obj) {
    return toString.call(obj) == '[object Function]';
};

/**
 * 上面这段代码中的isString和isFunction这两个函数分别用于判断变量的类型是字符串和函数
 * 对于这种函数，如果要添加其他类型的判断，就需要写更多的函数，
 * 但是因为这些函数都有一些共同的特征，所以只需要写一个函数，然后让这个函数返回判断某个类型的函数就可以了
 *
 * 见下面的偏函数，个人理解就是感觉和工厂模式有点像
 */



/**
 * 偏函数
 *
 * 什么是偏函数
 * 假设有一个参数或变量已经预置的函数A，我们通过调用A来产生一个新的函数B，函数B就是我们说的偏函数
 * */

// 判断类型的小demo
var isType = function (type) {
    return function (obj) {
        return toString.call(obj) == '[object ' + type + ']';
    }
};

// 定制新的函数
var isString   = isType('String');
var isArray    = isType('Array');
var isFunction = isType('Function');

// 测试偏函数
console.log(isString('abc'));       // true
console.log(isArray([1, 2]));       // true
console.log(isFunction('abc'));     // false
