import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios'
import { registerUI } from './global'
import 'element-plus/dist/index.css'

const app = createApp(App)

// import hyRequest from './service/index'

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config' + JSON.stringify(config))
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log(res)
//       return res
//     }
//   }
// })
console.log(process.env.VUE_APP_BASE_URL, process.env.VUE_APP_BASE_NAME)

app.use(registerUI)
app.use(store).use(router).mount('#app')
