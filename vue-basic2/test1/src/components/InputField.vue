<template>
    <div>
        <label for="">Name</label>
        <input 
            type="text" 
            :value="name"
            @input="updateName"
        >
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },

    methods: {
        updateName(e) {
            console.log(e.target.value);
            this.$emit('update-name',e.target.value) // this.$emit('이벤트 명', 변경할 값)  : 부모컴포넌트(SendData)로 값을 보낼 때 사용
        }
    }
}
</script>