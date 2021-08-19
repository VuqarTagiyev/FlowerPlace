
const prevBtn = document.querySelector('.product__image-left-arrow');
const nextBtn = document.querySelector('.product__image-right-arrow');

// Buttons
const productImgSlider = document.querySelector('.product__image-slider');
const sliderImages = document.querySelectorAll('.product__image-slider img');

// Counter

let counter = 1;
const size = sliderImages[0].clientWidth;

productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";

// Button Listeners

nextBtn.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1) return;
    productImgSlider.style.transition = "transform .4s ease-in-out";
    counter++;
    productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    productImgSlider.style.transition = "transform .4s ease-in-out";
    counter--;
    productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";
})

productImgSlider.addEventListener('transitionend', () => {
    if(sliderImages[counter].id === "lastClone"){
        productImgSlider.style.transition = "none";
        counter = 1
        productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if(sliderImages[counter].id === "firstClone"){
        productImgSlider.style.transition = "none";
        counter = sliderImages.length - 2;
        productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";
    }
})

const showThatImage = (id) => {
    productImgSlider.style.transition = "transform .4s ease-in-out";
    counter = id;
    productImgSlider.style.transform = "translateX(" + (-size * counter) + "px)";
}




// CHECKBOX

const addCommentCheck = document.querySelector('.choose-postcard__add-comment-checkbox');
const addComment = document.querySelector('.choose-postcard__add-comment');
const addCommentTextarea = document.querySelector('.choose-postcard__add-comment textarea');

addCommentCheck.addEventListener('change', function() {
    if (this.checked) {
      addComment.style.height = "22.8rem";
      addComment.addEventListener("transitionend", () => {
        addCommentTextarea.focus();
      });
      
    } else {
        addComment.style.height = "0";
    }
  });



//   PostCard

const choosePostcard = document.querySelector('.choose-postcard');
let postcardIsOpen = false;

const openPostcard = () => {
    if(!postcardIsOpen){
        choosePostcard.style.display = "block";
        postcardIsOpen = !postcardIsOpen;
    } else{
        choosePostcard.style.display = "none";
        postcardIsOpen = !postcardIsOpen;
    }
}


// PRODUCT MODAL

const toggleProductModal = () => {
    const productModal = document.querySelector('.product-modal');
    productModal.classList.toggle('product-modal--active');
}


// CHOOSE SIZE

const productSizes = document.querySelectorAll('.product__size');


for(let i = 0; i < productSizes.length;i++){
    productSizes[i].addEventListener('click',() => {
        for(let j = 0; j < productSizes.length;j++) productSizes[j].classList.remove('product__size--active');
        productSizes[i].classList.add('product__size--active');

    }) 
}