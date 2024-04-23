<script>
    export default{
        name: 'AppQuotes',
        data(){
            return {
                active: 0,
                members: [
                    {
                        name: "Luies Charles",
                        role: "Web Designer",
                        img: "t5",
                        quote: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow!"
                    },
                    {
                        name: "Hernando Guerra",
                        role: "Product Designer",
                        img: "t2",
                        quote: "Okay, um, ogres are like onions. Onions have layers. Ogres have layers! Onions have layers. You get it? We both have layers. Ogres are not like cakes."
                    },
                    {
                        name: "Gerry Scotti",
                        role: "CEO",
                        img: "t4",
                        quote: "I'm a CEO and I'll say something serious: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable."
                    }
                ]
            }
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}-1-100x100_left.jpg`, import.meta.url).href
            },
            activeQuote(index) {
                this.active = index
            }
        }
    }
</script>

<template>  
    <section class="quotes">
        <div class="container">
            <div class="quote">
                <div class="img-wrapper">
                    <div class="img-clipper">
                        <img :src="getImageUrl(members[active].img)" alt="">
                    </div>
                    <div class="icon-wrapper">
                        <img src="../assets/img/quote.png" alt="">
                    </div>
                </div>
                <div class="text-wrapper">
                    <div class="member-name">{{ members[active].name }} <span class="member-role">({{members[active].role }})</span></div>
                    <div class="member-quote">{{ members[active].quote }}</div>
                </div>
                <div class="btn-wrapper">
                    <div v-for="member, index in members" @click="activeQuote(index)" class="dot" :class="{ selected: active === index  }"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .quotes{
        background-image: url(../assets/img/parallax.jpg);
        background-position: center;
    }

    .quote{
        margin: 0 auto;
        padding: 60px 0;
        max-width: 900px;
        * + *:not(.btn-wrapper, .dot, .icon-wrapper) {
            margin-top: 30px
        }
    }

    .img-wrapper{
        position: relative;
        margin: 0 auto;
        width: fit-content;
        .img-clipper{
            width: fit-content;
            aspect-ratio: 1;
            border: 2px solid $primary_color;
            border-radius: 50%;
            overflow: hidden;
        }
        .icon-wrapper{
            background-color: $primary_color;
            width: fit-content;
            padding: 4px 8px;
            border-radius: 50%;
            position: absolute;
            top: 8px;
            left: 0px;
        }
    }

    .text-wrapper{
        text-align: center;
        .member-name, & .member-role{
            font-size: 1.2rem;
            font-weight: 400;
        }
        .member-role{
            color: $primary_color;
        }
        .member-quote{
            height: 100px;
            color: $sub_text;
            line-height: 2rem;
        }
    }

    .btn-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px
    }

    div.dot{
        height: 10px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: $main_text;
        & + & {
            margin-left: 10px
        }
        cursor:pointer;
        &.selected{
            background-color: $primary_color;
            height: 12px;
        }
    }

</style>