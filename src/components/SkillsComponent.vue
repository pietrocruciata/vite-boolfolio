<template>

            <img :src="item" alt="" class="skills-size " >

</template>

<script>
export default {
    props: {
        item: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';
.skills-size{
    cursor: pointer;
    max-width: 80px;
    &:hover{
    transform: scale(1.08); 
    // border-bottom: 1px solid $yellow;
    
  }
}



</style>