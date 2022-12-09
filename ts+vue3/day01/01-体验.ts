let str = '1' // 根据初始的值推倒出变量的类型，以后str的类型就不能修改
// str = 1 // 报错

// const num = 1 // 常量不能改变指向，所以它的值就是它的类型
// num = "2" // 报错 常量不能被修改

// const bool = true // 类型为true

/**
 * ts原始类型  js number, string boolean undefined null symbol bigint
 * ts原始类型就是js的原始类型
 */ 
let str1: string = '1'
let bool: boolean = true
let num: number = 1
// str1.toFixed(2) // 报错
let und: undefined = undefined
let nul: null = null
let sy: symbol = Symbol('123')
let vo: void = undefined

function a(): void {
  // 在ts中函数没有返回值，返回就是void
}
a()
function b(): undefined {
  // 在ts中函数没有返回值，返回就是void
  return undefined
}
b()
