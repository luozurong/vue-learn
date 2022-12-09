export {}
// 抽象类： 类的描述,没有具体实现  给普通类继承
// 继承后，普通类必须定义抽象类里的抽象属性和抽象方法
// 抽象类无法实例哗
abstract class Person {
  abstract name: string;
  abstract getName(): string;
  getAge () { // 可以实现继承
    return 11
  }
}

// 普通类(以前学习的类)
class Male extends Person {
  name: string = '112';
  getName () {
    return this.name
  }
}

let m = new Male()
console.log(m.getName())
console.log(m.getAge())


/**
 * 接口给类使用
 */
interface PerIft {
  name: string;
  age: number;
  getName?: () => void
}

class M implements PerIft {
  readonly name: string = '';
  age: number = 18;
}
let m1 = new M()
console.log(m1)
// m1.name = ''



