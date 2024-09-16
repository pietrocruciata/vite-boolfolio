<template>

            <img :src="item" alt="" class="skills-size " >

   


</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';
.skills-size{
    cursor: pointer;
    max-width: 150px;
    &:hover{
    transform: scale(1.08); 
    border-bottom: 1px solid $yellow;
    
  }
}



</style>