<template>
<div>
  <input
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
  >
</div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      // this.$emit('add-todo', this.newTodo);
      // this.$store.commit('ADD_TODO', this.newTodo) // commit + mutations
      this.$store.dispatch('todo/addTodo', this.newTodo) // dispatch + actions
      this.newTodo = '';

    }
  }
}
</script>

<style scoped>

</style>