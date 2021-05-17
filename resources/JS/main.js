const body = document.querySelector('body');
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const floatingText = document.querySelector('.floating-text');
const slogan = document.querySelector('.slogan');
const section = document.querySelectorAll('.section');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const whiteout = document.querySelector('.whiteout');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const footer = document.querySelector('footer');

console.log(' STATUS: NA IOS FADE ANIMACIJA NE RADI KAKO TREBA, ZADNJA SLIKA SE PRESKOCI ILI TSKO NESTO')
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
const carousellBackground = ()=>{
    let i=0;
    setTimeout(() => {
    setInterval(() => {
        i+=1;
        //console.log(i);
        switch (i) {
            case 1: 
                one.style.background = "url('resources/images/curanakrevetu.jpg') bottom/cover fixed";
                slogan.style.textShadow= "0 0 1rem rgba(70, 70, 70, 0.5)";
                break;
            case 2: 
                one.style.background = "url('resources/images/dorucak.jpg') bottom/cover fixed";    
                break;
            case 3: 
                one.style.background = "url('resources/images/wellness2.jpg') bottom/cover fixed";
                break;
            case 4: 
                one.style.background = "url('resources/images/terasa.jpg') bottom/cover fixed";
                break;
            case 5: 
                one.style.background = "url('resources/images/zalazak2.jpg') bottom/cover fixed";
                break;
            case 6: 
                one.style.background = "url('resources/images/bazenhotel.jpg') bottom/cover fixed";
                break;
            case 7: 
                one.style.background = "url('resources/images/plavikauc.jpg') bottom/cover fixed";
                break;
            case 8: 
                one.style.background = "url('resources/images/soba1.jpg') bottom/cover fixed";
                i=0;
                break;
            default:
                break;
        }
    }, 5000); 
    }, 3000)
}
//carousellBackground(); OVO OTKOMENTIRAJ DA VRATIS CAROUSELL U NORMALU +++++++++++++++++++++++++++++++++


const navbarAnimation = ()=>{
    if(!navbar.classList.contains('disable')){
        //Burger Animation
        burger.classList.toggle('toggle');
        //Toggle nav
        navbar.classList.toggle('navbar-open');   
        body.classList.toggle('scroll-disabled');
        section.forEach(element => {
            element.classList.toggle('blur');
        });
        footer.classList.toggle('blur');
        setTimeout(() => {
            navbar.classList.add('disable');
            header.style.zIndex = '3';
        }, 200);
        return;
    }
    navbar.classList.remove('disable');
    //SAKRIVANJE NASLOVA I SLOGANA *********************************************************
    header.style.zIndex = '6';
    setTimeout(() => {
        //Burger Animation
        burger.classList.toggle('toggle');
        //Toggle nav
        navbar.classList.toggle('navbar-open');   
        body.classList.toggle('scroll-disabled');
        section.forEach(element => {
            element.classList.toggle('blur');
        });
        footer.classList.toggle('blur');
    }, 50);
}

const burgerInteraction = () => {
    burger.addEventListener('click', navbarAnimation);
}


//navlink functionality - close the navbar when clicked and toggle burger state
const mediaQuery = window.matchMedia('(max-width: 500px)')
if(mediaQuery.matches){
    navbar.classList.add('disable');
    burgerInteraction();
    const navlink = document.querySelectorAll('.navlink');
    navlink.forEach(link=>{
        link.addEventListener('click', navbarAnimation)
    })


    //iOS workaround for background-attachment: fixed
    /* blica, ne svidja mi se ++++++++++++++++++++++++++++++++++++++++++
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("iosbackground");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
    */
   //FADE
   function slider (){
        const slides = document.querySelectorAll('.iosbackground');
        let i=0;
        setInterval(() => {
            let previous = i-1;
            let next = i+1;
            //slides[previous].style.opacity = '0';
            //console.log(slides[i-1]);
            //slides[i+1].style.opacity = '0';
            slides[i].style.opacity = '1';
            //slides[next].style.opacity = '0';
            //console.log(previous);
            //console.log(next);
            i++;
            if(i===7){
                setTimeout(() => {
                i=0;
                slides[1].style.opacity = '0';
                slides[2].style.opacity = '0';
                slides[3].style.opacity = '0';
                slides[4].style.opacity = '0';
                slides[5].style.opacity = '0';
                slides[6].style.opacity = '0';
                slides[7].style.opacity = '0';
                }, 2000);
            }
            console.log(i);
        }, 2000);

   }
   slider();

}



//Actually, doesn't fix footer, instead it hides floating text and slogan when covered by section two
//so it doesnt show on top of footer
function fixFooter(){
    setInterval(() => {
        const twoToTop = two.getBoundingClientRect().top;
    if(twoToTop<=-500){
        floatingText.style.opacity = 0;
        slogan.style.opacity = 0;
    } else{
        floatingText.style.opacity = 1;
        slogan.style.opacity = 1;
    }
    }, 500);
}

//debounce
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
//

let handleScrollStart = debounce(fixFooter,100,true);
window.addEventListener('scroll',handleScrollStart);


