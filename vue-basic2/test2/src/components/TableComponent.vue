<template>
  <table>
    <tr-component
      v-for="(rowData, index) in tableData"
      :key="index"
      :row-data="rowData"
      :row-index="index"
    >
    </tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent.vue";

export default {
  components: {
    TrComponent,
  },

  computed: {
    tableData() {
      return this.$store.state.tableData;
    }
  },
  // vuex에서 data를 받는 것으로 변경 ->  computed
  // props: {
  //   tableData: Array,
  // },
};
</script>

<style>

</style>