<template>
    <div class=" d-flex justify-content-center bg-header gap-2">

        <div class="title col-sm-4 align-self-center">
            CRC
        </div>

        <nav class="d-flex gap-4 gap-sm-5 align-items-center col-sm-8 justify-content-center">

            <RouterLink :class="$route.fullPath === '/' ? 'text-header rounded-top' : 'c-white'" :to="{ name: 'home' }">
                Home
            </RouterLink>
            <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-header rounded-top' : 'c-white'"
                :to="{ name: 'portfolio' }">I
                Miei
                Progetti
            </RouterLink>

            <div class="logo-size c-white d-flex flex-column align-items-center">
                <div>
                    <a href="/img/Pietro.Cruciata.pdf" download="Pietro.Cruciata.pdf" target="_blank">
                        <img src="/public/img/image.png" alt="">
                    </a>
                </div>

                <div class="download">Scarica cv</div>

            </div>

        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.logo-size {
    width: 40px;
    cursor: pointer;
}

.title {
    color: $yellow;
    font-size: 40px;
    text-align: center;
    font-family: math;

}

.text-header {

    font-size: 20px;
    color: $yellow;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.c-white {
  color: white;
}
.bg-header {
  background-color: $blue;
  border-bottom: 4px solid $yellow;
  height: 80px;
}

.download {
  width: max-content;
}
</style>