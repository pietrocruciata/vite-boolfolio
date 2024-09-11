<script>
import AppMain from './components/AppMain.vue';
import store from '../store.js';


export default {
  components: {
    AppMain
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.data.fetchdata()
  },
}
</script>

<template>
  <header>
    <div class=" d-flex justify-content-around bg-header">

      <nav class="d-flex gap-5 align-items-center ">
        <RouterLink :class="$route.fullPath === '/' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'home' }">Home
        </RouterLink>
        <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'portfolio' }">I
          Miei
          Progetti
        </RouterLink>
        <RouterLink :class="$route.fullPath === '/contact' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'contact' }">
          Chi Sono
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
  
  font-size: 20px;
  color: $blue;
  background-color: $yellow;
  height: 100%;
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: center;
  
}

.bg-header {
  background-color: $blue;
  border-bottom: 4px solid $yellow;
  height: 80px;
}

.c-white {
  color: white;
}
</style>
