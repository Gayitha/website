// Function for enhanced parallax effect
function scroll() {
    var t = window.scrolly;
    var parallax = document.getElementById ("team");
    var m = -2;

    newY = m*t + b;
    parallax.style.backgroundPositionY = newY + "px";
}