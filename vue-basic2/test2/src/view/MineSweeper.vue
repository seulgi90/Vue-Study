<template>
  <div>
    <h1>지뢰 찾기</h1>
    <mine-form></mine-form>
    <div>{{ timer }}</div>
    <mine-table-component></mine-table-component>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import mineStore, { INCREMENT_TIMER } from '../store/mineSweeperStore';
import MineTableComponent from '../components/MineTableComponent.vue';
import MineForm from '../components/MineForm.vue';

let interval;

export default {
    store: mineStore, // 파일과 동일한 이름 아닐경우 옵션명 필수

    components: {
        MineTableComponent,
        MineForm,
    },

    computed: {
      ...mapState(['timer', 'result', 'halted']),

    },

    methods: {

    },

    watch : { // 통제된 환경에서 사용하도록 한다
    halted(value) {
      if (value === false) { // false일 때 게임 시작
        setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
        }, 1000)
      } else { // 게임 중단
        clearInterval(interval);
      }
    } 
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