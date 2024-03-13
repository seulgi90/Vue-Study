<template>
    <div>
        <!--        <p>{{ message }}</p>-->
        <!--        <p>{{ message2 }}</p>-->
        <p>name : {{ name }}</p>
        <!-- store의 state -->
        <p>state_count : {{ count }}</p>
        <!-- store의 getter -->
        <p>getters_doubleCount : {{ doubleCount }}</p>
        <!-- store의 actions -->
        <button @click="increment">Click!!!</button>
    </div>
</template>

<!-- storeToRefs()를 사용하여 반응형 상태를 생성 -->
<!-- 내부적으로 Vue는 여전히 <script setup> 블록의 내용을 기반으로 setup() 함수를 생성합니다 -->
<!-- 그러나 setup() 함수를 직접 정의할 필요는 없습니다. Vue가 대신 처리 -->
<script setup>
import { useCounterCStore } from '@/stores/counterC'
import { storeToRefs } from 'pinia'

const store = useCounterCStore()

// `name`과 `doubleCount`는 반응형 refs임.
// 이것은 플러그인에 의해 추가된 속성에 대한 'refs'도 추출함.
const { name, count, doubleCount } = storeToRefs(store)

// 그러나 모든 액션 또는 비반응형(ref/반응형이 아닌) 속성을 건너뜀.
// increment 액션은 그냥 구조화 가능.
const { increment } = store

// 반응형이 아니므로 직접 가져온다
// const message = store.message
// const { message2 } = store
</script>

<!-- 비반응형 -->
<!--<script>-->
<!--import { useCounterStore } from '@/stores/counter'-->

<!--export default {-->
<!--  name: 'TestRouter',-->
<!--  setup() {-->
<!--    // pinia에 저장된 상태를 가져오는 코드-->
<!--    const store = useCounterStore()-->

<!--    return {-->
<!--      // 상태와 액션-->
<!--      count: store.count,-->
<!--      doubleCount: store.doubleCount,-->
<!--      increment: store.increment,-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->
