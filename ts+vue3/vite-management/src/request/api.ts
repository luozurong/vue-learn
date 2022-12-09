import request from "./index";
interface AdminLoginRes {
  token: string;
  tokenHead: string
}

interface AdminLoginInfoRes {
  menus: []
}

interface AdminListParams {
  keyword: string;
  pageSize: number;
  pageNum: number;
}

// 登录返回token
export const adminLoginApi = (data: AdminLoginParams): PromiseRes<AdminLoginRes> => request.post('/admin/login', data)

// 当前登录用户信息
export const adminLoginInfo = (): PromiseRes<AdminLoginInfoRes> => request.get('/admin/info')

// 获取用户数据列表
export const adminList = (data: AdminListParams): PromiseRes<AdminListRes> => request.get('/admin/list', {params: data})