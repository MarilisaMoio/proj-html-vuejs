<script>
    import DealsCarousel from "./DealsCarousel.vue"
    import { store } from "../store.js"

    export default{
        name: 'AppDeals',
        components: {
            DealsCarousel
        },
        data(){
            return{
                store,
                itemPrinted: [],
                seconds: 60,
                minutes: 59,
                hours: 23,
                days: 1,
            }
        },
        methods: {
            shownDiscounted(){
                this.itemPrinted = [];
                store.items.forEach((item) => {
                    if (item.discounted){
                        this.itemPrinted.push(item)
                    }
                })
            },
            minutesPassing(){
                setInterval(() => {
                    this.seconds -= 1;
                    if (this.seconds === 0){
                        this.seconds = 60;
                        this.minutes -= 1;
                    }
                    if(this.minutes === 0){
                        this.minutes = 59;
                        this.hours -= 1;
                    }
                }, 1000)

            }
        },
        mounted(){
            this.shownDiscounted();
            this.minutesPassing()
        }
    }
</script>

<template>
    <section class="deals">
        <div class="container">
            <h3 class="sec-title">Deals of The Day</h3>
            <div class="timer-group">
                <div class="days">{{ days }} {{ days > 1 ? "days" : "day" }}</div>
                <div class="hours">{{ hours }} {{ hours > 1 ? "hours" : "hour" }}</div>
                <div class="minutes">{{ minutes }} {{ minutes > 1 ? "minutes" : "minute" }}</div>
                <div class="seconds">{{ seconds }} {{ seconds > 1 ? "seconds" : "second" }}</div>
            </div>
            <DealsCarousel :itemPrinted="itemPrinted"></DealsCarousel>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        padding-top: 60px;
        padding-bottom: 40px
    }

    .timer-group{
        text-align: center;
        margin: 25px;
        div{
            display: inline-block;
            padding: 10px 20px;
            color: $main_text;
            border: 1px solid $border_color;
            & + & {
                border-left: none;
            }
        }
    }


    .active-btn{
        color: $primary_color
    }

</style>