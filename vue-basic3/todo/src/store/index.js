import Vue from 'vue';
import Vuex from 'vuex';
import todo from "./modules/todo";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        todo: todo,
        user: user
    }
    // state: { // 데이터
    //     todos: [],
    //     users: []
    // },
    //
    // mutations: { // 데이터 변경
    //     SET_USERS(state, users) {
    //         state.users = users;
    //     },
    //     ADD_TODO(state, value) {
    //         const newTodoId = state.todos.length > 0 ? Math.max(...state.todos.map(todo => todo.id)) + 1
    //             : 1;
    //
    //         state.todos.push({
    //             id: newTodoId,
    //             text: value,
    //             checked: false
    //         })
    //     },
    //     TOGGLE_TODO(state, { id, checked }) {
    //         const todo = state.todos.find(v => v.id === id);
    //         if (todo) {
    //             todo.checked = checked;
    //         }
    //     },
    //     DELETE_TODO(state, todoId) {
    //         const index = state.todos.findIndex(v => v.id === todoId);
    //         if (index !== -1) {
    //             state.todos.splice(index, 1);
    //         }
    //     }
    //
    // },
    //
    // actions: { // 비동기 로직 처리 + mutation 호출
    //     getUsers( { commit }) {
    //         axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
    //             commit('SET_USERS', res.data);
    //         });
    //
    //     },
    //     addTodo( { commit }, value) {
    //         // axios.post() 과 같은 비동기 로직 추가
    //         commit('ADD_TODO', value);
    //     },
    //     toggleTodo({ commit }, payload) {
    //         commit('TOGGLE_TODO', payload);
    //     },
    //     deleteTodo({ commit }, todoId) {
    //         commit('DELETE_TODO', todoId);
    //     }
    // },
    //
    // getters: { // 컴퓨티드
    //     numberOfCompletedTodo: (state) => {
    //         return state.todos.filter(todo => todo.checked).length;
    //     }
    // }
})