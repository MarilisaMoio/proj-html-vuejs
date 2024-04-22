<script>
    export default{
        name: 'SingleBanner',
        props: ["content"],
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/cms-banner-${name}.jpg`, import.meta.url).href
            }
        }
    }
</script>

<template>
    <div class="single-banner">
        <img :src="getImageUrl(content.img)" alt="">
        <div class="content-wrapper">
            <div class="badge">
                <div class="badge-content">{{ content.badge }}</div>
            </div>
            <h3>{{ content.title }}</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .single-banner{
        position: relative;
        width: calc(100% / 2 - 5px);
        > img{
            width: 100%;
        }
        .content-wrapper{
            width: 50%;
            position: absolute;
            z-index: 1;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            h3{
                font-size: 2rem;
                font-weight: 500;
            }
        }
        .badge{
            margin-bottom: 15px
        }
    }


</style>