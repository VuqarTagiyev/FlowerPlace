// SLIDER

const reviewsSlider = document.querySelector(".reviews__slider");
const reviewsSliderItem = document.querySelectorAll(
  ".reviews__slider .reviews__item"
);

// BUTTONS

const reviewsPrev = document.querySelector(".reviews__left-arrow");
const reviewsNext = document.querySelector(".reviews__right-arrow");

// COUNTER

let reviewsCounter = 0;
let reviewsSize = reviewsSliderItem[0].clientWidth + 29;

// Button Listeners

const getNextReview = () => {
  reviewsSize = reviewsSliderItem[0].clientWidth + 29;
  if (reviewsSliderItem.length - 4 > reviewsCounter) {
    reviewsNext.style.opacity = "1";
    reviewsSlider.style.transition = "transform .4s ease-in-out";
    reviewsCounter++;
    reviewsSlider.style.transform =
      "translateX(" + -reviewsSize * reviewsCounter + "px)";
  }
};

const getPrevReview = () => {
  reviewsSize = reviewsSliderItem[0].clientWidth + 29;
  if (0 < reviewsCounter) {
    reviewsSlider.style.transition = "transform .4s ease-in-out";
    reviewsCounter--;
    reviewsSlider.style.transform =
      "translateX(" + -reviewsSize * reviewsCounter + "px)";
  }
};

reviewsSlider.addEventListener("transitionend", () => {
  if (0 < reviewsCounter) {
    reviewsPrev.style.opacity = "1";
  } else {
    reviewsPrev.style.opacity = ".3";
  }

  if (reviewsSliderItem.length - 4 > reviewsCounter) {
    reviewsNext.style.opacity = "1";
  } else {
    reviewsNext.style.opacity = ".3";
  }
});
