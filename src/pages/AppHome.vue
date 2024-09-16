<template>
  <div class="d-flex pres-part p-4 ">
    <div class="col-4 left-part ">
      <img src="/public/img/foto profilo img.jpeg" alt="" class="img-profile">
    </div>
    <div class="col-7 right-part">
      <h2 class="mt-3 name">Pietro Cruciata</h2>
      <h5 class="role">Jr Full-Stack Web Developer</h5>
      <div class="description mt-5">
        <span class="important-text">Salve a tutti!</span> MI presento, sono Pietro ma puoi chiamarmi <span
          class="important-text">Piero</span>. Un ragazzo siciliano attaccato alla propria terra con un forte desiderio
        di crescere in questo mondo lavorativo.
        Fin dai tempi scolastici sono sempre stato attratto dalla matematica e dalla risoluzione di problemi che mi
        hanno portato ad affacciarmi su questo settore lavorativo. Mi ritengo un tipo solare e simpatico, ma <span
          class="important-text">Serio</span> e preciso allo stesso tempo.
      </div>
    </div>
  </div>

  <div class=" bg-darkblue">
    <div class=" d-flex gap-5 p-3 justify-content-center flex-wrap">
      <SkillsComponent v-for="(skill, i) in skills" :key="i" :item="skill">

      </SkillsComponent>
    </div>
    <div class="container">
      <div class="row">
        <instructionComponent></instructionComponent>

      </div>

    </div>
  </div>





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
        '/public/img/css.png',
        '/public/img/html.png',
        '/public/img/php.png',
        '/public/img/vue.png',
        '/public/img/vite.png',
        '/public/img/mysql.png',
        '/public/img/js.png',
        '/public/img/bootstrap.png',
        '/public/img/laravel.png',
        '/public/img/sass.png'
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@use '../style/partials/palette' as *;



.left-part {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $yellow;
}

.img-profile {
  width: 300px;
}

.pres-part {
  background-color: $blue;
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
  background-color: $darkblue;
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
  overflow: hidden;
}
</style>