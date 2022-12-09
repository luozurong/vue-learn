export {}

// | 联合类型 或
let numAndStr: number|string = 10
numAndStr = '20'

// 1|'2'在这里是类型， numAndStr2的值只能是1或‘2’
let numAndStr2: 1|'2' = 1
numAndStr2 = '2'

let obj: {a: 1} | {b: '3'};
obj = {a: 1}
obj = {b: '3'}
obj = {a: 1, b: '3'}
// obj = {c: 1} // 报错
