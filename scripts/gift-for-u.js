// SLIDER

const giftSlider = document.querySelector(".gifts-for-u__slider");
const giftSliderItem = document.querySelectorAll(
  ".gifts-for-u__slider .gifts-for-u__gift"
);

// BUTTONS

const giftSliderPrev = document.querySelector(".gifts-for-u__left-arrow");
const giftSliderNext = document.querySelector(".gifts-for-u__right-arrow");

// COUNTER

let giftCounter = 0;
const giftSize = giftSliderItem[0].clientWidth + 27;

// Button Listeners

giftSliderNext.addEventListener("click", () => {
  if (giftSliderItem.length - 5 > giftCounter) {
    giftSliderNext.style.opacity = "1";
    giftSlider.style.transition = "transform .4s ease-in-out";
    giftCounter++;
    giftSlider.style.transform =
      "translateX(" + -giftSize * giftCounter + "px)";
  }
});

giftSliderPrev.addEventListener("click", () => {
  if (0 < giftCounter) {
    giftSlider.style.transition = "transform .4s ease-in-out";
    giftCounter--;
    giftSlider.style.transform =
      "translateX(" + -giftSize * giftCounter + "px)";
  }
});

giftSlider.addEventListener("transitionend", () => {
  if (0 < giftCounter) {
    giftSliderPrev.style.opacity = "1";
  } else {
    giftSliderPrev.style.opacity = ".3";
  }

  if (giftSliderItem.length - 5 > giftCounter) {
    giftSliderNext.style.opacity = "1";
  } else {
    giftSliderNext.style.opacity = ".3";
  }
});
