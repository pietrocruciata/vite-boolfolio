<template>
    <section class="bg-darkblue py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="view-document text-center">
                    <a href="/public/img/Pietro.Cruciata.pdf" download="Pietro.Cruciata.pdf">Scarica Il Curriculum</a>
                </div>
                <img src="/public/img/Pietro.Cruciata.jpg" alt="" class="curriculum p-5">
                
            </div>
        </div>


    </section>


</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/palette' as *;
@use '../style/general';

.curriculum {
    width: 100%;
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
</style>