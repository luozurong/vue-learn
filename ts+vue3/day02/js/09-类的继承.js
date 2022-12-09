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
