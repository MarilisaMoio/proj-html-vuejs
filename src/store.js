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
    ],
    items: [
        {
            name: "Joystick camo",
            rating: 4,
            img: "04.jpg",
            discounted: 44,
            price: 180,
            status: "feat"
        },{
            name: "Joystick camo",
            rating: 4,
            img: "04.jpg",
            discounted: 44,
            price: 180,
            status: "ehy"
        },{
            name: "Joystick camo",
            rating: 4,
            img: "04.jpg",
            discounted: 44,
            price: 180,
            status: "ehy"
        },{
            name: "Joystick camo",
            rating: 4,
            img: "04.jpg",
            discounted: 44,
            price: 180,
            status: "feat"
        },

    ]
})