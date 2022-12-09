/**
 * 1. 可以存储多个元素，链表的内存不必连续空间
 * 2. 每个元素由一个存储元素本身的节点合一个指向下一个元素的引用（指针）组成
 * 3. 优点
 *    内存空间不是比是连续的. 可以充分利用计算机的内存. 实现灵活的内存动态管理.
 *    链表不必在创建时就确定大小, 并且大小可以无限的延伸下去
 *    链表在插入和删除数据时, 时间复杂度可以达到O(1). 相对数组效率高很多
 * 4. 缺点
 *    链表访问任何一个位置的元素时, 都需要从头开始访问.(无法跳过第一个元素访问任何一个元素)
 *    无法通过下标直接访问元素, 需要从头一个个访问, 直到找到对应的问题
 */

// 链表封装的构造函数
function LinkedList() {
  // 封装一个Node类，用于保存节点信息
  function Node(element) {
    this.element = element
    this.next = null
  }
  // 链表的属性
  this.length = 0 // 链表长度
  this.head = null // 
  
  // 链表尾部追加元素方法
  LinkedList.prototype.append = function (element) {
    // 1. 根据新元素创建节点
    var newNode = new Node(element)

    // 2. 判断原来的链表是否为空
    if (this.head === null) { // 链表为空
      this.head = newNode
    } else { // 链表不为空
      var current = this.head
      while (current.next) {
        current = current.next
      }
      // 找到最后一项，将其next赋值为node
      current.next = newNode
    }
    
    // 链表长度
    this.length ++
  }

  // 链表的toString封装
  LinkedList.prototype.toString = function () {
    // 1.定义两个变量
    var current = this.head
    var listString = ''

    // 2.循环获取链表中所有的元素
    while (current) {
      listString += ',' + current.element
      current = current.next
    }

    // 3.返回最终结果
    return listString.slice(1)
  }

  // 任意位置插入
  LinkedList.prototype.insert = function (position, element) {
    // 1.检测越界问题：越界插入失败
    if (position < 0 || position > this.length) {
      return false
    }

    // 2.找到正确的位置，并插入数据
    var newNode = new Node(element)
    var current = this.head
    var previous = null
    var index = 0

    // 3.判断是否列表是在第一个位置插入
    if (position == 0) {
      newNode.next = current
      this.head = newNode
    } else {
      while (index ++ < position) {
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }
    // 4.长度增加
    this.length ++

    return true
  }

  // 位置移出数据
  LinkedList.prototype.removeAt = function (position) {
    // 1.检查越界问题：越界移出失败，返回null
    if (position < 0 || position>= this.length) {
      return null
    }

    // 2.定义变量, 保存信息
    var current = this.head
    var previous = null
    var index = 0

    // 3.判断移除是否是第一项
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    // 4.length-1
    this.length --

    // 5.返回移除的数据
    return current.element
  }

  // 获取元素位置
  LinkedList.prototype.indexOf = function (element) {
    // 1.定义变量，保存信息
    var current = this.head
    var index = 0

    // 2.找到元素所在的位置
    while (current) {
      if (current.element = element) {
        return index
      }
      index ++
      current = current.next
    }
    // 3.来到这个位置说明没有找到
    return -1
  }

  // 根据元素删除
  LinkedList.prototype.removeAt = function (element) {
    var index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 判断是否为空
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 获取链表的长度
  LinkedList.prototype.size = function () {
    return this.length
  }

  // 获取第一个元素的节点
  LinkedList.prototype.getFirst = function () {
    return this.head.element
  }
}

// 测试链表
// 1.创建链表
var list = new LinkedList()

// 2.追加元素
list.append(15)
list.append(10)
list.append(20)

list.insert(0, 100)
list.insert(2, 200)

console.log(list.toString(), list)