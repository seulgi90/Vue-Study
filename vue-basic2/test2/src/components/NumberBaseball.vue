<template>
  <div id="root">
    <h1>{{ result }}</h1>
    
    <form @submit.prevent="onSubmitForm">
      <input
        type="text"
        ref="focusInputbox"
        minlength="4"
        maxlength="4"
        v-model="inputValue"
      />
      <button type="submit">입력</button>
    </form>

    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" :key="{t}">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// 화면이랑은 상관없는 계산이기때문에 굳이 methodsd 엮지 않았음
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

export default {
  data() {
    // 어떨때 data를 쓰고 어떨때 변수를 쓰는것 인가?  화면에 보여지는 것 = data() , 그 외 변수로 선언
    return {
      answer: getNumbers(), // 배열로 리턴 return array 됨 유의!
      tries: [], // 시도 수
      inputValue: '', // 사용자 입력 값
      result: '', // 결과
    };
  },

  methods: {
    onSubmitForm() {
      if (this.inputValue === this.answer.join('')) {
        // join() : 배열의 모든 요소를 문자열로 결합한 후 비교
        this.tries.push({
          try: this.inputValue,
          result: '홈런',
        });
        this.result = '홈런';
        alert('게임을 다시 실행합니다');
        this.inputValue = '';
        this.answer = getNumbers();
        this.tries = [];
        this.$refs.focusInputbox.focus();
      } else { // 정답 틀렸을 때
        if (this.tries.length >= 9) {
          this.result = `10번 넘게 틀려서 실패! 답은 ${this.answer.join(',')} 였습니다`;
          alert('실패! 게임을 다시 시작합니다');
          this.inputValue = '';
          this.answer = getNumbers();
          this.tries = [];
          this.$refs.focusInputbox.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArray = this.inputValue.split('').map((number) => parseInt(number));

        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === this.answer[i]) {
            strike++;
          } else if (this.answer.includes(answerArray[i])) { 
            // includes(): 주어진 문자열이 다른 문자열에 포함되어 있는지 여부를 불리언 값으로 반환
            ball++;
          }
        }
        this.tries.push({
          try: this.inputValue,
          result: `${strike} 스트라이크, ${ball} 볼입니다`,
        });
        this.inputValue = '';
        this.$refs.focusInputbox.focus();
      }
    },
  },
};
</script>

<style>
</style>