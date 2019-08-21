/**
 * 工厂：同样的形式返回不同的实例
 * */

let Person  = function () {
    this.name = "I'm Person, U k ?";
},
    Animal  = function () {
        this.name = "Animal, Wang Wang Or Miao Miao ?";
    },
    Factory = function () {

    };

Factory.prototype.getInstance = function (className) {
    return eval("new " + className + "()");
};

let factory    = new Factory(),
    person_obj = factory.getInstance('Person'),
    animal_obj = factory.getInstance('Animal');

console.log(person_obj.name);
console.log(animal_obj.name);
