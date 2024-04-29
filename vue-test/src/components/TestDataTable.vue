<script setup>
import { computed, ref } from 'vue'

const headers = ref([
  { title: 'Dessert()', key: 'name' },
  { title: 'Calories', key: 'calories' },
  { title: 'Fat (g)', key: 'fat' },
]);

const desserts = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'test1', calories: 100, fat: 1.0 },
  { name: 'test2', calories: 200, fat: 2.0 },
]);

const dessertDetail = ref([
      { key:'test1', name: 't1', calories: 100, fat: 1.0 },
      { key:'test1', name: 't2', calories: 200, fat: 2.0 },
      { key:'test2', name: 'c1', calories: 10, fat: 1 },
      { key:'test2', name: 'c2', calories: 20, fat: 2 }
]);

const testData = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'test1', calories: 100, fat: 1.0 },
  { name: 'test2', calories: 200, fat: 2.0 },
]);

// v-data-table
const noDataMessage1 = '데이터 없음 test';
const selected = ref([]);

// 페이지 수 계산
const pageCount = (data, rowsPerPage) => {
  return Math.ceil(data.length / rowsPerPage);
}

// v-data-table 페이징
const pagination = ref({
  currentPage: 1,
  rowsPerPage: 2, // 페이지 당 보여지는 데이터 수
  totalPage: 10, // total-visible: ... + 페이지 개수
});

// v-data-table 페이징처리 된 데이터
const calculatedDesserts = computed(() => {
  const start = (pagination.value.currentPage - 1) * pagination.value.rowsPerPage;
  const end = pagination.value.currentPage * pagination.value.rowsPerPage;
  return desserts.value.slice(start, end);
});

</script>

<template>

  <v-card class="ma-5" :border="true">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="calculatedDesserts"
      item-value="name"
      class="elevation-1"
      :no-data-text="noDataMessage1"
      select-strategy="all"
      show-select
      return-object
      :page="pagination.currentPage"
      :pagination="pagination"
      :items-per-page="pagination.rowsPerPage"
    >
      <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
      </template>

      <template v-slot:bottom>
        <div class="text-xs-center pt-2">
          <v-pagination
            v-model="pagination.currentPage"
            :length="pageCount(desserts, pagination.rowsPerPage)"
            :total-visible="10"
            :show-first-last-page="true"
          />
        </div>
      </template>
    </v-data-table>
    <pre>v-data-table 체크박스 데이터 확인= {{ selected }}</pre>
  </v-card>

</template>

<style scoped>

</style>