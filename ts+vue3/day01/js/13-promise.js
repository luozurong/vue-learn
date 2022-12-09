"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// promise对象 p对象名Promise<res的类型>
let p = new Promise((resolve, rejct) => {
    resolve({
        code: 200,
        // data: [{a: 1, b: 2}, {a: 11, b: 22, c: 1}],
        // data: {
        //   list: [],
        //   pageNum: 1,
        //   pageSize: 10,
        //   total: 21
        // },
        // data: null,
        // data: true,
        data: '操作成功',
        message: ''
    });
});
p.then(res => {
    if (res.code === 200) {
        // res.data.map(item => item.a)
    }
});
