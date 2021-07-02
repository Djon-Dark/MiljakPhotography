const body = document.querySelector('body');
const theme = document.querySelector('#theme');
theme.addEventListener('click',()=>{
    body.classList.toggle('light-theme');
    if(body.classList.contains('light-theme')){
        theme.innerHTML = '<i class="fas fa-toggle-on"></i>';
        return;
    }
    theme.innerHTML = '<i class="fas fa-toggle-off"></i>';
})