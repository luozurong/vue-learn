/**
 * 哈希表结构
 */

// 哈希函数
// 1. 将字符串转为较大的数字 hasCode
// 2. 将大的数字hashCode压缩到数组（大小）之内
/** 
function hashFunc(str, size) {
  // 1.定义hashCode变量
  var hashCode = 0

  // 2.霍纳算法,计算hashCode的值
  // cats => Unicode编码
  for (var i = 0; i < str.length; i++){
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }

  // 3. 取余操作
  var index = hashCode % size

  return index
}

// 测试函数
console.log(hashFunc('abc', 7))
console.log(hashFunc('cba', 7))
console.log(hashFunc('nba', 7))
console.log(hashFunc('mba', 7))

*/

/**
 * 哈希表的实现
 */
function HashTable () {
  // 定义属性
  this.storage = []
  this.count = 0
  this.limit = 8

  // 定义相关方法
  // 哈希函数
  HashTable.prototype.hashFunc = function (str, max) {
    // 1.初始化HashCode的值
    var hashCode = 0
    // 2.霍纳算法，计算hashCode的数值
    for (var i = 0; i < str.length; i ++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    // 3.取模运算
    hashCode = hashCode % max
    return hashCode
  }

  // 插入数据方法
  HashTable.prototype.put = function (key, value) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)
    // 2.取出数组
    var bucket = this.storage[index]
    // 3.判断这个数值是否存在
    if (bucket === undefined) {
      // 3.1 穿件桶
      bucket = []
      this.storage[index] = bucket
    }
    console.log(bucket)

    // 4. 判断是新增还是修改原来的值
    var override = false
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true
      }
    }

    // 如果是新增，前一步没有设置覆盖
    if (!override) {
      bucket.push([key, value]) 
      this.count ++
    }
  }

  HashTable.prototype.get = function(key) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)
    // 2.获取对应的bucket
    var bucket = this.storage[index]
    // 3.如果bucket为null, 那么说明这个位置没有数据
    if (bucket === null) {
      return null
    }
    // 4.有bucket,判断是否有定义的key
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    // 5.没有找到
    return null
  }

  // 删除数据
  HashTable.prototype.remove = function (key) {
    // 1.获取key对应的index
    var index = this.hashFunc(key, this.limit)
    // 2.获取对应的bucket
    var bucket = this.storage[index]
    // 3.判断是否为null, 为null 则说明没有对应的数据
    if (bucket == null) {
      return null
    }
    // 4.遍历bucket，寻找对应的数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count --
        return tuple[1]
      }
    }
    // 5. 来到这位置，说明没有对应的数据，则返回null
    return null
  }

  // 判断hash表是否为空
  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  // 判断hash表中的数据个数
  HashTable.prototype.size = function() {
    return this.count
  }
}

// 1.创建哈希表
var ht = new HashTable()

// 2.插入数据
ht.put("abc", "123")
ht.put("cba", "321")
ht.put("nba", "521")
ht.put("mba", "520")

// 3.获取数据
console.log(ht.get("abc"))
ht.put("abc", "111")
console.log(ht.get("abc"))

// 4.删除数据
console.log(ht.remove("abc"))
console.log(ht.get("abc"))