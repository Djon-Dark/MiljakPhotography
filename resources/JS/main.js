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
const ioscarousell = document.querySelector('.ioscarousell');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const footer = document.querySelector('footer');

//STATUS MESSAGES:
console.log(' STATUS: blog / galerija trebaju ostati selektirani u navbaru ako su otvoreni');
console.log(' STATUS: klik na link sa bloga na index loada pocetnu animaciju');
console.log(' STATUS: Na iOS workaround srediti poziciju slika');
/*
//whiteout - load animation
window.addEventListener('load',()=>{
    //navbar.classList.add('disable');
    setTimeout(() => {
        first.classList.remove('hide');
    }, 500);
    setTimeout(() => {
        second.classList.remove('hide');
    }, 2500);
    setTimeout(() => {
        whiteout.classList.add('hide');
        first.classList.add('white');
        second.classList.add('white');
    }, 4500);
    setTimeout(() => {
        whiteout.classList.add('disable');
        body.classList.remove('scroll-disabled');
    }, 7000);
})
//

//preload images to avoid flicker on first show
 const preloader = function () {
	if (document.images) {

		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();

		img1.src = "resources/images/zalazak2.jpg";
		img2.src = "resources/images/dorucak.jpg";
		img3.src = "resources/images/wellness2.jpg";
		img4.src = "resources/images/terasa.jpg";
		img5.src = "resources/images/bazenhotel.jpg";
		img6.src = "resources/images/plavikauc.jpg";
		img7.src = "resources/images/soba1.jpg";
	}
}
preloader();
//
*/
let isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent);

//main image carousell
const carousellBackground = ()=>{
    let i=0;
    setTimeout(() => {
    setInterval(() => {
        i+=1;
        //console.log(i);
        switch (i) {
            case 1: 
                one.style.background = "url('resources/images/curanakrevetu.jpg') bottom/cover";
                break;
            case 2: 
                one.style.background = "url('resources/images/dorucak.jpg') bottom/cover";    
                break;
            case 3: 
                one.style.background = "url('resources/images/wellness2.jpg') bottom/cover";
                break;
            case 4: 
                one.style.background = "url('resources/images/terasa.jpg') bottom/cover";
                break;
            case 5: 
                one.style.background = "url('resources/images/zalazak2.jpg') bottom/cover";
                break;
            case 6: 
                one.style.background = "url('resources/images/bazenhotel.jpg') bottom/cover";
                break;
            case 7: 
                one.style.background = "url('resources/images/plavikauc.jpg') bottom/cover";
                break;
            case 8: 
                one.style.background = "url('resources/images/soba1.jpg') bottom/cover";
                i=0;
                break;
            default:
                break;
        }
    }, 5000); 
    }, 3000)
}
if(!isApple){
    carousellBackground();
}
//iOS main image carousell
function slider (){
    const slides = document.querySelectorAll('.iosbackground');
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
if(isApple){
    slider();
    ioscarousell.style.display = 'block';
}