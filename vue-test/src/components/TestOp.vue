<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ message2 }}</p>
        <button @click="increaseCounter">Increase Counter</button>
        <p>count: {{ counter }}</p>
        <p>doubleCount: {{ doubleCount }}</p>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default {
    setup() {
        const counterStore = useCounterStore()

        // 반응형 변수 설정
        const counter = ref(counterStore.count)

        // doubleCount를 계산하는 computed 속성 설정
        const doubleCount = computed(() => counter.value * 2)

        // increaseCounter 메서드 설정
        const increaseCounter = () => {
            counterStore.increment()
            counter.value = counterStore.count
        }

        const message = counterStore.message
        const message2 = counterStore.message2

        // return 문에 필요한 값들 반환
        return {
            message,
            message2,
            counter,
            increaseCounter,
            doubleCount,
        }
    },
}
</script>
