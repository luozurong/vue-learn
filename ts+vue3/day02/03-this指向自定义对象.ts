export {}

type ObjType = {
  myName: string;
  Person: (myname: string) => void
}
let obj: ObjType = {
  myName: 'lzr',
  Person: () => {}
}

// this Window｜ ObjTypeg给多种类型对于的对象
function Person(this: Window | ObjType, name: string) {
  this.myName = name
}

obj.Person = Person
obj.Person('xxx')

window.Person = Person
window.Person('')