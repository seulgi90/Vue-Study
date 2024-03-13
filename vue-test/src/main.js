import { createApp } from 'vue'
import App from './App.vue'

// 생성한 뷰 라우터 받아오기
import router from './router'
import { createPinia } from 'pinia';

const pinia = createPinia()

const app = createApp(App)
app.use(router) // 라우터 사용 설정
app.use(pinia) // 피니아 사용 설정(상태 관리 라이브러리)
app.mount('#app')
