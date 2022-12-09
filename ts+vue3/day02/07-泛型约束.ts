export {}

type StrOrNumber = string | number
interface PersonItf<T extends StrOrNumber, K> {
  name: T, // T只接受字符串或者是数字
  getName: () => K
}

let obj: PersonItf<StrOrNumber, number> = {
  name: 'true',
  getName () {
    return 1
  }
}