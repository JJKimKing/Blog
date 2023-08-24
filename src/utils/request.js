import axios from "axios";
import {getToken} from "@/utils/auth";
import ErrorCode from "@/utils/errorCode";

const service = axios.create({
    baseURL: window.__BASE_URL__, timeout: 10000,
});

export let isRelogin={show: false}


//添加请求拦截器
service.interceptors.request.use(config => {
    //是否需要设置token
    const token = (config.headers || {}).isToken === false;
    if (getToken() && !token) {
        config.headers['Authorization'] = 'Bearer ' + getToken();
    }
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error);
})


//添加响应拦截器
service.interceptors.response.use(res => {
    const code = res.data.code || 200;
    const msg = ErrorCode[code] || res.data.result;
    if (code === 401) {
        //重新登陆
        if (!isRelogin.show) {

        }
    }
    if (code === 500) {

        return Promise.reject(new Error(msg));
    }
    if (code !== 200) {

        return Promise.reject('error')
    } else {
        return res.data;
    }

}, error => {

})


export default service;
