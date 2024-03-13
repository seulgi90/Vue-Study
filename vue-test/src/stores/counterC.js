import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 컴포지션 api 방식
export const useCounterCStore = defineStore('counterC', () => {
    const count = ref(0) // ref()는 state 속성이 됨.
    const name = ref('TestName')
    const doubleCount = computed(() => count.value * 2) // computed()는 getters가 됨.
    function increment() {
        // function()은 actions가 됨.
        count.value++
    }

    return { count, name, doubleCount, increment }
})
