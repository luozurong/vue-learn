import http from '@/utils/axios'

export function menuList () {
  return http({
    url: 'http://192.168.0.100:8080/coureslist',
    method: 'GET'
  })
}
