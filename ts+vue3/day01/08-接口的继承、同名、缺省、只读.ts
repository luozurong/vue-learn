export {}

interface NameItf {
  readonly name?: string
}

interface AgeItf {
  age: number
}
// 接口继承格式， 特点： 具有父接口的属性
interface PersonIft extends NameItf, AgeItf {
  height: number
}

let p: PersonIft;
p = {
  name: 'lzr',
  age: 12,
  height: 180
}
// p.name = 'ls' // 报错 name只读


// 接口同名, 可以同名 特点：相当于合并接口的所有属性
interface AItf {
  a: number
}
interface AItf {
  b?: string   // ？ 属性名可以缺省，不些也可以
}
let obj: AItf = {
  a: 1,
  // b: '1'
}