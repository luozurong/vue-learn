export {}

class Person {
  myName: string
  constructor (n: string) {
    this.myName = n
  }
  getName () {
    return this.myName
  }
}

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