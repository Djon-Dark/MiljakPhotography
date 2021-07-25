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
        
    }, 4500);
    setTimeout(() => {
        whiteout.classList.add('disable');
        body.classList.remove('scroll-disabled');
		slogan.classList.add('move-back');
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