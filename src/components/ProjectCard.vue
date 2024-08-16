<template>

  <div class="card p-3 col-3">
    <RouterLink :to="{ name: 'project', params: { id: item.id } }">
      <div class="card-title text-warning">
        <strong>TITOLO:</strong>{{ item.name }}
      </div>
      <div class="card-body">
        <!-- <p><strong>SLUG:</strong>{{ item.slug }}</p>  -->
        <!-- <p><strong>DESCRIPTION:</strong>{{ item.description }}</p> -->
        <!-- <p><strong>LINK GITHUB:</strong>{{ item.link_git }}</p> -->
        <p>LINGUAGGI UTILIZZATI:{{ item.language }}</p>
      </div>
    </RouterLink>
  </div>

</template>

<script>
import store from '../../store';

export default {
  components: {
    

  },
  data() {


    return {
      store
    }
  },
  props: {
    item: {
      type: Object
    }

  },
  mounted() {
    // console.log(this.store.data.projects.name);

  }
}
</script>

<style lang="scss" scoped></style>