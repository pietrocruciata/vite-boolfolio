<script >
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain
  },
  data() {
    return {
      message: 'Pietro Cruciata'
    }
  }
}
</script>

<template>
  <div class="container p-5 d-flex justify-content-around">
    <h3>{{ message  }}</h3>
    <nav class="d-flex gap-3 align-items-center">
          <RouterLink :class="$route.fullPath === '/' ? 'text-warning' : ''" :to="{ name: 'home' }">Home</RouterLink>
          <RouterLink :class="$route.fullPath === '/contact' ? 'text-warning' : ''" :to="{ name: 'contact'}">Contact</RouterLink>
          <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-warning' : ''" :to="{ name: 'portfolio'}">Portfolio</RouterLink>
        </nav>
  </div>
<!-- <AppMain /> -->
<RouterView/>
</template>

<style>

</style>
