export {}

// 交叉类型
// let a: number&string //没有任何值满足这个类型， 一般不会这么写
//  & 表示 name, age, height 必须都要有
// 如果一个属性出现多次设置，必须都满足
let obj: {name: string, age: number} & {height: number, age: 10}
obj = {name: 'lzr', age: 10, height: 180}

// & 换成 ｜ 才可以少属性
