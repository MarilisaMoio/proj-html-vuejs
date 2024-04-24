<script>
    export default{
        name: 'AppBlog',
        data(){
            return {
                articles: [
                    {
                        title: "Hades 2 Is Already An Exciting Sequel With Confident Changes",
                        date: "Dec 14, 2023",
                        comments: 1,
                        img: "Nisi-ut-aliquid-ex-ea-com.jpg"
                    },
                    {
                        title: "Fortnite Festival Is Getting An Unexpected Crossover",
                        date: "Feb 02, 2024",
                        comments: 2,
                        img: "Rerum-facilis-est-et-exped.jpg"
                    },
                    {
                        title: "Next Xbox Showcase Coming April 29",
                        date: "Apr 02, 2024",
                        comments: 5,
                        img: "Omnis-iste-natus-error-sit.jpg"
                    },
                ]
            }
        },
        methods: {
            getImageUrl(name) {
                return new URL(`../assets/img/${name}`, import.meta.url).href
            }
        }
    }
</script>

<template>
    <section class="blog">
        <div class="container">
            <h3 class="sec-title">New Game Blogs</h3>
            <div class="blog-wrapper">
                <article v-for="article in articles">
                    <img :src="getImageUrl(article.img)" alt="article img">
                    <div clas="article-info">
                        <span class="date"><i class="fa-solid fa-calendar-days"></i> {{ article.date }}</span>
                        <span class="comments"><i class="fa-solid fa-comments"></i> {{ article.comments }} comments</span>
                    </div>
                    <h5>{{ article.title }}</h5>
                </article>
            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        padding: 60px 0,
    }

    h3.sec-title{
        margin-bottom: 30px
    }

    .blog-wrapper{
        display: flex;
        justify-content: space-between;
        > article {
            width: calc(100% / 3 - 15px);
            > * + *{
                margin-top: 10px
            }
            img {
                width: 100%;
            }
            span{
                color: $sub_text;
                font-size: 0.8rem;
                & + *{
                    margin-left: 10px;
                }
                > i{
                    color: $primary_color
                }
            }
        }
    }
</style>