const article = document.querySelector('.article_container');
const reviews = Array.from(article.children);
const noSpoilers = document.querySelector('.no-spoiler');
const spoilers = document.querySelector('.spoiler');

const reviewWidth = reviews[0].getBoundingClientRect().width;

const setReviewPosition = (review, index) => {
    review.style.left = reviewWidth * index + 'px';
};
reviews.forEach(setReviewPosition)

const moveToReview = (article, currentArticle, targetArticle) =>{
    article.style.transform = 'translateX(-'+ targetReview.style.left + ')';
    currentArticle.classList.remove('current-article');
    targetArticle.classList.add('current-article');
}
//when i click left button
noSpoilers.addEventListener('click', e => {
    var currentReview = track.querySelector('.current-article');
    var prevReview = currentSlide.previousElementSibling;
    //move to the next slide
    moveToSlide(article,currentReview,prevReview);
});
//when i click right button
spoilers.addEventListener('click', e => {
    var currentReview = article.querySelector('.current-article');
    var nextReview = currentReview.nextElementSibling;
    //move to the next slide
    moveToSlide(article,currentReview,nextReview);
});