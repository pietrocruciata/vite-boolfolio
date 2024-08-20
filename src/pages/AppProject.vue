<template>
    <div>
        show
    </div>
    <div>
        {{ store.data.projectsingle.name }}
    </div>
    <div v-for="language in store.data.projectsingle.all_languages">
        {{ language}}
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

    mounted() {
        this.store.data.fetchproject(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped></style>