<script>
    import SpecialCard from "./SpecialCard.vue"

    export default{
        name: 'AppSpecial',
        components: {
            SpecialCard
        },
        data(){
            return {
                specialItems: [
                    {
                        name: "Battlefield 4",
                        img: "02"
                    },
                    {
                        name: "PUBG",
                        img: "01"
                    },
                    {
                        name: "Dragonball",
                        img: "03"
                    },
                ]
            }
        }
    }
</script>

<template>
    <section class="special">
            <div class="container">
            <h3 class="sec-title">Special Category</h3>
            <div class="card-wrapper">
                <SpecialCard v-for="item in specialItems" :item="item"></SpecialCard>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    h3.sec-title{
        margin-bottom: 40px;
    }

    .container{
        padding-top: 60px
    }

    .card-wrapper{
        display: flex;
        justify-content: space-between;
    }
</style>