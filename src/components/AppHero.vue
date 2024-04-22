<script>
    export default{
        name: 'AppHero'
    }
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="badge">
                    <div class="badge-content">Upcoming Stack</div>
                </div>
                <h2>Resident Evil 3 Remake</h2>
                <button type="button">Shop Now</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        display: flex;
        align-items: center;
    }

    .hero{
        height: 750px;
        overflow: hidden;
        background-image: url(../assets/img/parallax.jpg); // ! PLACEHOLDER IMG - ASK FOR THE CORRECT ONE
        background-position: center;
    }

    button{
        background-color: $main_text;
        transition: 300ms;
        padding: 12px 28px;
        &:hover{
            background-color: $primary_color;
            position: relative;
            bottom: 3px;
            box-shadow: 0px 2px 2px black;
        }
    }

    h2{
        font-weight: 500;
        font-size: 4rem;
        margin-bottom: 100px;
        margin-top: 30px;
    }

    .hero-content{
        width: 50%;
    }

    .badge{
        padding: 3px 20px;
        .badge-content{
            font-size: 1.7rem;
        }
    }
</style>