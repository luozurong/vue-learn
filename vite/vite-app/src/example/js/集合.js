/**
 * 集合：无顺序，不能重复的元素构成
 * 可以看出一种特殊的数组
 * 没有顺序意味着不能通过下标进行访问
 */

// 封装集合的构造函数
function Set() {
  // 使用一个对象来保存集合的元素
  this.items = {}
  // 集合的操作方法

  // 判断集合中是否有某个元素
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  // add方法
  Set.prototype.add = function (value) {
    // 1.判断集合中是否已经包含了该元素
    if (this.has(value)) return false

    // 2.将元素添加到集合
    this.items[value] = value
    return true
  }

  // remove方法
  Set.prototype.remove = function (value) {
    // 1.判断集合中是否包含该元素
    if (!this.has(value)) return false

    // 2.包含该元素，那么将元素删除
    delete this.items[value]
    return true
  }

  // clear方法
  Set.prototype.clear = function () {
    this.items = {}
  }

  // size 方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }

  // value方法
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }
}

// 测试和使用集合类
var set = new Set()

// 添加元素
set.add(1)
console.log(set.values()) // 1
set.add(1)
console.log(set.values()) // 1

set.add(100)
set.add(200)
console.log(set.values()) // 1,100,200

// 判断是否包含元素
console.log(set.has(100)) // true

// 删除元素
set.remove(100)
console.log(set.values()) // 1, 200

// 获取集合的大小
console.log(set.size()) // 2
set.clear()
console.log(set.size()) // 0