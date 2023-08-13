<template>
<div>
  <h1>2차원 배열</h1>
  <TableComponent :tableData="tableData" />
  <div>{{ turn }}님의 턴 입니다</div>
</div>
</template>

<script>
import store from '../components/store';
import TableComponent from '../components/TableComponent.vue'

export default {
  store, // vuex 연결 
  components: {
    TableComponent
  },

  computed: {
    winner() {
      return this.$store.state.winner;
    },

    turn() {
      return this.$store.state.turn;
    }
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
    //   // this.tableData.push('O'); // 메서드를 활용하여 값을 바꾸게 되면 화면에도 적용됨 
      
    //   // Vue.set(this.바꾸고싶은값, key, 변경할 값
    //   // 뷰에서 배열이나 2차원 배열 등을 직접 바꾸면 화면에 적용되지 않으므로 !!!!!!!!!!!
    //   // Vue.set() 이용 또는 this.$set()
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
</style>