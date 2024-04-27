<script setup>
import { ref } from 'vue'

const headers = ref([
  { title: 'Dessert()', key: 'name' },
  { title: 'Calories', key: 'calories' },
  { title: 'Fat (g)', key: 'fat' },
]);

const desserts = ref([
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 }
]);

const testData = ref([
  { name: 'test1', calories: 100, fat: 1.0 },
  { name: 'test2', calories: 200, fat: 2.0 },
  { name: 'test3', calories: 300, fat: 3.0 },
]);

const noDataMessage1 = '데이터 없음 test';

const selected = ref([]);


const getChecked = ref([]);
const allChecked = ref('false');

const checkedAll = () => {
  allChecked.value = !allChecked.value;
  if (allChecked.value) {
    getChecked.value = [...testData.value]
  } else {
    getChecked.value = [];
  }
}
</script>

<template>

  <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-value="name"
      class="elevation-1"
      :no-data-text="noDataMessage1"
      select-strategy="all"
      show-select
      return-object
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
    </template>
  </v-data-table>
  <pre>v-data-table 체크박스 데이터 확인= {{ selected }}</pre>

  <v-table>
    <thead>
    <tr>
      <th>
        <v-checkbox
            v-model="allChecked"
            @click="checkedAll"
        ></v-checkbox>
      </th>
      <th
          v-for="header in headers"
          :key="header.title"
      >
        {{ header.title }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in testData" :key="item.name">
      <td>
        <v-checkbox
            v-model="getChecked"
            :value="item"
        ></v-checkbox>
      </td>
      <td>{{ item.name }}</td>
      <td>{{ item.calories }}</td>
      <td>{{ item.fat }}</td>
    </tr>
    </tbody>
  </v-table>
  <pre>allChecked = {{ allChecked }}</pre>
  <pre>v-table 체크박스 데이터 확인= {{ getChecked }}</pre>

</template>

<style scoped>
</style>