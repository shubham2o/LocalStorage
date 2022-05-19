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


// HTML DOM Element matches()
// EXAMPLE 1 ||
const element = document.getElementById("demo");
let text;
if (element.matches(".container")) {
    text = "This element matches the CSS selector";
} else {
    text = "This element does not match the CSS selector";
}
document.getElementById("demo").innerHTML = text;


// EXAMPLE 2 ||
var element2 = document.getElementById("myElement");
if (element2.matches(".container, .wrapper")) {
    element2.innerHTML = "This element matches either the \".container\" CSS selector or the \".wrapper\" selector.";
} else {
    element2.innerHTML = "This element does not match any of the selectors.";
}