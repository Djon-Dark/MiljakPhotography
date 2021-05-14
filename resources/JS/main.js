const body = document.querySelector('body');
const slogan = document.querySelector('.slogan');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const whiteout = document.querySelector('.whiteout');

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
function preloader() {
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

//main image carousell
const one = document.querySelector('.one');
let i=0;
setTimeout(() => {
   setInterval(() => {
    i+=1;
    //console.log(i);
    if(i===8){
        
    }
    switch (i) {
        case 1: 
            one.style.background = "url('resources/images/curanakrevetu.jpg') bottom/cover";
            slogan.style.textShadow= "0 0 1rem rgba(70, 70, 70, 0.5)";
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



const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

const navSlide = () => {
    burger.addEventListener('click', ()=>{    
        //Toggle nav
        //navbar.classList.toggle('disable');
        navbar.classList.toggle('navbar-open');   
        //Burger Animation
        burger.classList.toggle('toggle');
        //burger.classList.toggle('spin');
        body.classList.toggle('scroll-disabled');
        one.classList.toggle('blur');
    });
}
navSlide();


if(window.matchMedia("(max-width: 700px)")){
    const navlink = document.querySelectorAll('.navlink');
    navlink.forEach(link=>{
        link.addEventListener('click',()=>{
            //Toggle nav
            navbar.classList.remove('navbar-open');   
            //Burger Animation
            burger.classList.remove('toggle');
            //burger.classList.toggle('spin');
            body.classList.remove('scroll-disabled');
            one.classList.toggle('blur');
        })
    })
}