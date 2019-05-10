window.addEventListener('load', function () {
    new initSlider;
});

function initSlider() {
    drawSlider();
    loadEventsListeners();
}

function drawSlider() {
    const $wrapper = document.getElementsByClassName("wrapper");
    console.log($wrapper);
}

function loadEventsListeners() {
    const $leftControl = document.querySelector("[data-click='left']");
    const $rightControl = document.querySelector("[data-click='right']");
    $leftControl.addEventListener("click", contolsClick);
    $rightControl.addEventListener("click", contolsClick);
}

function contolsClick() {
    console.log("click on control");
    this.style.transform = "translateX(450)";
}