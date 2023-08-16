import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN';
export const CLICK_CELL = 'CLICK_CELL';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_cELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MOINE: -6,
  OPENED: 0
}

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
  const candidate = Array(row * cell).fill().map((arr, i) => {
    return i;
  })

  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(chosen);
  }

  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  console.log(data);
  return data;
};

export default new Vuex.Store({
  state: { // vue의 data와 비슷
    tableData: [],
    data: { // form에 들어갈 data들이라서 하나로 묶어줌
      row: 0,
      cell: 0,
      mine: 0
    },
    timer: 0,
    result: '',
    halted: true // 중단ㄷ된 
  },

  getters: { // computed와 비슷, 기존의 state를 활용해서 추가적인 작업을 할 때 사용
  },

  mutations: { // state 수정 시 사용
    [START_GAME](state, { row, cell, mine }) {
      state.data = {
        row,
        cell,
        mine
      },
      state.tableData = plantMine(row, cell, mine);
      state.timer = 0;
      state.halted = false;
    },

    [OPEN_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, CODE.OPENED);

    },

    [CLICK_CELL]() {

    },

    [QUESTION_CELL]() {

    },

    [NORMALIZE_CELL]() {

    },

    [INCREMENT_TIMER](state) {
      state.timer += 1;
    },
  },

  actions: {
  },

  modules: {
  },
})
