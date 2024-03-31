import axios from 'axios'
import Vue from 'vue'

// 设置baseURL
// axios.defaults.baseURL = 'https://apis.dingyang.net/api'
axios.defaults.baseURL = 'https://dyapis.dingyang.net'


Vue.prototype.$http = axios

// 创建axios对象，暴露
export default axios.create()
