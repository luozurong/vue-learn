import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 30000
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  (config.headers as any)['Authorization'] = `Bearer ${localStorage.getItem("token")}`
  return config
})

http.interceptors.response.use((res: AxiosResponse) => {
  return res
}, (err: AxiosError) => {
  return Promise.reject(err)
})

export default http