window.addEventListener('load', function () {
    new init;
});

function init() {
    initSlider();
}

function initSlider() {
    drawSlider();
    loadEventsListeners();
}

function drawSlider() {
    const $wrapper = document.getElementsByClassName("wrapper");
    console.log($wrapper);
}

function loadEventsListeners() {

}