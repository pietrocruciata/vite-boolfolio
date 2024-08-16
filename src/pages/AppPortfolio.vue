<template>
  <div class="container ">
    <div class="row">
      <div class=" d-flex gap-4 flex-wrap justify-content-center">
        <ProjectCard v-for="(project, i) in store.data.projects" :key="project.id" :item="project" />
      </div>

      <div>
        <div class="d-flex gap-3 justify-content-center my-2">
          <div :class="n === currentPage ? 'bg-warning' : 'bg-primary'" role="button" class=" rounded-circle p-2 pe-aut"
            @click="changePage(n)" v-for="n in lastPage" :key="n">
            {{ n }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import store from '../../store.js';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      store,
      lastPage: 2,
      currentPage: 1


    }
  },
  mounted() {
    this.store.data.fetchdata(1)
  },
  methods: {

    changePage(n) {
      if (n === this.currentPage) return
      this.currentPage = n
      this.store.data.fetchdata(n)
    },
  }

}
</script>

<style lang="scss" scoped></style>