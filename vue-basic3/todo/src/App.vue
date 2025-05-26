<template>
  <div id="app">
    <h1>Todo App</h1>
    <completed-todo />
    <add-todo
    />

    <hr>
    <todo-list
    />
    <user-list />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import CompletedTodo from "@/components/CompletedTodo.vue";
import UserList from "@/components/UserList.vue";

export default {
  name: 'App',
  components: {UserList, AddTodo, TodoList, CompletedTodo },
  props: {
    newTodo: String
  },
  data() {
    return {
      todos: [
      ]
    }
  },
  methods: {
    // addTodo(newTodo) {
    //   if (newTodo.trim() === '') return;
    //  const newTodoId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1
    //      : 1;
    //
    //   this.todos.push({
    //     id: newTodoId,
    //     text: newTodo,
    //     checked: false
    //   })
    // },
    // toggleCheckbox({ id, checked }) {
    //   const todo = this.todos.find(v => v.id === id);
    //   if (todo) {
    //     todo.checked = checked;
    //   }
    // },
    // deleteTodo(id) {
    //   const index = this.todos.findIndex(v => v.id === id);
    //   if (index !== -1) {
    //     this.todos.splice(index, 1);
    //   }
    // }

    // add: () => {
    //
    // }
  }

}
</script>

<style>
</style>
