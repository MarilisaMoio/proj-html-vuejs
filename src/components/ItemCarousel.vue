<script>
    import { store } from "../store.js";
    import ItemCard from "./ItemCard.vue"
    export default{
        name: 'ItemCarousel',
        props: ["isActive"],
        components: {
            ItemCard,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="cards-wrapper">
        <!-- icon here -->
        <template v-for="item in store.items">
            <ItemCard v-if="item.status === isActive" :item="item"></ItemCard>
        </template>
        <!-- icon here -->
    </div>
</template>

<style scoped lang="scss">

</style>