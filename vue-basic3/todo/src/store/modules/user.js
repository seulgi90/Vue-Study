import axios from "axios";

export default {
    namespaced: true,
    state: { // 데이터
        users: []
    },

    mutations: { // 데이터 변경
        SET_USERS(state, users) {
            state.users = users;
        },
    },

    actions: { // 비동기 로직 처리 + mutation 호출
        getUsers( { commit }) {
            axios.get('http://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);
            });

        },
    },

    getters: {

    }
}