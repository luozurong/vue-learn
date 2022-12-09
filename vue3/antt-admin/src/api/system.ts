import http from '../axios/axios'

export function login (data: any) {
  return http.post(`cityAdmin/admin/open/v2/login_check?loginNo=${data.loginNo}&loginPwd=${data.loginPwd}&code=${data.code}&projectToken=${data.projectToken}`, data)
}

export function sendCerification (data: any) {
  return http.post('cityAdmin/admin/open/send_code_admin', data)
}