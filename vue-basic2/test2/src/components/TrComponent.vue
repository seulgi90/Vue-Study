<!-- <template>
  <tr>
    <td-component 
      v-for="(cellData, index) in rowData" 
      :key="index" 
      :cell-index="index" 
      :row-index="rowIndex" 
    >
        vuex에서 직접 넘겨 받는 것으로 변경
        :cell-data="cellData"
    </td-component>
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

  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    }
  },

  props: {
    // rowData: Array, // vuex에서 바로 데이터 받아오는 것으로 변경 
    rowIndex: Number
  }
}
</script> -->

<style>

</style>