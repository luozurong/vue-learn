export {}

interface Person {
  name: string;
  age: number,
  [idx: number]: number | string; // 描述数组
  [idx: string]: number | string // 描述对象
}
// keyof 后面一般跟接口 表示接口的这些属性名之一
type PersonKeyof = keyof Person // "name" | "age"
let p1: PersonKeyof = 'name'
p1 = 'age'
p1 = '12'



interface PersonIft {
  [idex: string]: string | number
}
let p2:  PersonIft = {
  aa: 1
}


type StrOrNum = string | number
type PItf = {
  [k in StrOrNum]: string
}
let obj: PItf = {
  a: '',
  1: '10'
}

// typeof 提取变量或者对象的了行
let a = {
  a: 1,
  b: '3e'
}
type strType = typeof a
let aObj = {
  a: 1,
  b: 'cd'
}
let aa = 'a'
type aaType = typeof aa
let aaVal: aaType = 'es'