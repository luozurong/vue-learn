import { dataType } from 'element-plus/es/components/table-v2/src/common'
import http from '../utils/axios'
// 登录接口
export function login (data: any) {
  return http.post('/admin/login', data)
}

// 获取菜单列表
export function getMenuList () {
  return http.get('/menu/menuList')
}

// 新增菜单
export function addMenuList (data: any) {
  return http.post('/menu/menuList', data)
}

// 修改菜单
export function modifyMenuList (data: any) {
  return http.put('/menu/menuList', data)
}

// 删除菜单
export function deleteMenuList (params: any) {
  return http.delete('/menu/menuList', {params})
}

// 获取角色列表
export function getRole (params: any) {
  return http.get('/role/getList', {params})
}

// 获取角色列表
export function addRole (data: any) {
  return http.post('/role/addRole', data)
}

// 获取角色列表
export function deleteRole (params: any) {
  return http.get('/role/deleteRole', {params})
}

// 更新角色
export function updateRole (data: any) { 
  return http.post('/role/updateRole', data)
}

// 获取用户列表
export function getUserList (params: any) {
  return http.get('/user/getUserList',{params})
}

// 更新用户
export function updateUser (data: any) {
  return http.put('/user/updateUser',data)
}
// 新增用户
export function addUser (data: any) {
  return http.post('/user/addUser',data)
}
// 删除用户
export function deletUser (params: any) {
  return http.delete('/user/deleteUser', {params})
}