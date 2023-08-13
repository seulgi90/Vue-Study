import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex); // vue와 vuex 연결

// export const : 중괄호로 가져와야 하고 이름이 일치하여야 한다
// => import { SET_WINNER, CLICK_CELL } from './store';
// 추후 다른 곳에서도 사용이 가능하도록 모듈화 
export const SET_WINNER = ' SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

// export default : 다른 파일에서 바로 import 하여 사용 가능 
// => import store(자유작명) from './store';
export default new Vuex.Store ({ 
  // vue의 data와 비슷
  state: { 
    tableData: [ 
      ['','',''],
      ['','',''],
      ['','','']
    ],
    turn: 'O',
    winner: ''
  },

  // state를 수정 할 때 : state의  값을 변경 할 경우 mutations을 통해 변경 할 것을 권장!
  // 대문자 와 _로 이어진 명명 규칙을 따른다
  // 변수로 빼줄 수도 있다 [SET_WINNER]
  mutations: { 
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },

    [CLICK_CELL](state, { row, cell }) {
      // state.tableData[row][cell] = state.turn; 
      // vuex에서도 인덱스를 직접 바꾸면 화면에 적용 되지않음 -> Vue.set (vuex는 $set 지원X)
      Vue.set(state.tableData[row], cell, state.turn);
    },

    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },

    [RESET_GAME](state) {
      state.turn = 'O';
      state.tableData = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    },

    [NO_WINNER](state) {
      state.winner = '';
    }
  },

   // vue의 computed와 비슷
  getters: {

  },

  // 비동기를 사용 할 때 또는 여러 뷰테이션을 연달아 실행 할때
  actions: {

  }
});