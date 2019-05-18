const $slides = document.querySelectorAll("[data-slide='slide']");
const $slider = document.querySelector("slider");
const $iframeData = document.getElementById("iframe-data");
const $leftControl = document.querySelector("[data-click='left']");
const $rightControl = document.querySelector("[data-click='right']");

const arrSrc = [
    "https://kate-lobatenko.github.io/puzzle15/",
    "https://kate-lobatenko.github.io/Solitaire/",
    "https://kate-lobatenko.github.io/labyrinth/",
    "https://kate-lobatenko.github.io/MODUSversus/",
];

window.addEventListener('load', function () {
    new initSlider;
});

function initSlider() {
    setAttributes(3); // set amount of visible slides
    loadEventsListeners();
}

function setAttributes(slidesQuantity) {
    $slides.forEach((slide, i) => {
        slide.addEventListener("click", slideClick);
        slide.setAttribute("slide-number", i);
        if (i < slidesQuantity) {
            slide.setAttribute("data-slide-visible", "true");
        } else {
            slide.setAttribute("data-slide-visible", "false");
        }
        if (i === slidesQuantity - 1) {
            slide.classList.add("last-visible-slide");
        }
        if (i === 0) {
            slide.classList.add("first-visible-slide");
        }
    });
}

function loadEventsListeners() {

    $leftControl.addEventListener("click", contolsClick);
    $rightControl.addEventListener("click", contolsClick);
}

function contolsClick() {
    const $firstSlide = document.querySelector(".first-visible-slide");
    const $lastSlide = document.querySelector(".last-visible-slide");
    const slideNumber = $firstSlide.getAttribute("slide-number");
    console.log($firstSlide);
    console.log(slideNumber);
    console.log($slides);

    if (this.getAttribute("data-click") === "right") {
        console.log($slides);
        // $firstSlide.style.transform = "translateX(-400px)";
        // $firstSlide.setAttribute("data-slide-visible", "false");
        // $lastSlide.setAttribute("data-slide-visible", "true");
    } else {
        console.log($slides);
        // $firstSlide.style.transform = "translateX(-400px)";
        // $firstSlide.setAttribute("data-slide-visible", "false");
    }
}

function slideClick() {
    const currentSlide = this;
    const slideNumber = currentSlide.getAttribute("slide-number");

    $iframeData.classList.remove("active-iframe");

    $slides.forEach(slide => {
        slide.setAttribute("data-slide-active", "false");
        slide.classList.remove("active-slide");
    });

    currentSlide.setAttribute("data-slide-active", "true");
    currentSlide.classList.add("active-slide");

    $iframeData.src = arrSrc[slideNumber];
    setTimeout(() => $iframeData.classList.add("active-iframe"), 500);

}