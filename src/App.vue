<script>
    import AppHeader from "./components/AppHeader.vue"
    import AppHero from "./components/AppHero.vue"
    import AppServices from "./components/AppServices.vue"
    import BannerSections from "./components/BannerSections.vue"
    import { store } from "./store.js";
    import AppProducts from "./components/AppProducts.vue"
    import AppDeals from "./components/AppDeals.vue"
    import AppSpecial from "./components/AppSpecial.vue"
    import AppQuotes from "./components/AppQuotes.vue"
    import AppBlog from "./components/AppBlog.vue"
    import AppPartners from "./components/AppPartners.vue"
    import AppFooter from "./components/AppFooter.vue"

    export default{
        components: {
            AppHeader,
            AppHero,
            AppServices,
            BannerSections,
            AppProducts,
            AppDeals,
            AppSpecial,
            AppQuotes,
            AppBlog,
            AppPartners,
            AppFooter
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <button class="scroll-up"><a href="#"><i class="fa-solid fa-angles-left"></i></a></button>
    <AppHeader></AppHeader>
    <main>
        <AppHero></AppHero>
        <AppServices></AppServices>
        <BannerSections :bannerOne="store.banners[0]" :bannerTwo="store.banners[1]"></BannerSections>
        <AppSpecial></AppSpecial>
        <AppProducts></AppProducts>
        <BannerSections :bannerOne="store.banners[2]" :bannerTwo="store.banners[3]"></BannerSections>
        <AppDeals></AppDeals>
        <AppQuotes></AppQuotes>
        <AppBlog></AppBlog>
        <AppPartners></AppPartners>
        <AppFooter></AppFooter>
    </main>
</template>

<style lang="scss">
    @use './style/general' as *;
    @use './style/partials/variables' as *;

    main{
        background-image: url(./assets/img/body-bg.jpg);
        background-size: cover;
    }

    .scroll-up{
        position: fixed;
        bottom: 30px;
        right: 8vw;
        background-color: $primary_color;
        z-index: 999;
        width: 40px;
        padding: 3px;
        aspect-ratio: 1;
        transform: rotate(45deg);
        opacity: 40%;
        &:hover{
            opacity: 100%;
        }
        > a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            aspect-ratio: 1;
            border: 2px solid black;

        }
        i{
            transform: rotate(45deg);
        }
    }
</style>
