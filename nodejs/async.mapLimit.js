/**
 * 并发请求限制实践
 * mapLimit (coll, limit, iteratee, callback)
 *
 *  coll        迭代的集合
 *  limit       一次异步操作的最大数量
 *  iteratee    对于 coll 中的每一个item，迭代执行该异步函数。用(item, callback)调用，callback可选
 *  callback    所有iteratee 函数完成后或发生错误时触发的回调函数。用(err, results)调用。results可以是iteratee 函数完成后触发callback时传递的项。
 *
 *  详细请参考：  https://caolan.github.io/async/v3/mapLimit.js.html
 *
 */
const async      = require("async");
let currentCount = 0,
    urls         = [];

for (let i = 0; i < 10; i++) {
    urls.push('http://www.example.com/' + i + ".html");
}

async.mapLimit(urls, 5, function (url, callback) {
    let delay = parseInt(500);
    currentCount++;
    console.log("currentCount is :" + currentCount + ",current url is :" + url + ",use time is :" + delay + " mm");

    // 设置定时，好看效果
    setTimeout(function () {
        currentCount--;
        callback(null, url + ' html content ');
    }, delay);

}, function (err, result) {
    console.log("result:");
    console.log(result);
});
