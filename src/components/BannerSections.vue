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
        <div class="container">
            <SingleBanner :content="bannerOne"></SingleBanner>
            <SingleBanner :content="bannerTwo"></SingleBanner>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .container{
        display: flex;
        justify-content: space-between;
    }

</style>