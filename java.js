// var y = 0;
// var xx = [];
// var times = 2000;

// xx[0] = 'pix/huawei-pura-701920desktop.jpg';
// xx[1] = 'pix/superflex1920desktop-min0_1.jpg';
// xx[2] = 'pix/samsung-a251920desktop-min_0.jpg';


// function b(){
// document.slide2.src=xx[y];

// if (y < xx.length - 1) {
//   y++;
// } else {
//   y = 0;
// }

// setTimeout(b,times);
// }
// window.onload=b;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;

let leftValue = 0;

// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}
