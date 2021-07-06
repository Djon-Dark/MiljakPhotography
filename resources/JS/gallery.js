const items = document.querySelectorAll('.item');
//const galleryImage = document.querySelectorAll('.gallery-image');

items.forEach(item => {
    item.addEventListener('click',()=>{
        item.classList.toggle('expand');
        setTimeout(() => {
            item.classList.toggle('overflow');
        }, 50);
        if(item.classList.contains('position')){
            setTimeout(() => {
                item.classList.toggle('position')
            }, 300);
            return;
        }
        item.classList.toggle('position');
    })
});