<script>
    import { store } from "../store.js";

    export default{
        name: 'ItemCard',
        props: ["item"],
        data() {
            return {
            store,
            isLiked: false,
            isInCart: false,
            }
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href
            },
            likeBtn(){
                this.isLiked = !this.isLiked;
                this.isLiked ? store.wishlist += 1 : store.wishlist -= 1;
                
            },
            cartBtn(){
                this.isInCart = !this.isInCart
                if (this.isInCart === true){
                    store.inCart += 1;
                    this.item.discounted ? store.totalPrice += Math.round(this.item.price / 100 * (100 - this.item.discounted)) : store.totalPrice += this.item.price;
                } else {
                    store.inCart -= 1;
                    this.item.discounted ? store.totalPrice -= Math.round(this.item.price / 100 * (100 - this.item.discounted)) : store.totalPrice -= this.item.price;
                }
            }
        }
    }
</script>

<template>
    <div class="item-card">
        <div class="badge" v-if="item.discounted">
            <div class="badge-content">-{{ item.discounted }}%</div>
        </div>
        <img :src="getImageUrl(item.img)" :alt="item.name">
        <div class="content-wrapper">
            <div class="stars">
                <i class="fa-solid fa-star full" v-for="n in item.rating"></i>
                <i class="fa-solid fa-star empty" v-for="n in 5 - item.rating"></i>
            </div>
            <div class="item-name">{{ item.name }}</div>
            <span class="item-price" :class="{ discount: item.discounted }" >€{{ item.price }}</span>
            <span class="discount-price" v-if="item.discounted">€{{ Math.round(item.price / 100 * (100 - item.discounted)) }}</span>
            <div class="hover-icons">
                <div class="icon-border" @click="cartBtn()">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div class="icon-border" @click="likeBtn()">
                    <i class="fa-solid fa-heart" :class="{ liked: isLiked }"></i>
                </div>
                <div class="icon-border">
                    <i class="fa-solid fa-maximize"></i>
                </div>
                <div class="icon-border">
                    <i class="fa-solid fa-eye"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;
    
    .content-wrapper{
        background-color: $base_color;
        position: relative;
    }

    .item-card{
        position: relative;
        flex-grow: 0;
        flex-shrink: 0;
        .badge-content{
            font-weight: 400;
            font-size: 0.8rem;
        }
        .badge{
            position: absolute;
            top: 10px;
            left: 10px;
        }
    }

    .fa-star{
        text-shadow: 0px 0px 4px black;
        font-size: 0.7rem;
        &.full{
            color: orange;
        }
        &.empty{
            color: gray;
        }
    }

    .item-name{
        font-weight: 400;
        margin: 10px 0;
        margin-bottom: 16px;
    }

    .item-card{
        width: calc(25% - 10px);
        margin: 0 5px;
        img{
            width: 100%;
        }
    }

    [class*=price]{
        color: $primary_color;
        font-size: 1rem;
    }

    .content-wrapper{
        padding: 14px 16px;
    }

    .discount{
        color: $sub_text;
        text-decoration: line-through;
        margin-right: 6px
    }

    .icon-border{
        display: inline-block;
        width: 25%;
        border-top: 1px solid $border_color;
        padding: 6px;
        text-align: center;
        background-color: $base_color;
        cursor: pointer;
        .fa-solid{
            font-size: 0.8rem
        }
        & + & {
            border-left: 1px solid $border_color;
        }
    }

    .hover-icons{
        width: 259px;
        transition: 0.3s ease;
        position: absolute;
        bottom: 0;
        transform: translatey(100%);
        left: 0;
        .content-wrapper:hover & {
            transform: translateY(0);
        }
    }

    .liked{
        color: red
    }
</style>