<template>
  <div class="home">
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'
import Card from '@/components/Card.vue'

// reactive 는 object 타입 사용 가능, 함수 가능, 선언한 변수 명으로 사용!
const state = reactive({
  items: [],
})

axios.get('/api/items').then(({ data }) => {
  state.items = data
})
</script>

<style scoped></style>
