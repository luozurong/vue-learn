interface AdminLoginParams {
  username: string;
  password: string
}

// 范型可以写默认值   
interface ManageResult<T> {
  code?: number;
  data: T;
  message?: string;
  errmsg?: string
  errno?: number
}

type PromiseRes<T = {}> = Promise<ManageResult<T>>

interface AdminListRes {
  list: {}[],
  pageNum: number,
  pageSize: number,
  total: number,
  totalPage: number
}
