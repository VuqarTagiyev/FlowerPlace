// SLIDER

const postcardSlider = document.querySelector(".choose-postcard__slider");
const postcardSliderItem = document.querySelectorAll(
  ".choose-postcard__slider .choose-postcard__slider-item"
);

// BUTTONS

const cpPrevBtn = document.querySelector("#CP_prevBtn");
const cpNextBtn = document.querySelector("#CP_nextBtn");

// COUNTER

let pCardCounter = 0;
let pCardSize = postcardSliderItem[0].clientWidth + 8;

// Button Listeners

cpNextBtn.addEventListener("click", () => {
  pCardSize = postcardSliderItem[0].clientWidth + 8;
  if (postcardSliderItem.length - 6 > pCardCounter) {
    cpNextBtn.style.opacity = "1";
    postcardSlider.style.transition = "transform .4s ease-in-out";
    pCardCounter++;
    postcardSlider.style.transform =
      "translateX(" + -pCardSize * pCardCounter + "px)";
  }
});

cpPrevBtn.addEventListener("click", () => {
  pCardSize = postcardSliderItem[0].clientWidth + 8;
  if (0 < pCardCounter) {
    postcardSlider.style.transition = "transform .4s ease-in-out";
    pCardCounter--;
    postcardSlider.style.transform =
      "translateX(" + -pCardSize * pCardCounter + "px)";
  }
});

postcardSlider.addEventListener("transitionend", () => {
  if (0 < pCardCounter) {
    cpPrevBtn.style.opacity = "1";
  } else {
    cpPrevBtn.style.opacity = ".3";
  }

  if (postcardSliderItem.length - 6 > pCardCounter) {
    cpNextBtn.style.opacity = "1";
  } else {
    cpNextBtn.style.opacity = ".3";
  }
});
