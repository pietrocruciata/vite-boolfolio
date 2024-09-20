
<template>
  <div class="bg-darkblue py-3">

    <div v-if="isLoading" class="loading-spinner">
      <p>Caricamento in corso...</p>
    </div>

    
    <div v-else>
      <div class="container">
        <div class="row">
          <div
            class="justify-content-center d-flex align-items-center description description-part animate__animated animate__fadeInLeft p-3">
            Qui troverai alcuni dei miei Progetti ordinati per data di creazione, dove potrai quindi visionare la mia
            Crescita progetto dopo progetto.
          </div>

          <div class="d-flex justify-content-around">
            <div @click="previousPage" :disabled="currentPage === 1" class="bg-sand-botton m-3">indietro</div>
            <span class="m-3 c-sand align-self-center description">Pagina {{ currentPage }} di {{ totalPages }}</span>
            <div @click="nextPage" :disabled="currentPage === totalPages" class="bg-sand-botton m-3">avanti</div>
          </div>
        </div>
      </div>

      <div class=" d-flex gap-4 flex-wrap justify-content-center">
        <ProjectCard v-for="(project, i) in currentProjects" :key="project.id" :item="project">
          {{ project.name }}
        </ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';
import store from '../../store.js';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      store,
      isLoading: true, 
      currentPage: 1,
      projectsPerPage: 6
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.store.data.viewProjects.length / this.projectsPerPage);
    },
    currentProjects() {
      const start = (this.currentPage - 1) * this.projectsPerPage;
      const end = start + this.projectsPerPage;
      return this.store.data.viewProjects.slice(start, end);
    }
  },
  mounted() {
    
    this.loadProjects();
  },
  methods: {
    loadProjects() {
      
      setTimeout(() => {
        
        this.isLoading = false;
      }, 2000); 
    },
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
  }
};
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';


.loading-spinner {
  text-align: center;
  font-size: 20px;
  color: white;
  margin-top: 50px;
}

.bg-sand-botton {
  border-radius: 20px;
  background-color: $yellow;
  padding: 10px;
  cursor: pointer;
  color: $darkblue;
  font-size: large;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px $yellow;
  }
}

.bg-darkblue {
  background-color: $darkblue;
}

.c-sand {
  color: white;
}

.description {
  color: white;
  font-size: large;
  text-align: center;
}

.description-part {
  font-size: 25px;
  border-bottom: 4px solid $yellow;
}
</style>

