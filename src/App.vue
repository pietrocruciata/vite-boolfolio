<script >
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain
  },
  data() {
    return {
      message: 'I MIEI PROGETTI'
    }
  }
}
</script>

<template>
  <div class="container p-5">
    <h1>{{ message  }}</h1>

  </div>
<AppMain />
</template>

<style>

</style>
