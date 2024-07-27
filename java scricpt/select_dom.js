// Access an element by ID
const head = document.getElementById("header-title");

// Access elements by class name
const selectByClass = document.getElementsByClassName("nav-list");

// Alternative method: Access elements by CSS selector
const alternativeHead = document.querySelector("#header-title");

// Access parent and move to child tag or class
const parentAndMoveToChild = document.querySelector("header .nav-list");

// Changing the text content
const changingTextContent = document.querySelector("#header-title");
changingTextContent.textContent = "Welcome to My Updated Page";

// Change styles
const changingStyle = document.querySelector("#about-me");
changingStyle.style.backgroundColor = "lightblue";
changingStyle.style.padding = "20px";
changingStyle.style.color = "white";

// Use innerHTML to insert HTML content
const innerHTMLInnerText = document.querySelector("#about-me");
innerHTMLInnerText.innerHTML = "<h1>About Me Updated</h1><p>New content here...</p>";

// Hover effect functions
function hoverEffect(element) {
    element.style.borderColor = 'blue';
}

function removeEffect(element) {
    element.style.borderColor = 'red';
}
