import { createApp } from 'vue'
import App from './App.vue'

// 생성한 뷰 라우터 받아오기
import router from './router'

// pinia
import { createPinia } from 'pinia';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi' // This is already the default value - only for display purposes
    }
})

const app = createApp(App)
app.use(router) // 라우터 사용 설정
app.use(pinia) // 피니아 사용 설정(상태 관리 라이브러리)
app.use(vuetify)
app.mount('#app')
