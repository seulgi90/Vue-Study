<template>
    <div>
        <form action="">
       <!--      <label for="">Name</label>
            <input 
                type="text" 
                v-model="name"
            > -->
        
            <InputField :name="name" @update-name="updateName" /> 
             <br>
            <button>Submit</button>

            {{ name }}
        </form>
    </div>
</template>

<script>
import InputField from '../components/InputField.vue';

export default {

    components: {
        InputField
    },

    data() {
        return {

            name: '' // v-model 양방향 데이터 바인딩
        }
    },

    methods: {
        updateName(name) {
            this.name = name;
        }
    }
}
</script>