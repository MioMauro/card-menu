const menuItems = [
    {
        id:1, // index 0
        item:"Food1 Item1",
        oneLiner: "One: Lorem Ipsum is simply dummy text of the printing and typesetting",
        img: "imgs/food1.jpg",
        hotel: "Food name1",
        desc: "One: Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
        id:2, // index 1
        item:"Food2 Item2",
        oneLiner: "Two: Ipsum is simply dummy text of the printing and typesetting",
        img: "imgs/food2.jpg",
        hotel: "Food name2",
        desc: "Two: Has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
        id:3, // index 2
        item:"Food3 Item3",
        oneLiner: "Tree: Ipsum Ipsum is simply dummy text of the printing and typesetting",
        img: "imgs/food3.jpg",
        hotel: "Food name3",
        desc: "Tree: Ipsum Ipsum IpsumHas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
        id:4, // index 3
        item:"Food4 Item4",
        oneLiner: "Four: Ipsum is simply dummy text of the printing and typesetting",
        img: "imgs/food4.jpg",
        hotel: "Food name4",
        desc: "Four: industry's Ipsum Ipsum IpsumHas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
    {
        id:5, // index 4
        item:"Food5 Item5",
        oneLiner: "Fifth: Ipsum is simply dummy text of the printing and typesetting",
        img: "imgs/food5.jpg",
        hotel: "Food name5",
        desc: "Fifth: industry's Ipsum Ipsum IpsumHas been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    },
]

const item = document.getElementById('item') // title
const oneLiner = document.getElementById('oneLiner') // subtitle
const img = document.getElementById('img') // images
const hotel = document.getElementById('hotel') // product name
const desc = document.getElementById('desc') // description
const prev = document.getElementById('prev') // prev btn
const random = document.getElementById('random') // random btn
const next = document.getElementById('next') // next btn

let currentMenu = 0

window.addEventListener('DOMContentLoaded', function(){
    //let menu = menuItems[currentMenu]
    //item.textContent = menu.item // display the title (item)
    //oneLiner.textContent = menu.oneLiner // subtitle
    //img.src=menu.img // images
    //hotel.textContent = menu.hotel // product name
    //desc.textContent = menu.desc // description product
    allMenu(currentMenu)
})

const allMenu = () => {
    let menu = menuItems[currentMenu]
    item.textContent = menu.item // display the title (item)
    oneLiner.textContent = menu.oneLiner // subtitle
    img.src=menu.img // images
    hotel.textContent = menu.hotel // product name
    desc.textContent = menu.desc // description product
}

// random menu
random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random()*menuItems.length)
    // console.log(currentMenu)
    allMenu(currentMenu)
})

// prev btn
prev.addEventListener('click', () => {
    currentMenu --
    if(currentMenu < 0){
        currentMenu = menuItems.length-1
    }
    allMenu(currentMenu)
})

// next btn
next.addEventListener('click', () => {
    currentMenu ++ 
    if(currentMenu > menuItems.length-1){
        currentMenu = 0
    }   
    allMenu(currentMenu)
})
