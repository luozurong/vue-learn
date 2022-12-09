/**
 * 栈的封装
 */
function Stack () {
  // 栈中的属性
  this.items = []

  // 栈的相关操作
  // 1.将元素进栈
  // this.push = function () {}
  Stack.prototype.push = function (element) {
    this.items.push(element)
  }

  // 2.将元素出栈
  Stack.prototype.pop = function () {
    return this.items.pop()
  }

  // 3.查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }

  // 4.判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0
  }

  // 5.获取栈中的元素个数
  Stack.prototype.size = function () {
    return this.items.length
  }
  // 6.toString方法
  Stack.prototype.toString = function () {
    var resultString = ''
    for (var i = 0; i < this.items.length; i ++) {
      resultString += this.items[i] + ' '
    }
    return resultString
  }
}
// 栈的使用
var s = new Stack()
s.push(20)
s.push(10)
s.push(5)
s.push(0)
console.log(s)
s.pop()
s.pop()
console.log(s)
console.log(s.peek())
console.log(s.isEmpty())
console.log(s.size())
console.log(s.toString())



// 十进制转二进制代码
function dec2bin(decNumber) {
  // 1.定义栈对象
  var stack = new Stack()
  // 2.循环操作
  while (decNumber > 0) {
    // 2.1 获取余数,并放入到栈中
    stack.push(decNumber % 2)
    // 2.2获取整除后的结果，并作为下次运行的数字
    decNumber = Math.floor(decNumber / 2)
  }
  // 3.从栈中取出0和1
  var binaryString = ''
  while(!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
console.log(dec2bin(100))