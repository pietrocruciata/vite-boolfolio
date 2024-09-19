<script>
import AppFooter from './pages/AppFooter.vue';
import store from '../store.js';


export default {
  components: {
    AppFooter
  },
  data() {
    return {
      store,
      mostraImmagine: false

    }
  },
  methods: {
    viewdocument() {

      this.mostraImmagine = !this.mostraImmagine;
    }
  },
  mounted() {
    this.store.data.fetchdata()
  },
}
</script>

<template>
  <section class="d-flex flex-column">
    <header class="overflow">

      <div class=" d-flex justify-content-center bg-header gap-2">

        <div class="title col-sm-4 align-self-center">
          CRC
        </div>

        <nav class="d-flex gap-2 gap-sm-5 align-items-center col-sm-8 justify-content-center">

          <RouterLink :class="$route.fullPath === '/' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'home' }">
            Home
          </RouterLink>
          <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-header rounded-top' : 'c-white'"
            :to="{ name: 'portfolio' }">I
            Miei
            Progetti
          </RouterLink>
          <RouterLink
            :class="$route.fullPath === '/contact' ? 'text-header rounded-top logo-size' : 'c-white logo-size'"
            :to="{ name: 'contact' }">
            <img src="/public/img/image.png" alt="">

          </RouterLink>
          <!-- <div class="logo-size" @click="viewdocument()">
    </div> -->
          <!-- <div v-if="mostraImmagine" class="overlay d-flex flex-column align-items-center">
      <img src="/public/img/Pietro.Cruciata.jpg" alt="" class="image-centered">
      <span @click="viewdocument()" class="view-document ">CHIUDI </span>

    </div> -->

        </nav>
      </div>
    </header>

    <main class="bg-darkblue">
      <RouterView />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </section>

</template>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.view-document {
  margin: 5px;
  padding: 10px;
  background-color: $yellow;
  color: $darkblue;
  cursor: pointer;
  width: fit-content;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px $yellow;
  }

}

.image-centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 80%;
  z-index: 1001;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}

.logo-size {
  width: 40px;
  cursor: pointer;
}

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

.overflow {
  overflow: hidden;
}

.bg-darkblue{
  background-color: $darkblue;
}
</style>
