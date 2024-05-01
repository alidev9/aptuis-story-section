const mileStoneItems = document.querySelectorAll('.milestone-item');

function fadeElement(element){
    const rect = element.querySelector('h4').getBoundingClientRect()
    const isInViewport = rect.top >= 0 &&
    rect.bottom <= window.innerHeight;
    if(isInViewport){
        element.querySelector('h3').classList.add('fade-in');
        element.querySelector('p').classList.add('fade-in');
        element.querySelector('img').classList.add('fade-in');
    } else {
        element.querySelector('h3').classList.remove('fade-in');
        element.querySelector('p').classList.remove('fade-in');
        element.querySelector('img').classList.remove('fade-in');
    }
}

function handleScroll(){
    for(let i = 0; i < mileStoneItems.length; i++){
        fadeElement(mileStoneItems[i]);
    }
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);