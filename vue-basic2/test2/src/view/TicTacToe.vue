<!-- <template>
<div>
  <h1>2차원 배열</h1>
  <TableComponent :tableData="tableData" />
  <div>{{ turn }}님의 턴 입니다</div>
</div>
</template>

<script>
import { mapState } from 'Vuex';
import store from '../components/store';
import TableComponent from '../components/TableComponent.vue';

export default {
  store, // vuex 연결 , 루트 컴포넌트에 넣어준다
  components: {
    TableComponent
  },

  computed: { 
    // 속성의 이름이 상태 하위 트리 이름과 같을 때 문자열 배열을 mapState에 전달할 수 있다 
    ...mapState(['winner', 'turn'])
    // 표현 방식2
    // ...mapState({
    //   winner: state => state.winner, // 화살표 함수는 this 사용 불가 : 화살표 함수가 부모 컨텍스트를 바인딩하기 때문에 `this`는 예상과 달리 해당 Vue 인스턴스가 아니다
    //   // winner(state) { // 일반 함수처럼 써도 됨
    //   //   return state.winner;
    //   // },
    //   turnState: 'turn' 
    //   // turnSate로 이름 변경 가능(별명)
    //   //  // 문자열 값 'turn'를 전달하는 것은 `state => state.turn`와 같다
    // })

    // mapState 를 사용하여 store와 computed 한방에 연결 , 사용 안할 시 아래 처럼 하나하나 다 적어줘야됨

    // winner() {
    //   return this.$store.state.winner;
    // },

    // turn() {
    //   return this.$store.state.turn;
    // }

  },

  // data() {
  //   return {
  //     tableData: [ 
  //       ['','',''],
  //       ['','',''],
  //       ['','','']

  //     ],
  //     turn: 'O',
  //     winner: '',
  //   };
  // },

  methods: {
    // onChangeData() {
    //   // this.tableData[0][1] = 'O'; // 인덱스를 활용해서 값을 직접 바꾸게 되면 화면에 반영이 안된다 (유의!)
    //   // this.tableData.push('O'); // 방법1 : 메서드를 활용하여 값을 바꾸게 되면 화면에도 적용됨 
      
    //   // Vue.set(this.바꾸고싶은값, key, 변경할 값
    //   // 뷰에서 배열이나 2차원 배열 등을 직접 바꾸면 화면에 적용되지 않으므로 !!!!!!!!!!!
    //   // 방법2:  Vue.set() 이용 또는 this.$set()
    //   // Vue.set(this.tableData[1], 0, 'O'); 
    //   this.$set(this.tableData[1], 0, 'O');
    // }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style> -->