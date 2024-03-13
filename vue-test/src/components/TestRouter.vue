<template>
  <div>
    <!-- store의 state -->
    <h2>Store : {{ count }}</h2>
    <!-- store의 getter -->
    <p>counter : {{ doubleCount }}</p>
    <!-- store의 actions -->
    <button @click="increment">Click!!!</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  name: 'TestRouter',
  setup() {
    // pinia에 저장된 상태를 가져오는 코드
    const store = useCounterStore()

    return {
      // 상태와 액션
      count: store.count,
      doubleCount: store.doubleCount,
      increment: store.increment,
    }
  },
}
</script>
