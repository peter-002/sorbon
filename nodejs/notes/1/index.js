const {
          log
      }      = require('./core');
const helper = require('./core');

// 调用query函数 会返回一个 (num1, num2)的函数

let calculate = helper.query('max');

log(calculate(19, 20));                 // > 20
