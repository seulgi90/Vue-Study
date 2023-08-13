<template>
  <div>
    <h1>반응 속도 체크</h1>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>

    <div v-show="result.length">
      <!-- 
        전체 레이아웃 고려하여 선택 
        v-show는 참이 아니여도 화면에 태그가 그려져있지만(실행) 화면에는 보이지 않고
        v-if는 참이 아닐 경우 아예 실행이 안됨(태그 자체가 존재하지 않음) 
      -->
      <div>평균 시간 : {{ average }} ms</div>
      <!-- <div>평균 시간 : {{ result.reduce((a, c) => a + c, 0) / result.length || 0 }} ms</div> -->
      <!-- 
        화면에서  {{ message }}가  달라지면 화면이 다시 그려지는데
        아래와 같이 평균 시간 계산을 직접 넣을 시 다시 계산(재실행)이 된다 -> 나중에 더 오래 걸리는 복잡한 계산일 경우 좋지 않음(성능 고려)
        그래서 화면이 그려지기 전 계산이 완료 되는 computed 사용
        -->
      <button @click="onReset">리셋</button>
    </div>

  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {

  data() {
    return {
      result: [],
      state: "waiting", // 데이터에 따라 클래스를 변경하고 싶을 때: v-bind:class="state" -> 축약 :class="state"
      message: "클릭해서 시작하세요"
    };
  },

  // 일반 data(ex. this.result )를 가공해서 사용할 때 사용 : 성능 고려 
  // computed 사용 시 캐싱이 된다 
  computed: { 
    average() { 
      return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
    }
  },

  methods: {
    onReset() {
      this.result = [];
    },

    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록색이 되면 클릭';
        timeout = setTimeout(() => {
          this.state = 'now';
          this.message = '지금 클릭!';
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3 초
      } else if (this.state === 'ready') {
        clearTimeout(timeout);
        this.state = 'waiting';
        this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요';
      } else if (this.state === 'now') {
        endTime = new Date();
        this.state = '클릭해서 시작하세요';
        this.result.push(endTime - startTime);
      }
    }
  },
};
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}

#screen.waiting {
  background-color: aqua;
}

#screen.ready {
  background-color: red;
  color: white;
}

#screen.now {
  background-color: greenyellow;
}
</style>