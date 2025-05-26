<template>
  <div>
  <h1>UserList</h1>
    <pre>{{ todos }}</pre>

    <div v-for="user in users" :key="user.id">
      <pre>{{ user.name }}</pre>
  </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  // data() {
  //   return {
  //     users: []
  //   }
  // },
  created() {
      this.getUsers();
  },
    computed: { // 모듈화 적용 후2
      ...mapState('user', ['users']),
      ...mapState('todo', {
        todos: state => state.todos
      })

    // ...mapState({ // 모듈화 적용 후
    //   users: state => state.user.users,
    //   todos: state => state.todo.todos // state.모듈이름.함수
    //  }
    // ),
    // ...mapState([ // 모듈화 적용 전
    //     'users',
    //   'todos'
    // ]),
    // user() {
    //   return this.$store.state.user;
    // },
    // todos() {
    //   return this.$store.state.todos;
    // }
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    // getUsers() {
    //     this.$store.dispatch('getUsers');
    // }
  }

}
</script>