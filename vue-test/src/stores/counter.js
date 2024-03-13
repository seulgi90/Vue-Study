import { defineStore } from 'pinia'
// import {computed, ref} from "vue";

// 옵션 api 방식
export const useCounterStore = defineStore('counter', {
    // data 속성
    state: () => ({
        count: 1,
        message: 'Op api test',
        message2: 'Op api test2',
    }),
    // computed 속성
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
    },
    // method 속성
    actions: {
        increment() {
            // `this`에 의존하므로, 화살표 함수를 사용할 수 없음.
            this.count++
        },
    },
})
