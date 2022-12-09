export {}

class Person {
  public readonly myName: string // 到处都可以用 readonly只读，不能修改
  // protected myName: string // 父类和子类能用，类的外面不能用
  // private myName: string // 子类和类的外面都不能访问
  static title: string = 'title的值' // 静态成员
  constructor (n: string) {
    this.myName = n
  }
  public getName () {
    return this.myName
  }
}
console.log(Person.title)
console.log(Person.title = 'title-11')
console.log(Person.title)
class Male extends Person {
  age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  // 重写
  getName(): string {
    return '我是' + this.myName
  }
}

let m = new Male('lzr', 17)
console.log(m.myName)
console.log(m.age)
console.log(m.getName())