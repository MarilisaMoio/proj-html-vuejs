<script>
    import AppHeader from "./components/AppHeader.vue"
    import AppHero from "./components/AppHero.vue"
    import AppServices from "./components/AppServices.vue"

    export default{
        components: {
            AppHeader,
            AppHero,
            AppServices
        }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppHero></AppHero>
        <AppServices></AppServices>
    </main>
</template>

<style lang="scss">
    @use './style/general' as *;

    main{
        background-image: url(./assets/img/body-bg.jpg);
        background-size: cover;
    }
</style>
