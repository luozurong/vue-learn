/**
 * 1. 一种受限的线性表结构，先进先出FIFO first in first out
 * 2. 表的前端删除，表的后端插入
 */
//普通队列
function Queue () {
  var items = []

  // 1.enter queue方法
  this.enqueue = function (element) {
    items.push(element)
  }

  // 2.dequeue方法
  this.dequeue = function () {
    return items.shift()
  }

  // 3.查看前端元素
  this.front = function () {
    return items[0]
  }

  // 4.查看队列是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 查看队列中元素的个数
  this.size = function () {
    return items.length
  }
}

// var queue = new Queue()
// queue.enqueue('abc')
// queue.enqueue('bcd')
// queue.enqueue('cde')

// console.log(queue.front())
// console.log(queue.isEmpty())
// console.log(queue.size())


/**
 * 优先级队列
 */
// function PriorityQueue () {
//   var items = []

//   function QueueElement (element, priority) {
//     this.element = element
//     this.priority = priority
//   }

//   // 1.添加元素的方法
//   this.enqueue = function (element, priority) {
//     // 1.1 根据传入的元素，再创建新的queueElement
//     var queueElement = new QueueElement(element, priority)

//     // 1.2 获取传入元素应该再的正确位置
//     if (this.isEmpty()) {
//       items.push(queueElement)
//     } else {
//       var added = false
//       for (var i = 0; i < items.length; i++) {
//         if (queueElement.priority < items[i].priority) {
//           items.splice(i, 0, queueElement)
//           added = true
//           break
//         }
//       }
//       if (!added) {
//         items.push(queueElement)
//       }
//     }
//   }

//   // 2.dequeue方法
//   this.dequeue = function () {
//     return items.shift()
//   }

//   // 3.查看前端元素
//   this.front = function () {
//     return items[0]
//   }

//   // 4.查看队列是否为空
//   this.isEmpty = function () {
//     return items.length === 0
//   }

//   // 5.查看队列中元素的个数
//   this.size = function () {
//     return items.length
//   }
// }

// var pQueue = new PriorityQueue()
// pQueue.enqueue('abc', 10)
// pQueue.enqueue('cba', 5)
// pQueue.enqueue('nba', 12)
// pQueue.enqueue('mba', 3)

// var size = pQueue.size()
// for (var i = 0; i < size; i++) {
//   var item = pQueue.dequeue()
//   console.log(item.element + '-' + item.priority)
// }

// 击鼓传花游戏
function passGame(nameList, num) {
  // 1.创建一个队列，并将所有人都放在这个队列中
  // 1.1.创建队列
  var queue = new Queue()

  // 1.2 通过for循环，将namelist中的人放在队列中
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }

  // 2.寻找最后剩下的人
  while (queue.size() > 1) {
    // 将前num-1中的人, 都从队列的前端取出放在队列的后端
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 将第num个人从队列移除
    queue.dequeue()
  }

  // 3.获取剩下的一个人
  console.log(queue.size())
  var endName = queue.dequeue()
  return nameList.indexOf(endName)
}

var names = ['John','Jack','Camila','Ingrid','Carl']
var index = passGame(names, 7)
console.log('最终位置', index)