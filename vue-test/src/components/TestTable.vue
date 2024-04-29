<script setup>
import { computed, ref } from 'vue'

const headers = ref([
  { title: 'Dessert()', key: 'name' },
  { title: 'Calories', key: 'calories' },
  { title: 'Fat (g)', key: 'fat' },
])

const testDetail = ref([
  { key: 'test1', name: 't1', calories: 100, fat: 1.0 },
  { key: 'test1', name: 't2', calories: 200, fat: 2.0 },
  { key: 'test2', name: 'c1', calories: 10, fat: 1 },
  { key: 'test2', name: 'c2', calories: 20, fat: 2 },
])

const testData = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'test1', calories: 100, fat: 1.0 },
  { name: 'test2', calories: 200, fat: 2.0 },
])

// v-table
const selectedData = ref([])
const allChecked = ref(false)

// v-table 전체 선택
const checkedAll = () => {
  allChecked.value = !allChecked.value
  if (allChecked.value) {
    // 전체 선택
    selectedData.value = [...calculatedTestData.value] // 페이징 처리 된 데이터
  } else {
    // 전체 선택 해제
    selectedData.value = []
  }
}

// v-table 행 선택
const checkedTestData = () => {
  allChecked.value = false // 전체 선택 해제
}

// v-table의 detail table
const detailData = ref([])

// 페이지 수 계산
const pageCount = (data, rowsPerPage) => {
  return Math.ceil(data.length / rowsPerPage)
}

// v-table 페이징
const pagination1 = ref({
  currentPage: 1,
  rowsPerPage: 2, // 페이지 당 보여지는 데이터 수
  totalPage: 5, // total-visible: ... + 페이지 개수
})

// v-table 페이징처리 된 데이터
const calculatedTestData = computed(() => {
  const start =
    (pagination1.value.currentPage - 1) * pagination1.value.rowsPerPage
  const end = pagination1.value.currentPage * pagination1.value.rowsPerPage
  return testData.value.slice(start, end)
})

// v-table detail
const allCheckedDetailData = ref([])

const filterData = ref([])
const cellClick = item => {
  filterData.value = testDetail.value
    .filter(detail => detail.key === item.name)
    .map(item => ({ ...item }))
}
</script>

<template>
  <v-card class="ma-5" :border="true">
    <v-card-title>v-table Data</v-card-title>
    <v-table>
      <thead>
        <tr>
          <th>
            <v-checkbox v-model="allChecked" @click="checkedAll" />
          </th>
          <th v-for="header in headers" :key="header.title">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in calculatedTestData"
          :key="item.name"
          @click="cellClick(item)"
        >
          <td>
            <v-checkbox
              v-model="selectedData"
              :value="item"
              @click.stop="checkedTestData"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.fat }}</td>
        </tr>
      </tbody>
      <template v-slot:bottom>
        <div class="text-xs-center pt-2">
          <v-pagination
            v-model="pagination1.currentPage"
            :length="pageCount(testData, pagination1.rowsPerPage)"
            :total-visible="pagination1.totalPage"
            :show-first-last-page="true"
          />
        </div>
      </template>
    </v-table>
    <pre>allChecked = {{ allChecked }}</pre>
    <pre>v-data-table 체크박스 데이터 확인= {{ selectedData }}</pre>
  </v-card>

  <v-card class="ma-5" :border="true">
    <v-card-title>v-table Data Detail</v-card-title>
    <v-table>
      <thead>
        <tr>
          <th>
            <v-checkbox v-model="allCheckedDetailData" />
          </th>
          <th v-for="header in headers" :key="header.title">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filterData" :key="item.name">
          <td>
            <v-checkbox v-model="detailData" :value="item" />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.fat }}</td>
        </tr>
      </tbody>
    </v-table>
    <pre>allChecked = {{ allCheckedDetailData }}</pre>
  </v-card>
</template>

<style scoped></style>
