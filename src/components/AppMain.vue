<template>
  <div class="container">
    <div class="row">
      <div class="col-4 left-part ">
        <img src="/public/img/foto profilo img.jpeg" alt="" class="img-profile">

      </div>
      <div class="col-7 right-part">
        <h2 class="mt-3">Pietro Cruciata</h2>
        <h5>Jr Full-Stack Web Developer</h5>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;


.left-part {
  background-color: $blue;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: $yellow;
}

.img-profile {
  width: 300px;
}

.right-part{
  background-color: $blue;
}
</style>