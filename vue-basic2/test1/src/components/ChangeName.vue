<template>
    <div>
        <h1>{{ title }}</h1>
        <p> {{ name }}</p>
        <button @click="updateName">이름 바꾸기</button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            title: 'title: ChangeName',
            name: 'seulgi'
        }
    },

    methods: {
        updateName() {
            this.name = 'seulgi Updated';
        }
    }
}
</script>