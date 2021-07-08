const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const fullsizeImg = document.querySelector('.fullsize-img');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelectorAll('.gallery-image');

// index gallery
for(let i=0; i<galleryImage.length; i++){
    galleryImage[i].dataset.index = i;
}

// click on image
galleryImage.forEach(item => {
    item.addEventListener('click',()=>{
        // Open modal
        body.classList.add('scroll-disabled');
        modal.style.top = window.scrollY + 'px';
        modal.classList.remove('disable');
        setTimeout(() => {
          modal.classList.remove('hide');  
        }, 50);

        // show clicked image in fullsize
        fullsizeImg.src = galleryImage[clickedImage].src;
        n = 0;
    })
});

// get index of clicked image
gallery.addEventListener('mouseup',(e)=>{
    clickedImage = e.target.dataset.index;
});

// Previous Button
previousBtn.addEventListener('click',()=>{
    n=n+1;
    currentIndex = clickedImage-n;
    if(currentIndex<0){
        n=n-1;
        currentIndex=0;
    }
    fullsizeImg.src = galleryImage[currentIndex].src;
})

// Next Button
nextBtn.addEventListener('click',()=>{
    n=n-1;
    currentIndex = clickedImage-n;
    if(currentIndex>galleryImage.length-1){
        n=n+1;
        currentIndex=galleryImage.length-1;
    }
    fullsizeImg.src = galleryImage[currentIndex].src;
})

// Close modal
closeModal.addEventListener('click',()=>{
    modal.classList.add('hide');
    body.classList.remove('scroll-disabled');
    setTimeout(() => {
        modal.classList.add('disable');
    }, 200);
})
