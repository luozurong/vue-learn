// 时间复杂度
/**
 * 1. 是什么？
 * 执行单钱算法所花的时间
 * 
 * 2. 干什么？
 * 写代码的过程中，就可以知道代码运行的快与慢
 * 
 * 3. 表示
 * 大O表示发《解析数论》
 * O表示很多，举例：O(1)、O(n)、O(n^2)、O(logn)...
 */

// O(1)
const a = 1
const b = 2

// O(1)
function func(num) {
  return num ++
}
func(6)

// O(n)
let n = 100
for(let i = 0; i < n; i++) {
  console.log(i)
}

// O(1) + O(n) = O(n)
function fun (n) {
  // O(1)
  let i = 1
  i+=2
  // O(n)
  for(var k = 0; k < n; k++) {
    console.log(k)
  }
}
fun(10)

// O(n^2)
function foo (n) {
  let arr = []
  for(let i = 0; i< n;i++) {
    arr.push([])
    for(let k = 0; K < n; K ++) {
      arr[k].push(i)
    }
  }
}
foo(10)

// O(logN)
let i = 1
const m  = 6
while(i < m) {
  i = i * 2
}