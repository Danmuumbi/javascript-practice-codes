// Select the grandparent, parent, and child elements by their IDs
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Add an event listener to the grandparent element
grandparent.addEventListener('click', (event) => {
    // Show an alert when the grandparent is clicked
    alert('Grandparent clicked!');
    // Log to the console for debugging purposes
    console.log('Grandparent clicked!');
    // Uncomment the following line to stop the event from propagating further
    // event.stopPropagation();
}, false); // The false parameter sets the event listener to the bubbling phase

// Add an event listener to the parent element
parent.addEventListener('click', (event) => {
    // Show an alert when the parent is clicked
    alert('Parent clicked!');
    // Log to the console for debugging purposes
    console.log('Parent clicked!');
    // Uncomment the following line to stop the event from propagating further
    // event.stopPropagation();
}, false); // The false parameter sets the event listener to the bubbling phase

// Add an event listener to the child element
child.addEventListener('click', (event) => {
    // Show an alert when the child is clicked
    alert('Child clicked!');
    // Log to the console for debugging purposes
    console.log('Child clicked!');
    // Uncomment the following line to stop the event from propagating further
    // event.stopPropagation();
}, false); // The false parameter sets the event listener to the bubbling phase

// Explanation of the code:
// 1. We select the elements from the HTML using `document.getElementById`.
//    This allows us to manipulate these elements and listen for events on them.
// 2. We add event listeners to each of the elements (grandparent, parent, child) for the 'click' event.
// 3. When any of these elements are clicked, the corresponding function is executed.
//    - This function shows an alert and logs a message to the console.
// 4. `event.stopPropagation()` is a method that stops the event from continuing to propagate through the DOM.
//    - If uncommented, clicking on the child will only trigger the child's event handler, not the parent's or grandparent's.
// 5. The last parameter in `addEventListener` (`false`) specifies that the event should be handled in the bubbling phase (default behavior).
//    - If set to `true`, the event would be handled in the capturing phase instead.


// Event delegation example:

// Select the container element for the buttons
const buttonContainer = document.getElementById('button-container');

// Add an event listener to the button container
buttonContainer.addEventListener('click', (event) => {
    // Check if the clicked element has the class 'dynamic-button'
    if (event.target && event.target.classList.contains('dynamic-button')) {
        // Show an alert with the text content of the clicked button
        alert(event.target.textContent + ' clicked!');
    }
});

// Dynamically create a new button element
const newButton = document.createElement('button');
// Add the 'dynamic-button' class to the new button
newButton.classList.add('dynamic-button');
// Set the text content of the new button
newButton.textContent = 'Button 4';
// Append the new button to the button container
buttonContainer.appendChild(newButton);

// Explanation of the event delegation code:
// 1. We select the button container element from the HTML using `document.getElementById`.
// 2. We add an event listener to the button container for the 'click' event.
// 3. Inside the event listener function, we check if the clicked element has the class 'dynamic-button'.
//    - This ensures that only button elements with this class will trigger the alert.
// 4. We dynamically create a new button element using `document.createElement('button')`.
// 5. We add the 'dynamic-button' class to the new button and set its text content to 'Button 4'.
// 6. We append the new button to the button container using `appendChild`.
// 7. The new button will inherit the click event listener from the button container, demonstrating event delegation.
