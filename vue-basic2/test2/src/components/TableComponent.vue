<!-- <template>
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
    },

    turnMessage() { // ...mapGetters : ...mapState 처럼 사용 가능 (참고)
      return this.$store.$getters.turnMessage;
    }
  },
  // vuex에서 data를 받는 것으로 변경 ->  computed
  // props: {
  //   tableData: Array,
  // },
};
</script> -->