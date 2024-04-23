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
            name: "Joystick xBox",
            rating: 3,
            img: "01.jpg",
            discounted: null,
            price: 35,
            status: "newarr"
        },{
            name: "Headphones basic",
            rating: 4,
            img: "02.jpg",
            discounted: null,
            price: 50,
            status: "feat"
        },{
            name: "Mousepad ergonomico",
            rating: 3,
            img: "03.jpg",
            discounted: null,
            price: 25,
            status: "feat"
        },
        {
            name: "Oculus Rift",
            rating: 5,
            img: "05.jpg",
            discounted: null,
            price: 190,
            status: "bestsell"
        },
        {
            name: "Headphones Sony",
            rating: 4,
            img: "06.jpg",
            discounted: null,
            price: 140,
            status: "bestsell"
        },
        {
            name: "Joystick PS4 Flames",
            rating: 2,
            img: "07.jpg",
            discounted: 25,
            price: 45,
            status: "feat"
        },
        {
            name: "Joystick PS4 Zebra",
            rating: 1,
            img: "08.jpg",
            discounted: 30,
            price: 45,
            status: "feat"
        },
        {
            name: "AverMedia",
            rating: 5,
            img: "09.jpg",
            discounted: 20,
            price: 140,
            status: "bestsell"
        },
        {
            name: "Joystick Retro",
            rating: 5,
            img: "10.jpg",
            discounted: null,
            price: 60,
            status: "newarr"
        },
        {
            name: "Joystick base",
            rating: 4,
            img: "11.jpg",
            discounted: 15,
            price: 35,
            status: "bestsell"
        },
        {
            name: "Sony MDR 1ABT",
            rating: 5,
            img: "12.jpg",
            discounted: null,
            price: 95,
            status: "feat"
        },
        {
            name: "Joystick xBox Camo",
            rating: 3,
            img: "13.jpg",
            discounted: null,
            price: 60,
            status: "newarr"
        },
        {
            name: "Headphones Beats",
            rating: 4,
            img: "14.jpg",
            discounted: 10,
            price: 80,
            status: "bestsell"
        },
        {
            name: "GTA V",
            rating: 4,
            img: "17.jpg",
            discounted: null,
            price: 50,
            status: "feat"
        },
        {
            name: "Mouse Razor",
            rating: 5,
            img: "18.jpg",
            discounted: null,
            price: 60,
            status: "newarr"
        },
    ],
    inCart: 0,
    totalPrice: 0,
    wishlist: 0,
    
})