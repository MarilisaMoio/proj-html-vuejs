<script>
    import { store } from "../store.js"

    export default{
        name: 'CardOrLiked',
        props: ["CardOrLiked", "item", "index"],
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href
            },
            eliminateFromArray(index){
                if(this.CardOrLiked === "cart"){
                    store.inCart.splice(index, 1)
                    this.item.discounted ? store.totalPrice -= Math.round(this.item.price / 100 * (100 - this.item.discounted)) : store.totalPrice -= this.item.price;
                } else {
                    store.wishlist.splice(index, 1)
                }
            }
        }

    }
</script>

<template>
    <div :class="CardOrLiked + '-card'">
        <img :src="getImageUrl(item.img)" alt="">
        <div class="text-wrapper">
            <div class="item-name">{{ item.name }}</div>
            <span class="item-price" :class="{ discount: item.discounted }" >€{{ item.price }}</span>
            <span class="discount-price" v-if="item.discounted">€{{ Math.round(item.price / 100 * (100 - item.discounted)) }}</span>
        </div>
        <button type="button" @click="eliminateFromArray(index)">X</button>
    </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    [class*=card]{
        height: 80px;
        width: 250px;
        display: flex;
        align-items: center;
        position: relative;
        > img {
            height: 100%;
        }
    }

    .discount{
        color: $sub_text;
        text-decoration: line-through;
        margin-right: 6px
    }

    button{
        font-size: 1rem;
        background-color: transparent;
        color: $main_text;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        &:hover{
            color: $primary_color;
        }
    }

    //to contrast hover in parent
    .text-wrapper{
        color: $main_text;
    }
    .text-wrapper:hover{
        color: $main_text;
    }
</style>