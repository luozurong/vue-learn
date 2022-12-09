"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 抽象类： 类的描述,没有具体实现  给普通类继承
// 继承后，普通类必须定义抽象类里的抽象属性和抽象方法
// 抽象类无法实例哗
class Person {
    getAge() {
        return 11;
    }
}
// 普通类(以前学习的类)
class Male extends Person {
    constructor() {
        super(...arguments);
        this.name = '112';
    }
    getName() {
        return this.name;
    }
}
let m = new Male();
console.log(m.getName());
console.log(m.getAge());
class M {
    constructor() {
        this.name = '';
        this.age = 18;
    }
}
let m1 = new M();
console.log(m1);
// m1.name = ''
