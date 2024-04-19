import axios from "axios";
import {useUserStoreHook} from "@/store/modules/user";
import {ElMessage} from "element-plus";
import {ElMessageBox} from 'element-plus';


// 创建 axios 实例
const service = axios.create({
    baseURL: __BASE_URL__,
    timeout: 50000,
    headers: {"Content-Type": "application/json;charset=utf-8"},
});

service.interceptors.request.use(
    config => {
        const userStore = useUserStoreHook()
        const token = userStore.token;
        if (token) {
            config.headers.Authorization = `Bearer {token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })


service.interceptors.response.use(response => {
        const {code, msg} = response.data;
        console.log(response.data);

        if (code === 200) {
            return response;
        }
        if (response.data instanceof ArrayBuffer) {
            return response;
        }

        ElMessage.error(msg || "系统出错");
        return Promise.reject(new Error(msg || "Error"));
    }, (error) => {
        if (error.response.data) {
            const {code, msg} = error.response.data;
            // token 过期,重新登录
            if (code === "401") {
                ElMessageBox.confirm("当前页面已失效，请重新登录", "提示", {
                    confirmButtonText: "确定",
                    type: "warning",
                }).then(() => {
                    const userStore = useUserStoreHook();
                    userStore.resetToken().then(() => {
                        location.reload();
                    });
                });
            } else {
                ElMessage.error(msg || "系统出错");
            }
        }
        return Promise.reject(error.message);
    }
)
export default service;

