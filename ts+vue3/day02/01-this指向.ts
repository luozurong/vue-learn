// 在全局上给Window接口扩展这个属性
interface Window {
  myName: string;
}
// ts提供了Window类型 window的类型是Window
function Person(this: Window, name: string) {
  // ts 中要指明ts的指向，在函数的第一个形参的位置注明
  // Window类型中没有myName属性 所以需要自己扩展
  this.myName = name
}

window.Person('')