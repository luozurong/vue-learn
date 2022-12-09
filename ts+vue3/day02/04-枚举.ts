export {}

// 枚举不是类型， 用于列举数据用的
// enum Lzr {
//   a = 10,
//   b = '200',
//   c = 'value'
// }
enum StatusCode {
  success = 200,
  paramsError = 400,
  serverError = 500
}
let code: string | number = 200
if (code === StatusCode.success) {
  console.log('成功')
} else if(code === StatusCode.paramsError){
  console.log('失败, 请求参数问题')
} else if (code === StatusCode.serverError) {
  console.log('失败, 服务器问题')
}

enum StatusCode1 {
  success,
  paramsError = 400,
  serverError
}
console.log(StatusCode1.success, StatusCode1.paramsError, StatusCode1.serverError)