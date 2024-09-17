<script>
import AppFooter from './pages/AppFooter.vue';
import store from '../store.js';


export default {
  components: {
   AppFooter
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
   
    <div class=" d-flex justify-content-center bg-header gap-2">

      <div class="title col-sm-4">
        CRC
      </div>

      <nav class="d-flex gap-2 gap-sm-5 align-items-center col-sm-8 justify-content-center">
        
        <RouterLink :class="$route.fullPath === '/' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'home' }">Home
        </RouterLink>
        <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'portfolio' }">I
          Miei
          Progetti
        </RouterLink>
        <!-- <RouterLink :class="$route.fullPath === '/contact' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'contact' }">
          Chi Sono
        </RouterLink> -->
     
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <AppFooter/>
  </footer>
</template>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';


.title {
    color: $yellow;
    font-size: 40px;
    text-align: center;
    font-family: math;
    
    // border-top: 4px solid $yellow;
    // border-bottom: 1px solid $yellow;
    // position: absolute;
    // left: 6%;
}
.text-header {
  
  font-size: 20px;
  // color: $blue;
  // background-color: $yellow;
  color: $yellow;
  height: 100%;
  display: flex;
  align-items: center;
  // width: 150px;
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
