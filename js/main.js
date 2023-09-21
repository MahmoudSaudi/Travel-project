let menu = document.querySelector ('#menu-btn');
let navbar = document.querySelector ('.header .navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onclick = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".reviews-slider",{
    loop:true,
    spaceBetween:20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
        640:{
            slidersPerView:1,
        },
        768:{
            slidersPerView:2,
        },
        1024:{
            slidersPerView:3,
        },
    },
});

