import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// pinia 설정
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const pinia = createPinia()

// pinia sessionStorage에 저장하여 새로고침시에도 남아있도록 설정
pinia.use(
  createPersistedState({
    storage: sessionStorage,
    auto: true,
  })
)

createApp(App).use(router).use(pinia).mount('#app')
