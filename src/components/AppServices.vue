<script>
    export default{
        name: 'AppServices'
    }
</script>

<template>
    <section class="services">
        <div class="container">
            <!-- ! RITAGLIA LE ICON -->
            <div class="card-services">
                <div class="icon icon1"></div>
                <div class="text-wrapper">
                    <div class="card-text">Free Delivery</div>
                    <div class="card-subtext">Free shipping on alla orders</div>
                </div>
            </div>
            <div class="card-services">
                <div class="icon icon2"></div>
                <div class="text-wrapper">
                    <div class="card-text">Free Delivery</div>
                    <div class="card-subtext">Free shipping on alla orders</div>
                </div>
            </div>
            <div class="card-services">
                <div class="icon icon3"></div>
                <div class="text-wrapper">
                    <div class="card-text">Free Delivery</div>
                    <div class="card-subtext">Free shipping on alla orders</div>
                </div>
            </div>
            <div class="card-services">
                <div class="icon icon4"></div>
                <div class="text-wrapper">
                    <div class="card-text">Free Delivery</div>
                    <div class="card-subtext">Free shipping on alla orders</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        padding: 40px 20px;
        display: flex;
        flex-grow: 1;
        > * + * {
            border-left: 0.5px solid $border_color;
        }
    }

    .card-services{
        display: flex;
        justify-content: center;
        gap: 6px;
        width: 25%;
        .card-text{
            font-weight: 500;
        }
        .card-subtext{
            margin-top: 4px;
            color: $sub_text;
            font-size: 0.8rem;
        }
    }

    .icon{
        width: 57px;
        height: 42px;
        background-image: url(../assets/img/service-icon.png);
        background-repeat: no-repeat;
    }

    .icon1{
        background-position: 0px -109px;
        .card-services:hover > &{
            background-position: 0px 4px;
        }
        .card-services:hover > & ~ div > .card-text{
            color: $primary_color;
        }
    }

    .icon2{
        background-position: 0px -335px;
        .card-services:hover > &{
            background-position: 0px -222px;
        }
        .card-services:hover > & ~ div > .card-text{
            color: $primary_color;
        }
    }

    .icon3{
        background-position: 0px -562px;
        .card-services:hover > &{
            background-position: 0px -449px;
        }
        .card-services:hover > & ~ div > .card-text{
            color: $primary_color;
        }
    }

    .icon4{
        background-position: 0px -788px;
        .card-services:hover > &{
            background-position: 0px -675px;
        }
        .card-services:hover > & ~ div > .card-text{
            color: $primary_color;
        }
    }
</style>