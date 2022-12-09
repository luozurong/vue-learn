import request from "./index";

interface AdminLoginParams {
  username: string;
  password: string
}

interface ManageResult<T = {}> {
  code: number;
  data: T;
  message: string
}
interface AdminLoginRes {
  token: string;
  tokenHead: string
}

type PromiseRes<T> = Promise<ManageResult<T>>

// 登录返回token
// export const adminLoginApi = (data: AdminLoginParams): PromiseRes<AdminLoginRes> => request.post('/admin/login', data)
const API = {
  // adminLoginApi(data: AdminLoginParams) {
  //   return request.post<AdminLoginParams, ManageResult<AdminLoginRes>>('/admin/login', data)
  // }
  adminLoginApi(data: AdminLoginParams): PromiseRes<AdminLoginRes> {
   return request.post('/admin/login', data)
  }
}

export default API