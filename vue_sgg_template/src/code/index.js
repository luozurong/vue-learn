class Person {
  constructor(name) {
    this.name = name
  }
  drink () {
    console.log('喝点吧')
  }
}
class Student extends Person{
  constructor(name, score) {
    super(name)
    this.score = score
  }

  introduce () {
    console.log(`我${this.name}, 考了${this.score}分`)
  }
}
var student = new Student('lzr', 98)
console.log('student', student)
console.log(student.__proto__ === Student.prototype)


class Teacher extends Person{
  constructor(name, subject) {
    super(name)
    this.subject = subject
  }
  teach () {
    console.log(`我是${this.name}, 我教${this.subject}`)
  }
}
var teacher = new Teacher('hmc', '前端')
console.log('teacher', teacher)
teacher.drink()
console.log(teacher.hasOwnProperty('subject'))
// 原型的继承、修改、重写
// 原型链的指向
// p.__proto__  // Person.prototype
// Person.prototype.__proto__  // Object.prototype
// p.__proto__.__proto__ //Object.prototype
// p.__proto__.constructor.prototype.__proto__ // Object.prototype
// Person.prototype.constructor.prototype.__proto__ // Object.prototype
// p1.__proto__.constructor // Person
// Person.prototype.constructor  // Person