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
import mineStore from '../store/mineSweeperStore';
import MineTableComponent from '../components/MineTableComponent.vue';
import MineForm from '../components/MineForm.vue';


export default {
    store: mineStore, // 파일과 동일한 이름 아닐경우 옵션명 필수

    components: {
        MineTableComponent,
        MineForm,
    },

    computed: {
      ...mapState(['timer', 'result']),

    },

    methods: {

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