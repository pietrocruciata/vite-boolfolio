<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import store from '../../store.js';



export default {
  components: {
    AppFooter,
    AppHeader
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
  <section class="d-flex flex-column min-vh-100">
    <header class="overflow">
      <AppHeader />
    </header>

    <main class="bg-darkblue flex-grow-1 pb-3">
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

.title {
  color: $yellow;
  font-size: 40px;
  text-align: center;
  font-family: math;

}

.c-white {
  color: white;
}

.overflow {
  overflow: hidden;
}

.bg-darkblue {
  background-color: $darkblue;
}
</style>
