
const aboutChoices = document.querySelectorAll('.about-product__list li');
const aboutDescription = document.querySelector('.bouquet-composition');
const aboutReviews = document.querySelector('.reviews__container');
const aboutAdvice = document.querySelector('.professional-advice');

for(let i = 0; i < aboutChoices.length;i++){
    aboutChoices[i].addEventListener('click',() => {
        for(let j = 0; j < aboutChoices.length;j++) aboutChoices[j].classList.remove('about-product__list-item--active');
        aboutChoices[i].classList.add('about-product__list-item--active');
        if(aboutChoices[i].textContent === "Описание"){
            aboutDescription.style.display = "block";
            aboutReviews.style.display = "none";
            aboutAdvice.style.display = "none";
        }
        if(aboutChoices[i].textContent === "Отзыв"){
            aboutDescription.style.display = "none";
            aboutReviews.style.display = "block";
            aboutAdvice.style.display = "none";
        }
        if(aboutChoices[i].textContent === "Совет"){
            aboutDescription.style.display = "none";
            aboutReviews.style.display = "none";
            aboutAdvice.style.display = "block";
        }
    }) 
}