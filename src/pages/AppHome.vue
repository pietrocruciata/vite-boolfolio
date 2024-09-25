<template>
  <section class="pres-part">
    <div class="container">
      <div class="row py-4 ">
        <div class="col-lg-4 col-md-6 left-part ">
          <img src="/public/img/fotoprofilointera.jpg" alt=""
            class="img-profile animate__animated animate__fadeInLeft rounded-4">
        </div>
        <div class="col-lg-8 col-md-6 right-part animate__animated animate__fadeInRight">
          <h2 class="mt-3 name">Pietro Cruciata</h2>
          <h5 class="role">Jr Full-Stack Web Developer</h5>
          <div class="description mt-5">
            <span class="important-text">Ciao a tutti!</span> Mi chiamo Pietro, ma potete chiamarmi <span class="important-text">Piero</span>. Sono un ragazzo siciliano, profondamente legato
            alla mia terra e con una grande voglia di crescere professionalmente. Fin da quando ero studente, la mia
            passione per la matematica e per la risoluzione di problemi mi ha portato a esplorare e a intraprendere un
            percorso lavorativo in questo settore. Mi considero una persona solare e simpatica, ma al tempo stesso <span class="important-text">Seria</span>
            e precisa.
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class=" d-flex gap-5 p-3 justify-content-center flex-wrap skills-part animate__animated animate__fadeIn bg-grey">
    <SkillsComponent v-for="(skill, i) in skills" :key="i" :item="skill">

    </SkillsComponent>
  </div>
  <section class="bg-darkblue">

    <div class="container">
      <div class="title py-3">
        Istruzione
      </div>
      <div class="row justify-content-center mb-4 p-3">

        <instructionComponent></instructionComponent>

      </div>

    </div>

  </section>








</template>

<script>
import SkillsComponent from '../components/SkillsComponent.vue';
import instructionComponent from '../components/instructionComponent.vue';
export default {
  components: {
    SkillsComponent,
    instructionComponent
  },
  data() {
    return {
      skills: [
        '/img/css.png',
        '/img/html.png',
        '/img/php.png',
        '/img/vue.png',
        '/img/vite.png',
        '/img/mysql.png',
        '/img/js.png',
        '/img/bootstrap.png',
        '/img/laravel.png',
        '/img/sass.png'
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@use '../style/partials/palette' as *;



.bg-grey {
  background-color: #C3C5C5;
}

.skills-part {
  border-bottom: 4px solid $yellow;

}

.title {
  color: $yellow;
  font-size: 40px;
  text-align: center;
  font-family: auto;
  // border-top: 4px solid $yellow;
  // border-bottom: 1px solid $yellow;
}

.left-part {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $yellow;
}

.img-profile {
  width: 250px;
}

.pres-part {
  background-color: $darkblue;
  border-bottom: 4px solid $yellow;
  text-align: center;
}

.name {
  color: $yellow;
  font-size: 70px;
  // text-align: center;
  font-family: auto;

}

.role {
  color: white;
  text-align: center;
  background-color: $blue;
  padding: 5px
}

.description {
  color: white;
  font-size: large;
  text-align: center;

}

.important-text {
  font-size: 25px;
  color: $yellow;
}

.bg-darkblue {
  background-color: $darkblue;
  // overflow: hidden;
}
</style>