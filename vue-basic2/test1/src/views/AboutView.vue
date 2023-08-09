<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ChangeName />
    <ChangeTitle title="title: about" content="about 내용"/>
    <hr>
    <SendData />
  </div>
</template>

<script>
import ChangeName from '../components/ChangeName.vue';
import ChangeTitle from '../components/ChangeTitle.vue';
import SendData from '../components/SendData.vue';

export default {
  components: {
    ChangeName,
    ChangeTitle,
    SendData
  }
}
</script>