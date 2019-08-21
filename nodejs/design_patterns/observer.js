/**
 * 观察者模式 ： 一个观察者，必然就有一个被观察的对象
 * */

let Publisher = function () {
    this.listeners = [];                                                // 订阅者花名册
};

/**
 * 发布者
 *
 * @type {{getListenerList: Publisher.getListenerList, removeListener: Publisher.removeListener, notify: Publisher.notify, addListener: Publisher.addListener}}
 */
Publisher.prototype = {
    'addListener': function (listener) {
        this.listeners.push(listener);
    },

    'getListenerList': function () {
        console.log(this.listeners);
    },

    'removeListener': function (listener) {
        let i   = 0,
            arr = this.listeners;

        arr.map(function (res) {
            if (res.name == listener)
                arr.splice(i, 1);

            i++;
        });
    },

    'notify': function (notify) {
        let listeners,
            data = this.listeners;

        for (let i = 0; i < data.length; i++) {
            listeners = data[i];

            if (typeof listeners !== 'undefined')
                listeners.process(notify);
        }
    }
};

/**
 * 订阅者
 *
 * @param name
 * @constructor
 */
let Subscriber = function (name) {
    this.name = name;
};

Subscriber.prototype = {
    'process': function (data) {
        console.log("I'm " + this.name + " === ", "I Have Received: ", data);
    }
};

let publisherObj = new Publisher();

publisherObj.addListener(new Subscriber("peter"));                      // 添加订阅者 peter
publisherObj.addListener(new Subscriber("xiaoxiao"));                   // 添加订阅者 xiaoxiao

publisherObj.getListenerList();                                         // 获取订阅者列表

console.log("---------------------------------------------");

publisherObj.notify({name: "Jack", info: "Hi, I'm Jack"});       // 广播一个对象消息

console.log("=============================================");

publisherObj.notify("Call the Potato, Receive please reply");   // 广播一个字符串信息

publisherObj.removeListener("peter");                          // 删除peter 这个订阅者

console.log("---------------------------------------------");

publisherObj.getListenerList();