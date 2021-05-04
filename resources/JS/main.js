const first = document.querySelector('.first');
const second = document.querySelector('.second');
const whiteout = document.querySelector('.whiteout');

//whiteout - load animation
window.addEventListener('load',()=>{
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
    }, 7000);
})
//

//main image carousell
const one = document.querySelector('.one');
for(let i=0; i<5; i++){
    setTimeout(() => {
       // one.style.background = "url('../images/dorucak.jpg')";
        i+=1;
    }, 5000);
}