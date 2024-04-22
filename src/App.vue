<script>
    import AppHeader from "./components/AppHeader.vue"
    import AppHero from "./components/AppHero.vue"
    import AppServices from "./components/AppServices.vue"
    import BannerSections from "./components/BannerSections.vue"
    import { store } from "./store.js";

    export default{
        components: {
            AppHeader,
            AppHero,
            AppServices,
            BannerSections
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppHero></AppHero>
        <AppServices></AppServices>
        <BannerSections :bannerOne="store.banners[0]" :bannerTwo="store.banners[1]"></BannerSections>
    </main>
</template>

<style lang="scss">
    @use './style/general' as *;

    main{
        background-image: url(./assets/img/body-bg.jpg);
        background-size: cover;
    }
</style>
