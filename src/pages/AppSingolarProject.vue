<template>
    <section class="bg-darkblue d-flex justify-content-center">
        <div class="container">
            <div class="row ">
                <RouterLink class="view-document mx-5 my-2" :to="{ name: 'portfolio' }">
                    <img src="/public/img/arrow.png" alt="" class="back">
                </RouterLink>

                <div class="title">
                    {{ store.data.projectsingle.name }}
                </div>
                <div>
                    <img :src="store.data.projectsingle.image" alt="">
                </div>

                <div class="text-center my-3 description px-4 py-2">
                    {{ store.data.projectsingle.description }}

                </div>

                <div class="d-flex justify-content-around p-2">

                    <div v-for="language in store.data.projectsingle.all_languages" class="languages">
                        {{ language }}
                    </div>

                </div>
                <div class="text-center my-4">
                    <a :href="store.data.projectsingle.html_url
                        " target="blank" class="view-document">Visualizza il progetto completo su GitHub</a>
                </div>


            </div>
        </div>
    </section>


</template>

<script>
import store from '../../store';
export default {

    data() {
        return {
            store,

        }
    },

    watch: {
        'store.data.projects'(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue.length > 0) {
                    this.store.data.fetchproject(this.$route.params.id)
                }
            }
        }
    },
    mounted() {
        if (this.store.data.projects.length > 0) {
            this.store.data.fetchproject(this.$route.params.id)
        }
        console.log(store.data.projectsingle);

    },



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

.back {
    width: 20px;
}

.title {
    color: $yellow;
    font-size: 40px;
    text-align: center;
    font-family: auto;
    // border-top: 4px solid $yellow;
    // border-bottom: 1px solid $yellow;
}

.bg-darkblue {
    background-color: $darkblue;
}

.languages {
    margin: 5px;
    padding: 10px;
    background-color: white;
    color: $darkblue;
    font-weight: bold;
    // cursor: pointer;
    width: fit-content;
    border-radius: 20px;
    text-align: center;
    width: 100px;


    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px $yellow;
    }

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