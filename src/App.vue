<template>
  <div id="app" class="container p-4">

    <Header />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'app',
    components: {
      Header,
    },
  }
</script>

<style>
  h3 {
    font-weight: 700;
  }
</style>