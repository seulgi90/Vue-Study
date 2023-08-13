<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과 창"></div>

    <LottoBall v-for="ball in winBalls" :key="ball" :number="ball" />
    <!-- 
      // :number="ball"(v-bind:number="ball") props 로(자식 컴포넌트) 전달할 수 있다 
    -->
    <div>보너스</div>
    <LottoBall v-if="bonus" :number="bonus" />
    <button v-if="redo" @click="onClickRedo">한 번 더!!</button>
  </div>
</template>

<script>
import LottoBall from "../components/LottoBall.vue";

function getWinNumbers() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const getWinNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...getWinNumbers, bonusNumber];
}
let timeouts = [];
export default {
  // 숫자 생성 컴포넌트
  components: {
    LottoBall,
    // 자식 컴포넌트 불러오기 components: 'lotto-ball' : LottoBall
    // -> 축약 가능 : LottoBall (케밥케이스를 파스칼메이스로 자동인식하기 떄문, 동일하게 작성시 축약 가능)
  },

  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      redo: false,
      bonus: null,
    };
  },

  computed: {},

  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      // 로또 숫자 뽑기 필요 -> mounted안에 있는 것을 그대로 옮기면 중복 코드 발생
      this.showBalls();
    },

    showBalls() {
      // 로또 숫자 뽑기
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        // let을 사용하면 클로저 문제가 생기지않아서
        timeouts[0] = setTimeout(() => {
          // 반복문안에 비동기 setTimeout()을 넣어도 괜찮다
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true; // 한 번 더 버튼
      }, 7000); // 7초
    },
  },

  mounted() { // 화면에 그려지는 부분 
    // // 로또 숫자 뽑기
    // for (let i = 0; i < this.winNumbers.length - 1; i++) { // let을 사용하면 클로저 문제가 생기지않아서
    //   setTimeout(() => { // 반복문안에 비동기 setTimeout()을 넣어도 괜찮다
    //     this.winBalls.push(this.winNumbers[i]);
    //   }, ( i + 1) * 1000);
    // }
    // setTimeout(() => {
    //   this.bonus = this.winNumbers[6];
    //   this.redo = true; // 한 번 더 버튼
    // }, 7000); // 7초
    this.showBalls();
  },

  beforeDestroy() { 
    // 화면이 사라져 버리면 중간에 메모리 누수가 될 경우 방지를 위해 신경써줘야한다
    timeouts.forEach((t) => {
      clearTimeout(t);
    })
  },

  watch: {},
};
</script>

<style>
</style>