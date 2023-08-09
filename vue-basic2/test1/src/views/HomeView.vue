<template>
  <div>
    <h1>Main page</h1>
    <!-- <p>{{ name }}</p> -->
    <ChangeName />
    <ChangeTitle title="title: Home" content="home 내용"/>
    <ChangeTitle2 title="title String: Home" :content="999" />
    
  </div>
</template>

<script>
import ChangeName from '../components/ChangeName.vue';
import ChangeTitle from '../components/ChangeTitle.vue';
import ChangeTitle2 from '../components/ChangeTitle2.vue';

export default {
  components: {
    ChangeName,
    ChangeTitle,
    ChangeTitle2
  },

  data() {
    return {
      name: 'vue'
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}

</style>
