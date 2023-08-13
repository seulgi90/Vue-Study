<template>
  <div>
    <h1>가위바위보 게임</h1>
    <!-- 
      :class , :style 은 객체형식을  사용 할 수 있다 
      :style="{ fontSize: '14px' }" 
      css에서는 background-image 로 표기 -> 객체형식으로 사용할 떄에는 카멜케이스로 표기 backgroundImage
    -->
    <div id="computer" :style="computedStyleObject"></div>
    <!-- 
      <div id="computer" :style="{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCord} 0`}"></div> 
      => 데이터 가공 이나 문자열이 붙어있는 경우 computed에서 캐싱하도록 코드 변경
    -->
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
      <div>{{ result }}</div>
      <div>현재 {{ score }}점</div>
    </div>
  </div>
</template>

<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

let interval = null;

export default {
  data() {
    return {
      imgCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },

  computed: {
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      };
    },
  },

  methods: {
    changeHand() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.바위) {
          this.imgCoord = rspCoords.가위;
        } else if (this.imgCoord === rspCoords.가위) {
          this.imgCoord = rspCoords.보;
        } else if (this.imgCoord === rspCoords.보) {
          this.imgCoord = rspCoords.바위;
        }
      }, 100);
    },

    onClickButton(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다";
        this.score += 1;
      } else {
        this.result = "졌습니다";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHand();
        // 중복제거 
        // interval = setInterval(() => {
        //   if (this.imgCoord === rspCoords.바위) {
        //     this.imgCoord = rspCoords.가위;
        //   } else if (this.imgCoord === rspCoords.가위) {
        //     this.imgCoord = rspCoords.보;
        //   } else if (this.imgCoord === rspCoords.보) {
        //     this.imgCoord = rspCoords.바위;
        //   }
        // }, 100);
      }, 1000);
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");

    // interval = setInterval(() => { 
    //   if (this.imgCoord === rspCoords.바위) {
    //     this.imgCoord = rspCoords.가위;
    //   } else if (this.imgCoord === rspCoords.가위) {
    //     this.imgCoord = rspCoords.보;
    //   } else if (this.imgCoord === rspCoords.보) {
    //     this.imgCoord = rspCoords.바위;
    //   }
    // }, 100);
    // interval = setInterval()) 이 중복으로 사용되고있기 때문에 중복 제거를 위해 메서드를 따로 만든다 => changeHand()
    this.changeHand(); 
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(interval);
  },

  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>