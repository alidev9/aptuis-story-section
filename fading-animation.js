const mileStoneItems = document.querySelectorAll('.milestone-item');

function fadeInElement(element){
    /*If the story paragraph is in the viewport and not visible,
    fade in that paragraph, and the h3 and img associated with it*/
    const storyParagraph = element.querySelector('p');
    const rect = storyParagraph.getBoundingClientRect();
    const isInViewport = rect.bottom <= window.innerHeight;
    if(isInViewport && !storyParagraph.classList.contains('fade-in')){
        element.querySelector('h3').classList.add('fade-in');
        element.querySelector('p').classList.add('fade-in');
        element.querySelector('img').classList.add('fade-in');
    }
}

function handleScroll(){
    for(let i = 0; i < mileStoneItems.length; i++){
        fadeInElement(mileStoneItems[i]);
    }
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);