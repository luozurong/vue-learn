"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// | 联合类型 或
let numAndStr = 10;
numAndStr = '20';
// 1|'2'在这里是类型， numAndStr2的值只能是1或‘2’
let numAndStr2 = 1;
numAndStr2 = '2';
let obj;
obj = { a: 1 };
obj = { b: '3' };
obj = { a: 1, b: '3' };
// obj = {c: 1} // 报错
