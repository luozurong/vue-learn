"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let arr: object = [1,2,3]
// 数组的元素一般数据类型都一致，便于处理
let arr1 = [1, 2, 3];
arr1[0] = 10;
// arr1[1] = '20' // 报错
// 泛型,类型参数化
let arr2 = [10, 20, 30];
arr2[0] = 1;
// arr2[1] = '20' // 报错
// 元组
let arr3 = [10, 20, true];
