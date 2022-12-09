"use strict";
// ts提供了Window类型 window的类型是Window
function Person(name) {
    // ts 中要指明ts的指向，在函数的第一个形参的位置注明
    // Window类型中没有myName属性 所以需要自己扩展
    this.myName = name;
}
window.Person('');
