import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import axios from 'axios'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$axios = axios // 自定义添加
app.config.globalProperties.$utils = utils // 自定义添加
app.mount('#app')

