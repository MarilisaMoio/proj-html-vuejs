<script>
    import AppHeader from "./components/AppHeader.vue"
    import AppHero from "./components/AppHero.vue"

    export default{
        components: {
            AppHeader,
            AppHero
        }
    }
</script>

<template>
    <AppHeader></AppHeader>
    <main>
        <AppHero></AppHero>
    </main>
</template>

<style lang="scss">
    @use './style/general' as *;

    main{
        background-image: url(./assets/img/body-bg.jpg);
        background-size: cover;
    }
</style>
