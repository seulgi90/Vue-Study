<!-- <template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
import { mapState } from 'Vuex';
// import { CLICK_CELL, SET_WINNER, RESET_GAME } from './store'; // store.js에서 const로 따로 빼 둔 것

export default {

  props: {
    // cellData: String, // vuex에서 바로 받아오는 것으로 변경
    cellIndex: Number,
    rowIndex: Number
  },

  computed: { // vuex의 state data 가져오기
    ...mapState({
      tableData: state => state.tableData,
      turn: state => state.turn,
      cellData(state) {
        return state.tableData[this.rowIndex][this.cellIndex];
      }
    }),

    cellData() {
      return this.$store.tableData[this.rowIndex][this.cellIndex];
    },

    tableData() {
      return this.$store.state.tableData;
    },

    turn() {
      return this.$$store.state.turn;
    }
  },

  methods: {
    onClickTd() {
      // if (this.cellData, { row: this.rowIndex, cell: this.cellIndex }) return;

      // Vuex 를 사용 할때는 ' this.$store.commit '사용하여 부른다
      // 그냥 'CLICK_CELL'(일반 문자열) 쓰면 오타 등 변경 될 경우 많으므로 store.js에서 const로 따로 빼 둠
      // this.$store.commit('CLICK_CELL'); 
      // this.$$store.commit(CLICK_CELL); // store.js에서 변수 명으로 만든 것으로 적용! 오류 적어짐

      // const rootData = this.$root.$data; // 중복이 많아서 따로 뺌 

      // console.log('root',rootData); // this.$root.$data : 최상위 컴포넌트로 접근 가능
      // console.log('parent',this.$parent.$data);

      // // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn; 
      // // 2차원 배열 직접 변경은 화면에 적용되지 않는다 ->  this.$set() 적용
      // this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
      
      // rootData.turn = rootData.turn === 'O' ? 'X' : 'O'; // 부모 컴포넌트에 있는 turn값 변경
      
      // if (win) {
      //   this.$$store.commit(SET_WINNER, this.turn); // 두번째 인수 자리 : data
      //   this.$$store.commit(RESET_GAME);
      // }
     
    }
  }

}
</script>

<style>

</style> -->