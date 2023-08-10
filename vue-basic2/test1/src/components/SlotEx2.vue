<template>
    <div>
        <h1>Slot-header</h1>
        <slot name="header"></slot>
        <hr>
        <h1>Slot-body</h1>
        <slot name="body"></slot>
        <hr>
        <h1>Slot-footer</h1> 
        <slot name="footer"></slot> 
        <hr>
         <h1>Slot-default</h1> 
        <slot></slot>
        <hr>
        <h1>Slot-#</h1> 
        <slot name="sharp"></slot>    
    </div>
</template>

<script>
export default {

    data() {
        return {
        
        }
    },

    methods: {
     
    }
}
</script>