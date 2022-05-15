import axios from "axios"

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    timeout: 30000
})

http.interceptors.request.use((config)=>{
    return config;
})

http.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    return Promise.reject(error);
});

export default http;