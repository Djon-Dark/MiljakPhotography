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
        first.classList.add('white');
        second.classList.add('white');
    }, 4500);
    setTimeout(() => {
        whiteout.classList.add('disable');
    }, 10000);
})
//

//main image carousell
const one = document.querySelector('.one');
let i=0;
setTimeout(() => {
   setInterval(() => {
    i+=1;
    console.log(i);
    if(i===5){
        i=0;
    }
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
        default:
            break;
    }
}, 5000); 
}, 6000);

        
   

    
