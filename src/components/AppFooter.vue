<script>
    export default{
        name: 'AppFooter',
        data(){
            return{
                lists: [
                {
                    title: "Address info",
                    content: [
                        {
                            icon: "location-dot",
                            text: "60 29th street San Francisco, CA 94110 507-Union Trade Center, United States Of America"
                        },
                        {
                            icon: "phone",
                            text: "(+00) 123-456-789"
                        },
                        {
                            icon: "envelope",
                            text: "info@gamehoak.com"
                        },
                    ]
                },
                {
                    title: "Address info",
                    links: ["Bookmark", "Features", "Sitemap", "Lists", "Contact Us"]
                },
                {
                    title: "Extras",
                    links: ["Delivery", "Cart", "Terms Conditions", "My Account", "AboutUs"]
                }
            ],
            socials: [ "facebook-f", "twitter", "google-plus-g", "skype", "instagram"]
            }
        }
    }
</script>

<template>
    <footer>
        <section class="footer-main">
            <div class="container">
                <div v-for="list in lists" class="list-container">
                    <h4>{{ list.title }}</h4>
                    <ul v-if="list.content">
                        <li v-for="info in list.content">
                            <div class="icon-sizer"><i :class="'fa-solid fa-' + info.icon"></i></div>
                            <div>{{ info.text }}</div>
                        </li>
                    </ul>
                    <ul v-else>
                        <li v-for="link in list.links"><a href="#">{{ link }}</a></li>
                    </ul>
                </div>
                <div class="newsletter">
                    <h4>Our Newsletter</h4>
                    <div class="newsl-text">Whether you play multiplayer or are single player only, receive the best video game news, deals, and more to your inbox.</div>
                    <div class="input-group">
                        <input type="text">
                        <div class="icon"></div>
                    </div>
                    <div class="socials">
                        <a href="#" v-for="social in socials"><i :class="'fa-brands fa-' + social"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="footer-bottom">
            <div class="container">
                <div class="copyright">Coopyright &copy; 2024 Boolean 122</div>
                <div class="payments">
                    <div v-for="n in 5" :class="'circuit circuit' + n"></div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    footer{
        background-image: url(../assets/img/footer-bg.png);
    }

    .footer-main{
        > .container{
            padding: 70px 0;
            display: flex;
            justify-content: space-between;
            > * {
                width:  calc(25% - 20px);
            }
        }
    }

    h4{
        margin-bottom: 20px;
    }

    .list-container{
        *:not(h4, i){
            font-size: 0.9rem;
            color: $sub_text;
        }
        li{
            display: flex;
            align-items: flex-start;
        }
        li + li{
            margin-top: 14px;
        }
        div{
            display:inline-block;
            max-width: calc(100% - 25px)
        }
        .icon-sizer{
            width: 25px;
            height: 100%;
        }
        i {
            color: $primary_color;
        }
        a:hover {
            color: $primary_color
        }
    }

    .newsletter{
        > *:not(h4) + *{
            margin-top: 20px;
        }
        .newsl-text{
            font-size: 0.9rem;
            color: $sub_text;
        }
        .input-group{
            height: fit-content;
            display: flex;
            input {
                flex-grow: 1;
                padding: 0px 6px;
            }
        }
        .socials{
            font-size: 1rem;
            i:hover{
                color: $primary_color;
            }
            > * + * {
                margin-left: 15px
            }
        }
    }

    .icon{
        background-image: url(../assets/img/newsletter.png);
        width: 30px;
        aspect-ratio: 1;
        padding: 10px;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        padding: 6px;
        overflow: hidden;
        background-color: $main_text;
        &:hover{
            background-position: calc(100% - 5px) calc(100% - 5px);
        }
    }

    .footer-bottom{
        border-top: 1px solid $border_color;
        .container{
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
            .payments{
                display: flex;
            }
            .copyright{
                color: $sub_text;
                font-size: 0.9rem;
            }
        }
    }


    .circuit{
        background-image: url(../assets/img/payments.png);
        width: 42px;
        height: 25px;
        overflow: hidden;
        background-size: 110%;
        & + & {
            margin-left: 10px;
        }
        &.circuit1{
            background-position: center -2px;
        }
        &.circuit2{
            background-position: center -45px;
        }
        &.circuit3{
            background-position: center -86px;
        }
        &.circuit4{
            background-position: center -130px;
        }
        &.circuit5{
            background-position: center -263px;
        }
    }

</style>