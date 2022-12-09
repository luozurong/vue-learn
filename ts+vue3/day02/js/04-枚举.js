"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 枚举不是类型， 用于列举数据用的
// enum Lzr {
//   a = 10,
//   b = '200',
//   c = 'value'
// }
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["paramsError"] = 400] = "paramsError";
    StatusCode[StatusCode["serverError"] = 500] = "serverError";
})(StatusCode || (StatusCode = {}));
let code = 200;
if (code === StatusCode.success) {
    console.log('成功');
}
else if (code === StatusCode.paramsError) {
    console.log('失败, 请求参数问题');
}
else if (code === StatusCode.serverError) {
    console.log('失败, 服务器问题');
}
var StatusCode1;
(function (StatusCode1) {
    StatusCode1[StatusCode1["success"] = 0] = "success";
    StatusCode1[StatusCode1["paramsError"] = 400] = "paramsError";
    StatusCode1[StatusCode1["serverError"] = 401] = "serverError";
})(StatusCode1 || (StatusCode1 = {}));
console.log(StatusCode1.success, StatusCode1.paramsError, StatusCode1.serverError);
