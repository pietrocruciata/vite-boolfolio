<template>
    <div class="skill">
      <img :src="item.img" alt="" class="skills-size d-block">
      <div class="text-center description ">{{ item.name }}</div> <!-- Spostato fuori dal d-none -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,  // Cambiato in Object per includere 'img' e 'name'
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @use '../style/partials/palette' as *;
  @use '../style/general';
  
  .description {
  color: white;
  font-size: large;
  text-align: center;

}
  .skills-size {
    cursor: pointer;
    max-width: 80px;
    transition: transform 0.5s ease-in-out;  // Aggiunto per una transizione fluida
    &:hover {
      transform: scale(1.30); 
    }
  }
  
  .skill {
    position: relative;  // Necessario per posizionare il testo sotto l'immagine
    text-align: center;
    .text-center {
      display: none;  // Inizialmente nascosto
      position: absolute;
      bottom: -40px;  // Posizione sotto l'immagine
      left: 50%;
      transform: translateX(-50%);
      transition: opacity 0.3s ease-in-out;  // Aggiunto per transizione fluida
    }
  
    &:hover .text-center {
      display: block;  // Mostra il testo al passaggio del mouse
      opacity: 1;  // Aggiunto per migliorare l'effetto visivo
    }
  }

 
  </style>