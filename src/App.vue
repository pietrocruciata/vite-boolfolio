<script>
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <div class=" p-5 d-flex justify-content-around bg-header">

<nav class="d-flex gap-3 align-items-center">
  <RouterLink :class="$route.fullPath === '/' ? 'text-header' : 'c-white'" :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :class="$route.fullPath === '/contact' ? 'text-header' : 'c-white'" :to="{ name: 'contact' }">Contatti
  </RouterLink>
  <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-header' : 'c-white'" :to="{ name: 'portfolio' }">I Miei
    Progetti
  </RouterLink>
</nav>
</div>
  </header>
  
 <main>
  <RouterView />
 </main>
  
  <footer>

  </footer>
</template>

<style lang="scss">
@use '../style/partials/palette' as *;
@use '../style/general';

.text-header {
  color: $yellow;
}

.bg-header{
  background-color: $blue;
}

.c-white{
  color: white;
}
</style>
