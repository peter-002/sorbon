const async = require("async");

/**
 * 公共函数库
 */

/**
 * 打印调试
 *
 * @type {Function}
 */
const log = async.apply(console.log, ">");

module.exports = {
    log
};
