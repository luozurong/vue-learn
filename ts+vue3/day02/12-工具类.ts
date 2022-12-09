export {}

interface PItf {
  name: string;
  age: number;
  height?: number
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }

/**
{
  name?: string | undefined
  age?: number |undefined
}
*/
// 作用： 把<>的接口变为可缺省
let Obj: Partial<PItf> = {
  age: 12
}


// type Required<T> = { [P in keyof T]-?: T[P]; }
// -？去除?的效果
/*
{
  name: string;
  age: number;
  height: number
}
*/
// 作用： 把<>的接口变为不可缺省
let obj2: Required<PItf> = {
  age: 13,
  name: '12',
  height: 175
}




