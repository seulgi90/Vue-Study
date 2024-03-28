<template>
  <div>
    <p>{{ message }}</p>
    <button @click="increment">Increase Counter</button>
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>

    <br />
    <input v-model="store.message" />
    <input v-model="m1" />
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

// `doubleCount`는 반응형 refs임.
// 이것은 플러그인에 의해 추가된 속성에 대한 'refs'도 추출함.
const { count, doubleCount } = storeToRefs(store)

// 그러나 모든 액션 또는 비반응형(ref/반응형이 아닌) 속성을 건너뜀.
// increment 액션은 그냥 구조화 가능.
const { increment } = store

// 반응형이 아니므로 직접 가져온다
const message = store.message
// state에 두고 쓸 필요 없을 경우
const m1 = 'state에 두고 쓸 필요 없지'
</script>
