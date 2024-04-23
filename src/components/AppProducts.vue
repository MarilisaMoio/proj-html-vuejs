<script>
    import ItemCarousel from "./ItemCarousel.vue"

    export default{
        name: 'AppProducts',
        components: {
            ItemCarousel
        },
        data(){
            return{
                isActive: "feat"
            }
        }
    }
</script>

<template>
    <div class="container">
        <h3 class="sec-title">Our Products</h3>
        <div class="btn-group">
            <button type="button" :class="{ 'active-btn': isActive === 'feat' }" @click="isActive = 'feat'">Featured</button>
            <button type="button" :class="{ 'active-btn': isActive === 'newarr' }" @click="isActive = 'newarr'">New Arrivals</button>
            <button type="button" :class="{ 'active-btn': isActive === 'bestsell' }" @click="isActive = 'bestsell'">Best Sellers</button>
        </div>
        <ItemCarousel :isActive="isActive"></ItemCarousel>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        padding-top: 60px;
        padding-bottom: 40px
    }

    .btn-group{
        text-align: center;
        margin: 25px
    }

    button{
        background-color: transparent;
        padding: 10px 20px;
        color: $main_text;
        border: 1px solid $border_color;
        cursor: pointer;
        & + button{
            border-left: none;
        }
    }

    .active-btn{
        color: $primary_color
    }

</style>