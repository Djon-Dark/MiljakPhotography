const body = document.querySelector('body');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.navlink');
const burger = document.querySelector('.burger');
const social = document.querySelector('.social');

const navbarAnimation = ()=>{
    //HIDE NAV MENU
    if(!navbar.classList.contains('disable')){
        //Burger Animation
        burger.classList.toggle('toggle');
        //Toggle nav
        navbar.classList.toggle('navbar-open');   
        //Disable scroll
        body.classList.toggle('scroll-disabled');
        //Disable navbar on load
        setTimeout(() => {
            navbar.classList.add('disable');
        }, 200);
        return;
    }
    //DISPLAY NAV MENU
        //First remove display:none
    navbar.classList.remove('disable');
        //bring header to front
        //wait 50ms so display: block comes in to effect
    setTimeout(() => {
        //Burger Animation
        burger.classList.toggle('toggle');
        //Toggle nav
        navbar.classList.toggle('navbar-open');   
        //Disable scroll
        body.classList.toggle('scroll-disabled');
    }, 50);
}

const burgerInteraction = () => {
    burger.addEventListener('click', navbarAnimation);
}

burgerInteraction();

//MEDIA QUERY =======================================================================
const mediaQuery = window.matchMedia('(max-width: 768px)')
if(mediaQuery.matches){
    //navlink functionality - close the navbar when clicked and toggle burger state
    navbar.classList.add('disable');
    burgerInteraction();
    const navlink = document.querySelectorAll('.navlink');
    navlink.forEach(link=>{
        link.addEventListener('click', navbarAnimation)
    })
}
