const body = document.querySelector('body');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navlink = document.querySelectorAll('.navlink');
const burger = document.querySelector('.burger');
const floatingText = document.querySelector('.floating-text');
const slogan = document.querySelector('.slogan');
const section = document.querySelectorAll('.section');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const whiteout = document.querySelector('.whiteout');
const backgroundSlideshow = document.querySelector('.background-slideshow');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const footer = document.querySelector('footer');

//STATUS MESSAGES:
console.log(' STATUS: na mobitelu carousell slike sjebane, treba ih izrezati i prilagoditi tim ekranima - IMAGESET');
console.log(' STATUS: Na iPad KAKO MOGU POMOCI VAMA gap nije podrzan za flex, napravi fallback');

let isApple = /iPhone|iPod/i.test(navigator.userAgent);

//main image carousell
function slider (){
    const slides = document.querySelectorAll('.background-slide');
    let i=0;
        setInterval(() => {
            slides[i].style.opacity = '1';
            i++;
            if(i===8){
                slides[1].style.opacity = '0';
                slides[2].style.opacity = '0';
                slides[3].style.opacity = '0';
                slides[4].style.opacity = '0';
                slides[5].style.opacity = '0';
                slides[6].style.opacity = '0';
                setTimeout(() => {
                i=0;
                slides[7].style.opacity = '0';
                }, 4900);
            }
        }, 5000);
}

slider();

