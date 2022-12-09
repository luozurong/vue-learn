import axios from 'axios'
import type {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'


let url = import.meta.env.VITE_API_BASE
console.log(url)

const http = axios.create({
  timeout: 30000,
  withCredentials: true
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})

http.interceptors.response.use((res: AxiosResponse) => {
  return res.data
}, (err: AxiosError) => {
  return Promise.reject(err)
})

export default http