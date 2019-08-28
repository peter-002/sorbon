/**
 * #学习笔记测试#
 *
 * 针对没看懂位置：
 *
 * 用过express的人都应该知道中间件这个东西，express用的是Connect的中间件。Connect提供了一套中间件用于Web开发，中间件就是一个函数，这个函数会有三个参数——(req,res,next)，我们看下Express是怎么使用Connect的query中间件的。
 *
 * var connect = require('connect'),
 * query = require('connect/lib/middleware/query');
 * var app = connect();
 * app.use(query({maxKeys: 100}));
 *
 * 调用query函数会返回一个参数为(req,res,next)的函数，app.use就可以使用这个中间件，query函数可以根据传入的参数返回不同的中间件，我们看下query的源代码
 *
 * var qs = require('qs')
 * , parse = require('../utils').parseUrl;
 *
 * module.exports = function query(options){
 * return function query(req, res, next){
 *      if (!req.query) {
 *          req.query = ~req.url.indexOf('?')
 *              ? qs.parse(parse(req).query, options)
 *              : {};
 *      }
 *
 *      next();
 *      };
 * };
 *
 * */

// 实战才是检验真理的唯一标准

const async = require('async');

module.exports.log = async.apply(console.log, '>');

module.exports.query = function (calculate) {
    let result;

    return function (num1, num2) {
        switch (calculate) {
            default:
            case "max":
                result = num1 > num2 ? num1 : num2;
                break;
            case "min":
                result = num1 > num2 ? num2 : num1;
                break;
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }

        return result;
    };
};
