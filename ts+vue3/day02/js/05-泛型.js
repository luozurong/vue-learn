"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(n) {
    return n;
}
fn(100);
fn(true);
// 😡型 可以理解为类型的形参， T是一个标识符，可以自定义 T表示类型
function fn1(n, m) {
    console.log(m);
    return n;
}
fn1(100, '100');
fn1(true, 1);
fn1('hello', true);
let arr = [1];
