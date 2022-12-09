export {}

// 默认参数 b默认值是3
function fn (a: number, b: number = 3) {
  return a + b
}
fn(1, 2)
fn(5)


// 缺省参数
function fn1(a: number, b?: number) {
  return 1
}
fn1(1, 2)
fn1(1)

// 剩余参数
function fn2(a: number, b: number, ...arr: number[]) {
  console.log(a, b)
  console.log(arr)
}
fn2(1, 2, 3, 4)
