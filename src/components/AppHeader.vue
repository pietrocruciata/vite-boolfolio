<template>
    <div class=" d-flex justify-content-around bg-header gap-2 p-4">

        <div class="title col-sm-4 align-self-center">
            <img src="/img/logogrande.png" alt="" class="w-logo">

        </div>

        <div class="hamburger col-md-6" @click="toggleMenu" v-if="isMobile">
            <img src="/img/menu.png" alt="" class="menu">

        </div>

        <nav class="d-md-flex gap-4 gap-sm-5 align-items-center col-sm-8 justify-content-center d-none d">

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
                        <!-- <img src="/public/img/image.png" alt=""> -->
                        <div class="download">Scarica cv</div>
                    </a>
                </div>



            </div>

        </nav>
        <nav class="mobile-menu py-4" v-if="isOpen && isMobile">
            <ul class="d-flex justify-content-around">
                <li @click="navigateTo('home')">Home</li>
                <li @click="navigateTo('portfolio')">Progetti</li>
                <li>
                    <a href="/img/Pietro.Cruciata.pdf" download="Pietro.Cruciata.pdf" target="_blank">
                        <div class="download">Scarica cv</div>
                    </a>
                </li>

            </ul>
        </nav>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            isMobile: false,
        };
    },
    mounted() {
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkIfMobile);
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        navigateTo(section) {
            this.$router.push({ name: section });
            this.isOpen = false;
        },
        checkIfMobile() {
            this.isMobile = window.innerWidth <= 800;
        },
    },
};
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
    height: 130px;
}

.download {
    width: max-content;
}

.w-logo {
    width: 120px;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    width: 70px;

    @media (max-width: 767px) {
        display: flex;
    }
}

.bar {
    width: 30px;
    height: 4px;
    background-color: black;
    margin: 5px 0;
    transition: 0.3s;
}

.bar.active {
    background-color: $yellow;
}

.mobile-menu {
    width: 100%;
    position: absolute;
    left: 0;
    top: 111px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 4px solid $yellow;

}


.mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.mobile-menu li {
    padding: 10px 10px;
    cursor: pointer;
    color: $yellow;
    font-size: 22px;
    // box-shadow: 0 2px px $black;
    // border-radius: 20px;



}

.mobile-menu li:hover {
    background: $yellow;
    color: white;
}
</style>