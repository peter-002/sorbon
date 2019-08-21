/**
 * 代理：新建一个类调用老类的接口，（包裹一层）
 * */

let Person = function () {

};

Person.prototype.sayName = function () {
    console.log("I'm Peter, U Name ?");
};

Person.prototype.sayAge = function () {
    console.log("I'm 19, How old are u ?");
};

let Proxy = function () {
    this.person     = new Person();
    this.callMethod = function (action) {
        return this.person[action]();
    }
};

let obj = new Proxy();

obj.callMethod("sayName");
obj.callMethod("sayAge");
