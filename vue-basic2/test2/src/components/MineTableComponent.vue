<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td 
        v-for="(cellData, cellIndex) in rowData" 
        :key="cellIndex" :style="cellDataStyle(rowIndex, cellIndex)" 
        @click="onClickId(rowIndex, cellIndex)"
        @contextmenu.prevent="onRightClickTd"
        > 
          {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
  </table>
</template>

<script>
import { FLAG_CELL, NORMALIZE_CELL, QUESTION_CELL } from '@/store/mineSweeperStore';
import { mapState } from 'vuex';
import { CODE, OPEN_CELL } from './store';

export default {
  computed: {
    ...mapState(['tableData', 'halted']),

    cellDataStyle() {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: '#444',
            };
          case CODE.CLICKED_MIME:
          case CODE.OPENED:
            return {
              background: 'white',
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE: {
            return {
              background: 'red',
            }
          }
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: 'yellow',
            }
          default:
            return {};
        }
      }
    },
  
    cellDataText() {
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
            case CODE.MINE:
              return 'X';

            case CODE.NORMAL:
              return '';

            case CODE.FLAG_MINE:
            case CODE.FLAG:
              return '!';

            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
              return '?';

            case CODE.CLICKED_MIME:
              return '펑';

            default:
              return '';
          }
        }
    },
  },

  methods: {
    onClickTd(row, cell) {
      if ( this.halted) {
        return;
      }
      this.$store.commit(OPEN_CELL, { row, cell });
    },

      onRightClickTd(row, cell) {
      if (this.halted) {
        return;
      } 
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          this.$store.commit(FLAG_CELL, { row, cell });
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          this.$store.commit(QUESTION_CELL, { row, cell});
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          this.$store.commit(NORMALIZE_CELL, { row, cell });
          return;

      }
    }
  },
}
</script>