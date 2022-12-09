export {}

function fn(n: number|boolean): number|boolean {
  return n
}
fn(100)
fn(true) 

// 😡型 可以理解为类型的形参， T是一个标识符，可以自定义 T表示类型
function fn1<T, K>(n:T, m: K): T {
  console.log(m)
  return n
}
fn1<number, string>(100, '100')
fn1<boolean, number>(true, 1)
fn1<'hello', boolean>('hello', true)

let arr: Array<number> = [1]