"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义类的同事，相同名称的接口
class Person {
    constructor(n) {
        this.myName = n;
    }
    getName() {
        return this.myName;
    }
}
let p = new Person('zhangsan');
console.log(p.myName);
console.log(p.getName());
// 以上这个类，相当于下面这个类
// interface Person {
//   myName: string,
//   getName: () => string
// }
let obj = {
    myName: '',
    getName() {
        return '';
    }
};
