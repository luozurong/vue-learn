export {}

// 定义类的同事，相同名称的接口
class Person {
  // 定义属性
  myName: string
  constructor (n: string) {
    this.myName = n
  }
  getName () {
    return this.myName
  }
}
let p = new Person('zhangsan')
console.log(p.myName)
console.log(p.getName())

// 以上这个类，相当于下面这个类
// interface Person {
//   myName: string,
//   getName: () => string
// }

let obj: Person = {
  myName: '',
  getName () {
    return ''
  }
}