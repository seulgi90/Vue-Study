<template>
  <div class="ball" :style="background">{{ number }}</div>
</template>

<script>
export default {
  // 만들어진 로또 숫자 보여주는 컴포넌트 ( 자식 컴포넌트 , 부모 컴포넌트 - 로또제너레이터)
  name: "LottoBall", // 컴포넌트 이름, 생략 가능 -> 자동으로 파일이름으로 name값이 저장됨
  props: {
    // props 로 받은 값(부모가 준 값)을 변경하려는 것은 금지됨! 유의 (부모가 가지고있는 값을 자식에서 넘겨줄 때 사용)
    number: Number, // 자료형(type)
  },

  computed: {
    background() {
      let background;
      if (this.number <= 10) {
        background = "red";
      } else if (this.number <= 20) {
        background = "orange";
      } else if (this.number <= 30) {
        background = "yellow";
      } else if (this.number <= 40) {
        background = "blue";
      } else {
        background = "green";
      }
      return {
        background,
      };
    },
  },

  methods: {},

  beforeDestroy() {},

  watch: {},
};
</script>

<style>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>