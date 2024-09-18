<template>


    <div class="col-lg-4 col-md-6 text-center">
        <img src="/public/img/boolean.png" alt="" class="animate__animated animate__fadeInLeft">
    </div>
    <div class="col-lg-8 col-md-6 description align-self-center d-flex flex-column align-items-center ">
        <div>
            Con <span class="important-text">Boolean</span> ho piantato le mie fondamenta <span
                class="important-text">Tech</span>, dove giorno dopo giorno miglioravo le mie <span
                class="important-text">Skills</span> partendo completamente da 0, iniziando dal primo <span
                class="important-text">Hello Word</span> fino ad arrivare a sviluppare
            <span class="important-text">Applicativi</span> sempre più completi. Qui dopo anni di ricerca in vari
            settori ho
            capito che questa è la strada che <span class="important-text">Voglio</span> percorrere, un mondo che non
            sta
            mai fermo , che non smette di <span class="important-text">Evolversi</span>, di stupirmi e di mettermi alla
            prova.
        </div>
        <div class="view-document" @click="viewdocument()">
            Visualizza L'Attestato
        </div>
        <div v-if="mostraImmagine" class="overlay ">
            <img src="/public/img/AttestatoBoolean.jpg" alt="" class="image-centered">
            <span @click="viewdocument()" class="view-document pt-4">CHIUDI </span>

        </div>

    </div>




</template>

<script>
export default {

    data() {
        return {
            mostraImmagine: false 
        };
    },
    methods: {
        viewdocument() {
            
            this.mostraImmagine = !this.mostraImmagine;
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.image-centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  z-index: 1001; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 1000; 
}

.view-document {
    margin: 5px;
    padding: 10px;
    background-color: $yellow;
    color: $darkblue;
    cursor: pointer;
    width: fit-content;
    border-radius: 20px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px $yellow;
    }

}

.title {
    color: $yellow;
    font-size: 40px;
    text-align: center;
    font-family: auto;
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
</style>