import { createRouter, createWebHashHistory } from 'vue-router'

// 연결 할 각 컴포넌트 import
import HelloWorld from '@/components/HelloWorld.vue'
import TestCom from '@/components/TestCom.vue'
import TestOp from '@/components/TestOp.vue'
import TestOpSet from '@/components/TestOpSet.vue'
import TestTable from '@/components/TestTable.vue'
import TestDataTable from '@/components/TestDataTable.vue'

// 라우터 설정
const routes = [
  { path: '/hello', name: 'HelloWorld', component: HelloWorld },
  { path: '/testcom', name: 'TestCom', component: TestCom },
  { path: '/testop', name: 'TestOp', component: TestOp },
  { path: '/testopSet', name: 'TestOpSet', component: TestOpSet },
  { path: '/testTable', name: 'TestTable', component: TestTable },
  { path: '/testDataTable', name: 'TestDataTable', component: TestDataTable },
]

// 라우터 생성
const router = createRouter({
  history: createWebHashHistory(),
  // 원래 구조는 routes : [{path : String, component : 컴포넌트},]로 es6문법에 의해 축약해서 쓴 것(routes : routes)
  routes,
})

// 라우터 추출( main.js -> import)
export default router
