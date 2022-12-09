import axios from 'axios'
import Cookies from 'js-cookie'

const http = axios.create({
  baseURL: 'http://120.24.64.5:8088/mall-admin',
  timeout: 30000
})

http.interceptors.request.use(config => {
  let token = Cookies.get('token')
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = token
  }
  console.log(config)
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res.data
}, err => {
  return Promise.reject(err)
})


export default http