<template>
  <div>
    <input type="number" placeholder="세로" :value="row" @change="onChangeRow" />
    <input type="number" placeholder="가로" :value="cell" @change="onChangeCell" />
    <input type="number" placeholder="지뢰" :value="mine" @change="onChangeMine" />
    <button @click="onClickBtn">시작</button>
  </div>
</template>

<script>
import { START_GAME } from '../store/mineSweeperStore';

export default {
    data() { // 해당 컴포넌트안에서만 사용시 data() 내부에 작성하고
        return { // 해당 컴포넌트 내의 data를 다른 곳에서도 사용해야 될 떄 'Vuex'에서 관리하도록 한다
            row: 10,
            cell: 10,
            mine: 20
        }
    },
    methods: {
        onChangeRow(e) {
            this.row = e.target.value;
        },
        onChangeCell(e) {
            this.cell = e.target.value;
        },
        onChangeMine(e) {
            this.mine = e.target.value;
        },
        onClickBtn() {
            this.$store.commit(START_GAME, { row: this.row, cell: this.cell, mine: this.mine });
        }
    }

}
</script>

<style>

</style>