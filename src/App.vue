<template>
  <header>
    <h1 class="header">header</h1>
  </header>

  <main class="container">
    <router-view/>
  </main>

  <footer>
    <h1>footer</h1>
  </footer>
</template>

<script>
export default {
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">

</style>