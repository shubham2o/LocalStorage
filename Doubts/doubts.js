// preventDefault() Event Method
// EXAMPLE 1 ||
document.getElementById("myAnchor").addEventListener("click", function (event) {
    event.preventDefault();
});


// EXAMPLE 2 ||
document.getElementById("myCheckbox").addEventListener("click", function (event) {
    event.preventDefault();
});


// Form reset() Method
// EXAMPLE 1 ||
function myReset1() {
    document.getElementById("myForm").reset();
}