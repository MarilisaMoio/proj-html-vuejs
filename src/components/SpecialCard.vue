<script>
    export default{
        name: 'SpecialCard',
        props: ["item"],
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/category-image-${name}-446x550_t.jpg`, import.meta.url).href
            }

        }
    }
</script>

<template>
    <div class="special-card">
        <img :src="getImageUrl(item.img)" alt="">
        <div class="content">
            <h4>{{ item.name }}</h4>
            <div class="shop-now">Shop now</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .special-card{
        width: calc(100% / 3 - 20px);
        position: relative;
        img{
            width: 100%;
        }
        &:hover .content{
            background-color: color-mix(in srgb, $base_color 85%, black 15%)
        } 
    }

    .content{
        position: absolute;
        width: 100%;
        padding: 20px 10px;
        bottom: 0;
        left: 0;
        background-color: color-mix(in srgb, $base_color 70%, rgba(255, 255, 255, 0) 30%);
        transition: 0.2s ease;
    }

    h4{
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 10px
    }
    
    .shop-now{
        color: $primary_color;
        text-decoration: underline;
        text-decoration-thickness: 0.5px;
    }
</style>