<template>
  <div>
    {{ todo.checked }}
    <input
        type="checkbox"
        :checked="todo.checked"
        @change="toggleCheckbox"
    >
    <span>{{ todo.text}}</span>
    <button @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoPage",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCheckbox(e) {
      // this.$emit('toggle-checkbox', {
      //   id: this.todo.id,
      //   checked: e.target.checked
      // })
      // this.$store.commit('TOGGLE_TODO', {
      //         id: this.todo.id,
      //         checked: e.target.checked
      //       })
      this.$store.dispatch('todo/toggleTodo', {
                    id: this.todo.id,
                    checked: e.target.checked
                  })
    },
    deleteTodo() {
      // this.$emit('delete-todo', this.todo.id)
      // this.$store.commit('DELETE_TODO', this.todo.id)
      this.$store.dispatch('todo/deleteTodo', this.todo.id)
    }
  }
}
</script>

<style scoped></style>