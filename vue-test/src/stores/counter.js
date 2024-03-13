import { defineStore } from 'pinia'

// 첫 번째 인자는 앱 전체에서 스토어의 고유 ID
export const useCounterStore = defineStore('counter', {
    // data 속성
    state: () => ({
        count: 1,
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
        }
    },
})

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0) // ref()는 state 속성이 됨.
//     const name = ref('Eduardo')
//     const doubleCount = computed(() => count.value * 2) // computed()는 getters가 됨.
//     function increment() { // function()은 actions가 됨.
//         count.value++
//     }
//
//     return { count, name, doubleCount, increment }
// })


