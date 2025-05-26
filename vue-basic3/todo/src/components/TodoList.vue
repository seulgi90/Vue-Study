<template>
  <div>
  <todo-page
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @delete-todo="deleteTodo"
  />
  </div>
</template>

<script>
import TodoPage from "@/components/TodoPage.vue";

export default {
  name: "TodoList",
  components: {TodoPage},
  computed: {
    todos() {
      return this.$store.state.todo.todos; // vuex 모듈로 변경 -> this.$store.state.모듈이름.해당 변수
    },
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit('toggle-checkbox', value)
    },
    deleteTodo(todoId) {
      this.$emit('delete-todo', todoId)
    }
  }
}
</script>

<style scoped>

</style>