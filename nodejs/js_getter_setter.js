// 新的定义 getter 和 setter 方式

const {
          log
      } = require("./helper");

let person;

// 第一种表现形式
person = Object.create(
    Object.prototype,                           // 指定原型为 Object.prototype
    {
        attr: {
            get: function () {
                return this.value;
            },

            set: function (value) {
                return this.value = value;
            }
        }
    }
);

person.attr = 12;

log(person.attr);                              // 12

// 第二种表现形式
const people = {
    name: 'peter',
    age : '20',

    /**
     * 获取信息
     *
     * @returns {string}
     */
    get details() {
        return this.name + ' ' + this.age;
    },

    /**
     * 修改信息
     *
     * @tips    方法名可以与 get 同名
     * @param arguments
     */
    set updateInfo(arguments) {
        let parts = arguments.split('-');
        this.name = parts[0];
        this.age  = parts[1];
    }
};

log(people.details);                        // peter 20
log(people.updateInfo = 'sorbon-19');       // sorbon-19
log(people.name);                           // sorbon
