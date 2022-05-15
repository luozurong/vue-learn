import axios from 'axios'

const install = axios.create()

install.interceptors.request.use(req => {
  return req
})

install.interceptors.response.use(res => {
  return res.data
}, err => {
  return err.data
})

export default install