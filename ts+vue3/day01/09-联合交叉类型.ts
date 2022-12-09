export {}

// && 优先于 ||
// console.log(1 || 2 && 3);


// & 优先于 ｜
let obj: {name: string} & {age: number} |  {name: number} & {age: string}
obj = {
  name: 'lzr',
  age: 17
}

obj = {
  name: 11,
  age: '11'
}
