<template>
  <div class="d-flex bg-blue">
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
        hanno portato ad affacciarmi su questo settore lavorativo. Mi ritengo un tipo solare, simpatico, ma <span
          class="important-text">Serio</span> e preciso allo stesso tempo. Amo la <span
          class="important-text">Musica</span> , lo <span class="important-text">Sport</span> e sono sempre pronto a
        mettemri in gioco cercando sempre di raggiungere i miei obbiettivi.
      </div>
    </div>
  </div>
  <SkillsComponent v-for="(skill, i) in skills" :key="i" :item="skill" class="bg-darkblue">

  </SkillsComponent>



</template>

<script>
import SkillsComponent from '../components/SkillsComponent.vue';
export default {
  components: {
    SkillsComponent
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

.bg-blue {
  background-color: $blue;
}

.name {
  color: $yellow;
  font-size: 70px;
  text-align: center;
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
}
</style>