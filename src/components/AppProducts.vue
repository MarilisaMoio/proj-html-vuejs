<script>
    import ItemCarousel from "./ItemCarousel.vue"
    import { store } from "../store.js"

    export default{
        name: 'AppProducts',
        components: {
            ItemCarousel
        },
        data(){
            return{
                store,
                isActive: "feat",
                itemPrinted: []
            }
        },
        methods: {
            shownItems(){
                this.itemPrinted = [];
                store.items.forEach((item) => {
                    if (item.status === this.isActive){
                        this.itemPrinted.push(item)
                    }
                })
            }
        },
        mounted(){
            this.shownItems()
        }
    }
</script>

<template>
    <section class="products">
        <div class="container">
            <h3 class="sec-title">Our Products</h3>
            <div class="btn-group">
                <button type="button" :class="{ 'active-btn': isActive === 'feat' }" @click="isActive = 'feat', shownItems(), store.movement = 0, store.lastVisible = 4">Featured</button>
                <button type="button" :class="{ 'active-btn': isActive === 'newarr' }" @click="isActive = 'newarr', shownItems(), store.movement = 0, store.lastVisible = 4">New Arrivals</button>
                <button type="button" :class="{ 'active-btn': isActive === 'bestsell' }" @click="isActive = 'bestsell', shownItems(), store.movement = 0, store.lastVisible = 4">Best Sellers</button>
            </div>
            <ItemCarousel :itemPrinted="itemPrinted"></ItemCarousel>
        </div>
    </section>
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