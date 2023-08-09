<template>
    <div>
        <h1> {{ title }}</h1>
        <p>{{ content }}</p>
        <p>{{ name }}</p>

    </div>
</template>

<script>
export default {

    props: {
        title: {
            type: String,
            required: true
        },

        content: {
            type: Number
        },

        name: {
            type: String,
            default: 'default name'
        }
    }

}
</script>