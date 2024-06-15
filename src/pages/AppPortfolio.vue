<template>
  <div class="container ">
    <div class="row">
      <div class=" d-flex gap-4 flex-wrap justify-content-center">
        <ProjectCard v-for="(project, i) in projects" :key="project.id" :item="project" />
      </div>
      <div v-if="lastPage > 1">
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
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null,

    }
  },
  methods: {
    changePage(n) {
      if (n === this.currentPage) return
      this.currentPage = n
      this.fetchProjects()
    },

    fetchProjects() {

      axios.get('http://127.0.0.1:8000/api/project', {
        params: {
          page: this.currentPage,

        }
      })
        .then((res) => {

          console.log(res.data.projects.data)
          this.projects = res.data.projects.data
          this.lastPage = res.data.projects.last_page


        })

    }
  },
  created() {
    this.fetchProjects()
  },
}
</script>

<style lang="scss" scoped></style>