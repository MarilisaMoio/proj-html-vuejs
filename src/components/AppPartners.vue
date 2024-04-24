<script>
    export default{
        name: 'AppPartners',
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/brand-0${name}.png`, import.meta.url).href
            }
        }
    }
    
</script>

<template>
    <section class="partners">
        <div class="container">
            <img v-for="n in 5" :src="getImageUrl(n)" alt="">
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;
    
    .container{
        display: flex;
        padding: 40px 0;
        justify-content: space-around;
        border-top: 0.5px solid $border_color
    }

</style>