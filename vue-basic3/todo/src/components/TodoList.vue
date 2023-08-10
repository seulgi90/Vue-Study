<template>
    <div class="mb-2"> 
      <input 
        type="checkbox" 
        :checked="todo.checked"
        @change="toggleCheckbox"
      >
      <span 
        class="ml-3"
        :class="todo.checked ? 'text-muted' : ''"
        :style="todo.checked ? 'text-decoration:line-through' : ''"
      >
        {{ todo.text }}
      </span>
      <button 
        class="btn btn-danger btn-sm"
        @click="clickDelete"
      >
        Delete
      </button>
    </div>
</template>

<script>
export default {

    props: {
      todo: {
        type: Object,
        required: true
      }
  },

  methods: {

    toggleCheckbox(e) {
      this.$emit('toggle-checkbox', { // $emit 아이다와 체크상태 값을 부모 컴포넌트로 보낸다
        id: this.todo.id,
        checked: e.target.checked
      })
    },

    clickDelete() {
      this.$emit('click-delete', this.todo.id); // 삭제하고 싶은 아이디 값을 부모 컴포넌트로 보내기
    }
    
  }

}
</script>

<style>

</style>