<script>
    export default{
        name: 'ItemCard',
        props: ["item"],
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href
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
        </div>
    </div>

</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;
    
    .content-wrapper{
        background-color: $base_color;
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
</style>