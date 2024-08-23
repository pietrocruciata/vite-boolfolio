<template>

  <div class="card  col-3">
    <img :src="item.image" alt="" class="border-bottom">

    <div class="p-3 text-center">
    <h4 class="card-title title mt-2 mb-1">
      {{ item.name }}
    </h4>
    <RouterLink :to="{ name: 'project', params: { id: project } }" class="show card-body">
      Visualizza il progetto
    </RouterLink>
    </div>
   
  </div>

</template>

<script>

import store from '../../store';

export default {

  data() {
    return {
      store,

    }
  },

  props: {
    item: {
      type: Object,
    },
    project: {
      type: Number
    }

  },


}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.title{
  color: $yellow;
  text-align: center;
}

.show{
  border-radius: 10px;
  width: fit-content;
  padding: 5px;
  &:hover{
    color: white;
    background-color: $blue;
  }
}
</style>