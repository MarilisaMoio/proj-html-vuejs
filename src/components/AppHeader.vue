<script>
    import { store } from "../store.js";
    import CartOrLiked from "./CartOrLiked.vue"

    export default{
        name: 'AppHeader',
        components: {
            CartOrLiked
        },
        data() {
            return {
                store,
                navItems: [
                    {
                        reference: "Home",
                        links: null,
                    },
                    {
                        reference: "Shop",
                        links: ["Shop for PC", "Shop for PS4/PS5", "Shop for xBox"],
                    },
                    {
                        reference: "Blog",
                        links: ["Latest News", "News on games", "News on consoles", "News on famous players"],
                    },
                    {
                        reference: "Media",
                        links: ["Images", "Videos"],
                    },
                    {
                        reference: "ShortCode",
                        links: null,
                    },
                    {
                        reference: "Features",
                        links: null,
                    },
                ],
                isNavActive: 0,
            }
        },
        methods: {
            thisIsActive(index){
                console.log(index)
                this.isNavActive = index;
            }
        }
    }
</script>

<template> 
    <header>
        <section class="top-header">
            <div class="container">
                <ul>
                    <li class="wishlist">
                        Wishlist({{ store.wishlist.length }})
                        <div class="wishlist-content">
                            <CartOrLiked v-for="item, index in store.wishlist" :CardOrLiked="'wishlist'" :item="item" :index="index"></CartOrLiked>
                        </div>
                    </li>
                    <li>Need Help? <i class="fa-solid fa-angle-up"></i></li>
                </ul>
                <div>
                    Call 24/7 . 800-8754-987
                </div>
            </div> 
        </section>
        <section class="main-header">
            <div class="container">
                <img src="../assets/img/logo.png" alt="">
                <ul class="items">
                    <li v-for="item, index in navItems">
                        <a :href="'#' + item.reference" :class="{ 'active': isNavActive === index }" @click="thisIsActive(index)" >{{ item.reference }}</a>
                        <div class="menu-content" v-if="item.links">
                            <ul>
                                <li v-for="link in item.links">
                                    <a href="#">{{ link }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul class="icons">
                    <li><div class="icon icon1"></div></li>
                    <li><div class="icon icon2"></div></li>
                    <li class="cart">
                        <div class="icon icon3"></div>
                        <span>({{ store.inCart.length }}) &euro;{{ store.totalPrice }}</span>
                        <div class="cart-content">
                            <CartOrLiked v-for="item, index in store.inCart" :CardOrLiked="'cart'" :item="item" :index="index"></CartOrLiked>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    header{
        background-color: $base_color;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 999;
        .top-header{
            color: $sub_text;
            border-bottom: 0.5px solid $border_color;
            .container{
                justify-content: space-between;
                padding: 12px;
                ul{
                    > * + * {
                    padding-left: 10px;
                    border-left: 0.5px solid $border_color
                    }
                    > * {
                        padding-right: 10px;
                        cursor: pointer;
                    }
                    i {
                        font-size: 0.6rem;
                        vertical-align: middle;
                    }
                }
                
            }
        }
        .main-header{
            .container{
                padding: 16px;
                justify-content: space-between;
                ul.items{
                    display: flex;
                    > * + * {
                    padding-left: 20px;
                    }
                    > * {
                        font-size: 1.1rem;
                        font-weight: 400;
                        cursor: pointer;
                    }
                }
                ul.icons{
                    display: flex;
                    > * {
                        font-size: 1.2rem;
                        padding: 0 8px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .icon{
        width: 30px;
        aspect-ratio: 1;
        background-image: url(../assets/img/nav-icon.png);
        background-repeat: no-repeat;
        background-size: 16px;
    }

    .icon1{
        background-position: 6px -55px;
        &:hover{
            background-position: 6px 6px;
        }
    }

    .icon2{
        background-position: 6px -175px;
        &:hover{
            background-position: 6px -114px;
        }
    }

    .icon3{
        background-position: 6px -296px;
        &:hover{
            background-position: 6px -235px;
        }
    }

    .cart{
        display: flex;
        position: relative;
        align-items: center;
        > * {
            display: inline-block;
            font-size: 1rem;
            font-weight: 300;
        }
        span{
            color: $primary_color
        }
        &:hover .cart-content{
            display: block;
        }
    }

    .container{
        display: flex;
    }

    li{
        position: relative;
        &:hover {
            color: $primary_color;
        }
        &:hover > .menu-content{
            display: block;
        }
        .menu-content{
            color: $sub_text;
            width: max-content;
            padding: 10px;
            display: none;
            position: absolute;
            bottom: 0;
            transform: translateY(100%);
            left: 10px;
            background-color: $base_color;
            border: 1px solid color-mix(in hsl, $base_color 70%, white 30%);
            li + li {
                margin-top: 10px
            }
        }
    }

    .container, ul:not(.menu-content > ul){
        display: flex
    }

    .cart-content{
        position: absolute;
        display: none;
        bottom: 0;
        transform: translateY(100%);
        right: 0px;
        background-color: $base_color;
        border: 1px solid color-mix(in hsl, $base_color 70%, white 30%);
    }

    .wishlist{
        position: relative;
        &:hover > .wishlist-content{
            display: block
        }
    }

    .wishlist-content{
        position: absolute;
        display: none;
        bottom: 0;
        transform: translateY(100%);
        left: 0px;
        background-color: $base_color;
        border: 1px solid color-mix(in hsl, $base_color 70%, white 30%);
    }
</style>