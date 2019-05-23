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

const visibleSlides = [];

window.addEventListener('load', function () {
    new initSlider;
});

function initSlider() {
    setAttributes(3); // set amount of visible slides and settings for them
    loadEventsListeners();
}

function setAttributes(slidesQuantity) {
    $slides.forEach((slide, i) => {
        slide.addEventListener("click", slideClick);
        slide.setAttribute("slide-number", i);
        
        // if (i < slidesQuantity) {
        //     slide.setAttribute("data-slide-visible", "true");    
        //     visibleSlides.push(i);        
        // } else {
        //     slide.setAttribute("data-slide-visible", "false");
        // }
        // if (i === slidesQuantity - 1) {
        //     slide.classList.add("last-visible-slide");
        // }
        // if (i === 0) {
        //     slide.classList.add("first-visible-slide");
        // }
    });
}

function loadEventsListeners() {
    $leftControl.addEventListener("click", contolsClick);
    $rightControl.addEventListener("click", contolsClick);
}

function contolsClick() {
    // let $firstSlide = document.querySelector(".first-visible-slide");
    // let $lastSlide = document.querySelector(".last-visible-slide");
    // let slideFirstNumber = $firstSlide.getAttribute("slide-number");
    // let slideLastNumber = $lastSlide.getAttribute("slide-number");
    // let slidePrevFirst = Number(slideFirstNumber) - 1;
    // let slideNextFirst = Number(slideFirstNumber) + 1;
    // let slideNextLast = Number(slideLastNumber) + 1;
    // let slidePrevLast = Number(slideLastNumber) - 1;
    // console.log("contolsClick, visibleSlides array =",visibleSlides);

    // if($slides[slidePrevFirst] === "undefined" || $slides[slidePrevFirst] == null) {
    //     $leftControl.setAttribute("data-visible", "false");
    // }

    // if($slides[slideNextLast] === "undefined" || $slides[slideNextLast] == null) {
    //     $rightControl.setAttribute("data-visible", "false");
    // }

    // if (this.getAttribute("data-click") === "right") {
    //     if ($leftControl.getAttribute("data-visible") !== "true") {
    //         $leftControl.setAttribute("data-visible", "true");
    //     }
    // }

    //     $lastSlide.classList.remove("last-visible-slide");
    //     $lastSlide = $slides[slideNextLast];
        
    //     $firstSlide = $slides[slideNextFirst];
    //     $firstSlide.classList.remove("first-visible-slide");

    //     $lastSlide.classList.add("last-visible-slide");
    //     $firstSlide.classList.add("first-visible-slide");

    //     visibleSlides.push(slideNextLast);
    //     visibleSlides.shift();

    //     $slides.forEach((slide, i) => {
    //         slide.setAttribute("data-slide-visible", "true");
    //     });

    //     $firstSlide.setAttribute("data-slide-visible", "false");
    //     console.log("visibleSlides after right click:", visibleSlides);

    // } else if (this.getAttribute("data-click") === "left"){
    //     $lastSlide.classList.remove("last-visible-slide");
    //     $lastSlide = $slides[slidePrevFirst];
    //     $lastSlide.setAttribute("data-slide-visible", "true");

    //     $firstSlide.classList.remove("first-visible-slide");
    //     $firstSlide = $slides[slidePrevFirst];

    //     $lastSlide.classList.add("last-visible-slide");
    //     $firstSlide.classList.add("first-visible-slide");

    //     visibleSlides.shift();
    //     visibleSlides.unshift(slidePrevFirst);
        
    //     visibleSlides.forEach((slide) => {
    //         slide.setAttribute("data-slide-visible", "true");
    //     });

    //     $firstSlide.setAttribute("data-slide-visible", "false");
    //     console.log("visibleSlides after left click:", visibleSlides);
    // }
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