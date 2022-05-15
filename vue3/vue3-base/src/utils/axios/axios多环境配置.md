# 多环境配置

## 1. 创建.env文件
- .env文件(所有情况都会加载)
```
VITE_PROJECT_NAME=vue3_base
```

- .env.local(所有情况都会加载, git忽略)
```
VITE_LOCAL_NAME=local
```

- .env.development(development情况都会加载)
```
mode=development
VITE_API_BASE=https://antt-test.91hilife.com
```

- .env.testing(testing情况都会加载)
```
mode=testing
VITE_API_BASE=https://antt-test.91hilife.com
```

- .env.uat(uat情况都会加载)
```
mode=uat
VITE_API_BASE=https://antt-uat.91hilife.com
```

- .env.production(production情况都会加载)
```
mode=production
VITE_API_BASE=https://antt.91hilife.com
```

# 2.package.json 》 scripts 配置
```
{
  "dev": "vite",
  "dev:testing": "vite --mode testing",
  "dev:prod": "vite --mode production",
  "build": "vite build",
  "build:development": "vite build --mode development"
}
```


# 3. 配置axios
```javascript
import axios from 'axios'
// 如果不用http返回，默认使用当前地址，例如localhost:3000
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  timeout: 1000,
  withCredentials: true
})

http.interceptors.request.use(config => {
  console.log(config)
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

export default http
```

# 4. api引用封装
```javascript
import axios from "../../utils/axios/axios";

export function login (data) {
  return axios.post('api/open/v1/send_sms', data)
}
```

# 5. 页面引用
```javascript
import { onMounted } from 'vue'
import { login } from '../../api/login'

const loginAPi = () => {
  login({}).then(res => {
    console.log(res)
  })
}

onMounted(() => {
  loginAPi()
})
```
