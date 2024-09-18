<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <img :src="store.data.projectsingle.image" alt="">
            </div>
            <div class="col-4">
                <div>
                    {{ store.data.projectsingle.name }}
                </div>
                <div v-for="language in store.data.projectsingle.all_languages">
                    {{ language }}
                </div>
                <div>
                    {{ store.data.projectsingle.description }}
                    <a :href="store.data.projectsingle.html_url
                        " target="blank">link git</a>
                </div>
            </div>

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

    watch: {
        'store.data.projects'(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue.length > 0) {
                    this.store.data.fetchproject(this.$route.params.id)
                }
            }
        }
    },

    // mounted() {
    //     // this.store.data.fetchproject(this.$route.params.id)


    // },
    mounted() {
        if (this.store.data.projects.length > 0) {
            this.store.data.fetchproject(this.$route.params.id)
        }
        console.log(store.data.projectsingle);

    },



}
</script>

<style lang="scss" scoped></style>