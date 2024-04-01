import { createRouter, createWebHashHistory } from 'vue-router'

// 연결 컴포넌트 import
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

// 라우터 설정
const routes = [
    { path : '/', component: Home},
    { path : '/login', component: Login},
]

// 라우터 생성
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 라우터 추출( main.js -> import)
export default router