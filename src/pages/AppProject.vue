<template>
    <div>
        show
        <div>TITOLO:{{ store.data.projects.name }}</div>
    </div>
</template>

<script>
import store from '../../store';
export default {
    data() {
        return {
            store
        }
    },
    mounted(){
        console.log(this.store.data.projects);
        // console.log(this.store.data.projects.name);

    }
}
</script>

<style lang="scss" scoped></style>