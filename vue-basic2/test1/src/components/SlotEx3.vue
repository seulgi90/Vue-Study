<template>
    <div>
        <h1>Slot3- header</h1>
        <slot name="header" :title="title"></slot>
        <hr>
        <h1>body</h1>
        <slot name="body" :title="title"></slot>
        <hr>
        <h1>footer</h1>        
    </div>
</template>

<script>
export default {

    data() {
        return {
            title: 'Slot이란?'
        }
    },

    methods: {
     
    }
}
</script>