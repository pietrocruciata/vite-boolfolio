<template>


    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <img src="/public/img/boolean.png" alt="" class="animate__animated animate__fadeInLeft rounded-4">
    </div>
    <div class="col-lg-8 col-md-6 description align-self-center d-flex flex-column align-items-center ">
        <div class="title">
            Istruzione
        </div>
        <div class="animate__animated animate__fadeInRight my-3">
            Con <span class="important-text">Boolean</span> ho gettato le basi del mio percorso <span
                class="important-text">Tecnologico</span>, partendo da zero e migliorando ogni giorno le
            mie competenze. Dal mio primo <span class="important-text">"Hello World"</span>, sono arrivato a sviluppare
            applicazioni sempre più complesse.
            Dopo anni di esplorazione in diversi settori, ho capito che questa è la strada che desidero seguire: un
            mondo in continua <span class="important-text">Evoluzione</span>, capace di sorprendermi e di mettermi
            costantemente alla prova.

        </div>
        <div class="view-document " @click="viewdocument()">
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
    font-size: 60px;
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