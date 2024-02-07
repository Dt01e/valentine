document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.container');
    var card = document.querySelector('.card');

    container.addEventListener("mouseenter", function () {
        card.style.top = "-90px";
    });

    container.addEventListener("mouseleave", function () {
        card.style.top = "0";
    });
});
