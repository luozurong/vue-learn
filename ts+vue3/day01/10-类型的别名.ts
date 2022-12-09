export {}

// 自定义一个类型
type StrOrNum = string | number
let str: StrOrNum = 1
str = 10

type ObjType = {a: number & 2, b: string}
let obj: ObjType = {
  a: 2,
  b: 'lzr'
}

// interface 和type的区别
// 都可以自定义类型
// 类型别名不能重复定义，接口可以
// 类型别名能支持联合和交叉类型

interface AItf {
  a: string
}
// 用类型别名保存接口上的某个属性类型
type Atype = AItf['a']
let str2: Atype = '10'

type color = 'red' | 'blue' | 'green' | string & {}
let c: color = 'red'