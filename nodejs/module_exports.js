const async = require('async');

/**
 * 模块导出 module.exports
 *
 * @type {Function}
 */

let log = async.apply(console.log, '>');

// 第一方式
module.exports = {
    log
};

// 第二种方式
module.exports.log = log;
