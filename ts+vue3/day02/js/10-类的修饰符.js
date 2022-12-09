"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n) {
        this.myName = n;
    }
    getName() {
        return this.myName;
    }
}
// protected myName: string // 父类和子类能用，类的外面不能用
// private myName: string // 子类和类的外面都不能访问
Person.title = 'title的值'; // 静态成员
console.log(Person.title);
console.log(Person.title = 'title-11');
console.log(Person.title);
class Male extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    // 重写
    getName() {
        return '我是' + this.myName;
    }
}
let m = new Male('lzr', 17);
console.log(m.myName);
console.log(m.age);
console.log(m.getName());
