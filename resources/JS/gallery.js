const items = document.querySelectorAll('.item');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const fullsizeImg = document.querySelector('.fullsize-img');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const galleryImage = document.querySelectorAll('.gallery-image');

// Open modal
items.forEach(item => {
    item.addEventListener('click',()=>{
        body.classList.add('scroll-disabled');
        modal.style.top = window.scrollY + 'px';
        modal.classList.remove('disable');
        setTimeout(() => {
          modal.classList.remove('hide');  
        }, 50);

        // show clicked image in fullsize
        let clickedImage = item.firstElementChild;
        fullsizeImg.src = clickedImage.src;

        //return index of clicked image
        // -------------------------------------------
        for (var i = 0; i < galleryImage.length; i++)
        {
            (function(index){
                galleryImage[i].onclick = function(){
                    let clicked = index;
                }    
            })(i);
        }
        // -------------------------------------------

    })
});

// Close modal
closeModal.addEventListener('click',()=>{
    modal.classList.add('hide');
    body.classList.remove('scroll-disabled');
    setTimeout(() => {
        modal.classList.add('disable');
    }, 200);
})

// Previous / Next button functionality

// Previous Button
previousBtn.addEventListener('click',()=>{
    fullsizeImg.src = galleryImage[clicked-1].src;
})


