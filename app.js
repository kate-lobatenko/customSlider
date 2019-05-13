const $slides = document.querySelectorAll("[data-slide='slide']");
const $slider = document.querySelector("slider");
const $iframeData = document.getElementById("iframe-data");

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
    setAttributes();
    loadEventsListeners();
}

function setAttributes() {
    $slides.forEach((slide, i) => {
        slide.addEventListener("click", slideClick);
        slide.setAttribute("slide-number", i);
        if (i < 3) {
            slide.setAttribute("data-slide-visible", "true");
        } else {
            slide.setAttribute("data-slide-visible", "false");
        }
    });
}

function loadEventsListeners() {
    const $leftControl = document.querySelector("[data-click='left']");
    const $rightControl = document.querySelector("[data-click='right']");
    $leftControl.addEventListener("click", contolsClick);
    $rightControl.addEventListener("click", contolsClick);
}

function contolsClick() {
    console.log("click on control", this);
    if (this.getAttribute("data-click") === "right") {
        console.log($slides);
        $slides[0].style.transform = "translateX(400px)";
        $slides[0].setAttribute("data-slide-visible", "false");
        $slides[3].setAttribute("data-slide-visible", "true");
    } else {
        console.log($slides);
        $slides[0].style.transform = "translateX(-400px)";
        $slides[0].setAttribute("data-slide-visible", "false");
    }
}

function slideClick() {
    const currentSlide = this;
    const slideNumber = currentSlide.getAttribute("slide-number");

    if (currentSlide.getAttribute("data-slide-active") !== "true") {
        $slides.forEach(slide => {
            slide.setAttribute("data-slide-active", "false");
            slide.classList.remove("active-slide");
        });

        currentSlide.setAttribute("data-slide-active", "true");
        currentSlide.classList.add("active-slide");

        $iframeData.classList.add("active-iframe");
        $iframeData.src = arrSrc[slideNumber];

    }
}