<script>
    export default{
        name: 'ItemCard',
        props: ["item"],
    }
</script>

<template>
    <div class="item-card">
        {{ item.name }}
        {{ item.status }}
        <i class="fa-solid fa-star full" v-for="n in item.rating"></i>
        <i class="fa-solid fa-star empty" v-for="n in 5 - item.rating"></i>
    </div>

</template>

<style scoped lang="scss">
    .fa-star{
        text-shadow: 0px 0px 4px black;
        &.full{
            color: orange;
        }
        &.empty{
            color: gray;
        }
    }

</style>