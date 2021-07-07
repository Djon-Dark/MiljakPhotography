const items = document.querySelectorAll('.item');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const fullsizeImg = document.querySelector('.fullsize-img');

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


