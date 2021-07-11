const referencesContainer = document.querySelector('.references-container');
const references = document.querySelectorAll('.reference');

let elementWidth = referencesContainer.offsetWidth;

let counter = 0;
setInterval(() => {
    referencesContainer.scrollBy({
        left: elementWidth,
        behavior: 'smooth',
      });
    counter ++;
    if(counter === 4){
        referencesContainer.scrollBy({
            behavior: 'auto',
            left: 4*-elementWidth,
          });
        counter = 0;
    }
}, 4000);