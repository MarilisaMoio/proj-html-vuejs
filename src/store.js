import { reactive } from "vue";

export const store = reactive({
    banners: [
        {
            badge: "Most Popular",
            title: "The Battlefield 4 Naval Strike",
            img: "01"
        },
        {
            badge: "Latest Game",
            title: "Assassin's Creed Unity Game",
            img: "02"
        },
        {
            badge: "20% Discount",
            title: "Dragon's Dogma Video Game",
            img: "03"
        },
        {
            badge: "30% Discount",
            title: "World Of Tanks New Game",
            img: "04"
        }
    ]
})