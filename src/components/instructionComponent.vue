<template>

    <div class="title">
        Istruzione
    </div>


    <div class="col-3">
        <img src="/public/img/boolean.png" alt="">
    </div>
    <div class="col-8 description align-self-center">
        Con <span class="important-text">Boolean</span> ho piantato le mie fondamenta <span
            class="important-text">Tech</span>, dove giorno dopo giorno miglioravo le mie <span
            class="important-text">Skills</span> partendo completamente da 0, iniziando dal primo <span
            class="important-text">Hello Word</span> fino ad arrivare a sviluppare
        <span class="important-text">Applicativi</span> sempre più completi. Qui dopo anni di ricerca in vari settori ho
        capito che questa è la strada che <span class="important-text">Voglio</span> percorrere, un mondo che non sta
        mai fermo , che non smette di <span class="important-text">Evolversi</span>, di stupirmi e di mettermi alla prova.
    </div>




</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

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