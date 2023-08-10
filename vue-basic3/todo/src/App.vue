<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input
      v-model="todoText" 
      type="text" 
      class="w-100" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>
    <TodoList 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="clickDelete"
    />

  </div> 
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    components: {
      TodoList
    },

    data() {
      return {
        todoText: '',
        todos: [
          { id: 1, text: "buy a car", checked: false },
          { id: 2, text: "buy a truck", checked: false },
          { id: 3, text: "buy a book", checked: true },
          { id: 4, text: "buy a bag", checked: false }
        ]
      }
    },

    methods: {
      addTodo(e) {
        this.todos.push({ 
          id: Math.random(), // db가 따로 없어서 임시로
          text: e.target.value,
          checked: false  
        });
        this.todoText = ''; // todo 추가 후 입력창 초기화
      },

      toggleCheckbox({ id, checked }) { // 자식 컴포넌트에서 보낸 값이 들어온다 (오브젝트 안에 담겨있는 키값으로 찾을경우 ({키값 작성하여 값을 받아올수 있다}) )
        console.log(id, checked);
        const index = this.todos.findIndex(todo => { // todo는 내가 원하는 변수명으로 작성 가능
          return todo.id === id;
        });
        this.todos[index].checked = checked;
      },

      clickDelete(id) { // 자식 컴포넌트에서 보낸 삭제하고 싶은 아이디값을 넘겨 받는다
        const index = this.todos.findIndex(todo => {
          return todo.id === id;
        });
        this.todos.splice(index, 1);
      }
    }
}
</script>

