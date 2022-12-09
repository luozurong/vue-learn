"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// any不推荐使用, any 会要过类型校验
// let a: any = 1
// a = '10'
// a = [10]
// a = {b: 10}
// a.toFixed(2) // 绕过了，不检测
let n;
n = 1;
n = '10';
n = [10];
// n.toFixed(2) // 报错 有做类型校验
if (typeof n === 'number') {
    n.toFixed(2);
}
else if (typeof n === 'string') {
    n.concat();
}
