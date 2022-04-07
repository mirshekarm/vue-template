<template>
    <h1>{{ aboutTitle }}</h1>
    <button @click="changeTitle()">change</button>
</template>

<script>
export default {
    data() {
        return {
            aboutTitle: 'about'
        }
    },
    methods: {
        changeTitle: function (){
            this.aboutTitle = 'salam'
        }
    },
}
</script>