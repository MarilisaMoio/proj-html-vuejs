<script>
    import AppHeader from "./components/AppHeader.vue"
    import AppHero from "./components/AppHero.vue"
    import AppServices from "./components/AppServices.vue"
    import BannerSections from "./components/BannerSections.vue"
    import { store } from "./store.js";
    import AppProducts from "./components/AppProducts.vue"
    import AppDeals from "./components/AppDeals.vue"
    import AppSpecial from "./components/AppSpecial.vue"

    export default{
        components: {
            AppHeader,
            AppHero,
            AppServices,
            BannerSections,
            AppProducts,
            AppDeals,
            AppSpecial
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
        <AppSpecial></AppSpecial>
        <AppProducts></AppProducts>
        <BannerSections :bannerOne="store.banners[2]" :bannerTwo="store.banners[3]"></BannerSections>
        <AppDeals></AppDeals>
    </main>
</template>

<style lang="scss">
    @use './style/general' as *;

    main{
        background-image: url(./assets/img/body-bg.jpg);
        background-size: cover;
    }
</style>
