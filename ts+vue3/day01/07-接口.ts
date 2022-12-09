export {}

// 接口可以用来自定义类型

interface MyItf {
  name: string;
  age: number;
  height: number;
}
let obj: MyItf
obj = {
  name: 'lzr',
  age: 32,
  height: 180
}

// 定义接口类型 -- 给接口用
interface ArrItf {
  [idx: number]: number | string
}
let arr: ArrItf = [1, 2, 3, '4', '5']

// 定义接口类型 -- 给函数用
interface Fnitf {
  // 形参及类型
  (p: string, a: number): void
}
let fn: Fnitf = (p: string, a: number) => {}
fn('', 1)