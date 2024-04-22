<script>
    import SingleBanner from "./SingleBanner.vue"

    export default{
        name: 'BannerSections',
        props: ["bannerOne", "bannerTwo"],
        components: {
            SingleBanner
        },
    }
</script>

<template>
    <section class="banner">
        <SingleBanner :content="bannerOne"></SingleBanner>
        <SingleBanner :content="bannerTwo"></SingleBanner>
    </section>
</template>

<style scoped lang="scss">

</style>