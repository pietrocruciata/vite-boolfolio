<template>
  <div class="card p-3 col-3">
    <div class="card-title text-warning">
      <strong>TITOLO:</strong>{{ item.name }}
    </div>
    <div class="card-body">
      <!-- <p><strong>SLUG:</strong>{{ item.slug }}</p>  -->
      <!-- <p><strong>DESCRIPTION:</strong>{{ item.description }}</p> -->
      <!-- <p><strong>LINK GITHUB:</strong>{{ item.link_git }}</p> -->
      <p>LINGUAGGI UTILIZZATI:{{ item.language}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    item: {
      type: Object
    }

  },
}
</script>

<style lang="scss" scoped></style>