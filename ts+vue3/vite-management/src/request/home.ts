import request from "./index";
import { HomeStatDateIft } from "./types/home"
const Api = {
  getAdminStat(): PromiseRes<HomeStatDateIft> {
    return request.get('http://kumanxuan1.f3322.net:8360/admin/stat')
   }
}

export default Api