<template>

  <div class="card p-3 col-3">
    <RouterLink :to="{ name: 'project', params: { id: item.name } }">
      <div class="card-title text-warning">
        <img :src="item.image" alt="" >
        <strong>TITOLO:</strong>{{ item.name }}
      </div>
      <div class="card-body">
        <!-- <p><strong>SLUG:</strong>{{ item.slug }}</p>  -->
        <p><strong>DESCRIZIONE:</strong>{{ item.description }}</p>
        <!-- <p><strong>LINK GITHUB:</strong>{{ item.link_git }}</p> -->
        <p>LINGUAGGI UTILIZZATI:{{ item.language }}</p>
        <a :href=item.clone_url target="_blank">vai al progetto </a>
      </div>
    </RouterLink>
  </div>

</template>

<script>


export default {
  components: {
    

  },

  props: {
    item: {
      type: Object
    }

  },
  
}
</script>

<style lang="scss" scoped></style>