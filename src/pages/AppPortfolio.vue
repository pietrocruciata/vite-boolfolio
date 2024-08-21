<template>
  <div class="container">
    <div class="row">
      <div class="d-flex justify-content-around">
        <div @click="previousPage" :disabled="currentPage === 1" class="bg-blue-botton">indietro</div>
        <span>Pagina {{ currentPage }} di {{ totalPages }}</span>
        <div @click="nextPage" :disabled="currentPage === totalPages" class="bg-blue-botton">avanti</div>

      </div>
      <div class=" d-flex gap-4 flex-wrap justify-content-center">
        <ProjectCard v-for="(project, i) in currentProjects" :key="project.id" :item="project" :project="i">
          {{ project.name }}
        </ProjectCard>
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
      projects: [],
      currentPage: 1,
      projectsPerPage: 15
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.store.data.projects.length / this.projectsPerPage);
    },
    currentProjects() {
      const start = (this.currentPage - 1) * this.projectsPerPage;
      const end = start + this.projectsPerPage;
      return this.store.data.projects.slice(start, end);
    }
  },
  methods: {

    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },

};
</script>

<style lang="scss" >

@use '../style/partials/palette' as *;
@use '../style/general';

.bg-blue-botton{
  cursorpo;
  background-color: $blue;
  padding: 5px;
}
</style>
