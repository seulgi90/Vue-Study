import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ResponseCheck from '../view/ResponseCheckPage.vue'
import RockSissorsPaper from '../view/RockSissorsPaperPage.vue'
import LottoPage from '../view/LottoPage.vue'
import TicTacToe from '../view/TicTacToe.vue'
import MineSweeper from '../view/MineSweeper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // view 하위 해당 컴포넌트 작성
  },
  {
    path: '/number',
    name: '숫자야구 게임',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../view/NumberBaseBallPage.vue')
  },
  {
    path: '/response',
    name: '반응속도 체크',
    component: ResponseCheck
  },
  {
    path: '/rockSissorsPaper',
    name: '가위바위보 게임',
    component: RockSissorsPaper
  },
  {
    path: '/lotto',
    name: '로또 추첨기',
    component: LottoPage
  },
  {
    path: '/tictactoe',
    name: '2차원 배열',
    component: TicTacToe
  },
  {
    path: '/mine',
    name: '지뢰 찾기',
    component: MineSweeper
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
