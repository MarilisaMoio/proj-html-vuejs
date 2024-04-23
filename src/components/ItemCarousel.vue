<script>
    import { store } from "../store.js";
    import ItemCard from "./ItemCard.vue"
    export default{
        name: 'ItemCarousel',
        props: ["itemPrinted"],
        components: {
            ItemCard,
        },
        data(){
            return{
                store,
            }
        },
        methods: {
            moveFoward(){
                if (this.itemPrinted.length > store.lastVisible){
                    console.log("ehiii")
                    ++store.lastVisible;
                    store.movement += -285
                } else {
                    store.lastVisible = 4;
                    store.movement = 0;
                }
            },
            moveBackward(){
                if (store.lastVisible > 4){
                    --store.lastVisible;
                    store.movement += 285
                } else {
                    store.lastVisible = this.itemPrinted.length;
                    store.movement = -285 * (this.itemPrinted.length - 4);
                }
            },
        }
    }
</script>

<template>
    <div class="carousel">
        <!-- icon here-->
        <div class="icon-arrows arrow-previous" @click="moveBackward()" v-if="itemPrinted.length > 4"></div>
        <div class="inner-carousel">
            <div class="cards-wrapper" :style="{left: store.movement + 'px'}">
                <template v-for="item in itemPrinted">
                    <ItemCard :item="item"></ItemCard>
                </template>
            </div>
        </div>
        <div class="icon-arrows arrow-foward" @click="moveFoward()" v-if="itemPrinted.length > 4"></div>
    </div>
</template>

<style scoped lang="scss">
    .cards-wrapper{
        display: flex;
        transition: left 0.3s ease;
        position: relative;
    }

    .carousel{
        width: 100%;
        position: relative;
    }

    .inner-carousel{
        overflow:hidden
    }

    .icon-arrows{
        width: 32px;
        aspect-ratio: 1;
        background-image: url(../assets/img/arrow.png);
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        cursor: pointer;
    }

    .arrow-previous{
        left: -10px;
        background-position: 0 100%;
        &:hover{
            background-position: 0 2px;
        }
    }

    .arrow-foward{
        right: -10px;
        background-position: 100% 100%;
        &:hover{
            background-position: 100% 2px;
        }
    }
</style>