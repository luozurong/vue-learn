/**
 * 字典结构
 */
// 创建字典的构造函数
 export function Dictoinay () {
  // 字典属性
  this.items = {}

  // 字典的操作方法
  // 字典中添加键值对
  Dictoinay.prototype.set = function (key, value) {
    this.items[key] = value
  }

  // 判断字典中是否有某个值
  Dictoinay.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }

  // 从字典中移除元素
  Dictoinay.prototype.remove = function (key) {
    // 1.判断字典中是否有这个key
    if (!this.has(key)) return false

    // 2.从字典中删除key
    delete this.item[key]
    return true
  }

  // 根据key去获取value
  Dictoinay.prototype.get = function (key) {
    return this.items[key] ?  this.items[key] : undefined
  }

  // 获取所有的key
  Dictoinay.prototype.keys = function () {
    return Object.keys(this.items)
  }

  // 获取所有的value
  Dictoinay.prototype.values = function () {
    return Object.values(this.items)
  }

  // size方法
  Dictoinay.prototype.size = function () {
    return this.keys().length
  }

  // clear方法
  Dictoinay.prototype.clear = function () {
    this.items = {}
  }
}

// 字典的使用
var dict = new Dictoinay()

// 字典加入元素
dict.set('age', 18)
dict.set('name', 'lzr')
dict.set('height', 1.66)

// 获取字典的信息
console.log(dict.keys())
console.log(dict.values())
console.log(dict.size())
console.log(dict.get('name'))