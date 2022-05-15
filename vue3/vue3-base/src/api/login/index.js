import axios from "../../utils/axios/axios";

export function login (data) {
  return axios.post('citydelivery/api/open/v1/send_sms', data)
}