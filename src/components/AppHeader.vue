<script>
    export default{
        name: 'AppHeader',
        data() {
            return {
                wishlist: 0,
                navItems: ["Home", "Shop", "Blog", "Media", "ShortCorde", "Features"],
                isNavActive: 0,
                inCart: 0,
                totalPrice: 0,
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
                    <li>Wishlist({{ wishlist }})</li>
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
                    <li v-for="item, index in navItems"><a :href="'#' + item" :class="{ 'active': isNavActive === index }" @click="thisIsActive(index)" >{{ item }}</a></li>
                </ul>
                <ul class="icons">
                    <li><div class="icon icon1"></div></li>
                    <li><div class="icon icon2"></div></li>
                    <li class="cart"><div class="icon icon3"></div><span>({{ inCart }}) &euro;{{ totalPrice }}</span></li>
                </ul>
            </div>
        </section>
    </header>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    header{
        background-color: $base_color;
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
        align-items: center;
        > * {
            display: inline-block;
            font-size: 1rem;
            font-weight: 300;
        }
        span{
            color: $primary_color
        }
    }

    ul, .container{
        display: flex;
    }

</style>