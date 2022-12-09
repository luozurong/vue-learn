"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    myName: 'lzr',
    Person: () => { }
};
// this Window｜ ObjTypeg给多种类型对于的对象
function Person(name) {
    this.myName = name;
}
obj.Person = Person;
obj.Person('xxx');
window.Person = Person;
window.Person('');
