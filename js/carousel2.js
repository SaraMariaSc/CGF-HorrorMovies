const track2 = document.querySelector('.carousel_track2');
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector('.carousel_button--right2');
const prevButton2 = document.querySelector('.carousel_button--left2');
const slideWidth2 = slides2[0].getBoundingClientRect().width;

const setSlidePosition2 = (slide2, index2) => {
    slide2.style.left = slideWidth2 * index2 + 'px';
};
slides2.forEach(setSlidePosition2)

const moveToSlide2 = (track2, currentSlide2, targetSlide2) =>{
    track2.style.transform = 'translateX(-'+ targetSlide2.style.left + ')';
    currentSlide2.classList.remove('current-slide2');
    targetSlide2.classList.add('current-slide2');
}
//when i click left button
prevButton2.addEventListener('click', e => {
    var currentSlide2 = track2.querySelector('.current-slide2');
    var prevSlide2 = currentSlide2.previousElementSibling;
    //move to the next slide
    moveToSlide2(track2,currentSlide2,prevSlide2);
});
//when i click right button
nextButton2.addEventListener('click', e => {
    var currentSlide2 = track2.querySelector('.current-slide2');
    var nextSlide2 = currentSlide2.nextElementSibling;
    //move to the next slide
    moveToSlide2(track2,currentSlide2,nextSlide2);
});