import axios from "axios"

// 配置项
const axiosOption = {
  baseURL: "http://47.93.114.103:6688/manage",
  timeout: 5000,
}

// 创建一个实例
const instance = axios.create(axiosOption)

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // 对请求的错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应的拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    // 对响应的错误做些什么
    return Promise.reject(error)
  }
)

export default instance
