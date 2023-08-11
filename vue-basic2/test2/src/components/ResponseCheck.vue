<template>
  <div>
    <h1>반응 속도 체크</h1>
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <div>
      <div>평균 시간 : {{ result.reduce((a, c) => a + c, 0) / result.length}}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      reseult: [],
      state: "waiting", // 데이터에 따라 클래스를 변경하고 싶을 때: v-bind:class="state" -> 축약 :class="state"
      message: "클릭해서 시작하세요",
    };
  },
  methods: {
    onReset() {
      this.reseult = [];
    },

    onClickScreen() {
      if (this.state === 'waiting') {
        this.state = 'ready';
        this.message = '초록색이 되면 클릭';
        setTimeout(() => {
          this.state = 'now';
          this.message = '지금 클릭!';
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3 초
      } else if (this.state === 'ready') {
        this.state = 'waiting';
        this.message = '너무 성급하시군요! 초록색이 된 후에 클릭하세요';
      } else if (this.state === 'now') {
        this.state = '클릭해서 시작하세요';
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