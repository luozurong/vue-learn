export {}

/**
 * 范型类型别名
 */

// type ObjType = {
//   name: string,
//   getName: () => string
// }

// let obj: ObjType = {
//   name: '',
//   getName () {
//     return ''
//   }
// }

type ObjType<T, K> = {
  name: T,
  getName: () => K
}

// let obj: ObjType<string, number> = {
//   name: '',
//   getName () {
//     return 0
//   }
// }

// let obj: ObjType<string | number, number|string> = {
//   name: 1,
//   getName () {
//     return ''
//   }
// }

type StrOrNum = string | number
let obj: ObjType<StrOrNum, StrOrNum> = {
  name: 1,
  getName () {
    return ''
  }
}

/**
 * 范型接口
 */

// interface PersonItf {
//   name: string;
//   getName: () => string
// }

// let obj2: PersonItf {
//   name: '2',
//   getName () {
//     return 'x'
//   }
// }

// interface PersonItf<T, K> {
//   name: T;
//   getName: () => K
// }

// let obj2: PersonItf<string, number> = {
//   name: '2',
//   getName () {
//     return 1
//   }
// }

// 可以设置默认类型. 别名也是
interface PersonItf<T, K=number> {
  name: T;
  getName: () => K
}

let obj2: PersonItf<string> = {
  name: '2',
  getName () {
    return 1
  }
}