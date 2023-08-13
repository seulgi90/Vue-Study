<template>
  <tr>
    <TdComponent 
      v-for="(cellData, index) in rowData" 
      :key="index" 
      :cell-data="cellData" 
      :cell-index="index" 
      :row-index="rowIndex" 
    />
  </tr>
</template>

<script>
import TdComponent from './TdComponent.vue'

export default {
  components: {
    TdComponent
  },

  data() {
    return {
      parent: 'tr 부모컴포넌트다'
    }
  },

  props: {
    rowData: Array,
    rowIndex: Number
  }
}
</script>

<style>

</style>