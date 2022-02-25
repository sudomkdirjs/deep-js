/**
 * Event Delegation is a technique of handling events in webpage in a better way.
 * Event Delegation is based upon the concept of event bubbling.
 * 
 * Instead of having event handlers for every child elements, 
 * we can have only one event element for parent component.
 * example: E-commerce website
 * Categories -> Electronics -> Laptops, Personal Computers, Mobiles, Cameras, Televisions etc.
 * If i click any item example. 
 * if i click Laptops link it will go to Laptops page,
 * if i click Mobiles link it will go to Mobiles page
 * We can have one Single Event handler in parent (Electronics) and handle all the items events
 * Even if we click the child component, parent element's callback will be invoked.(Event bubbling concept)
 * 
 ** Benefits of Event Delegation
 * Memory Saving. We are attaching single event handler. It gives good performance.
 * Writing less code.
 * DOM Manipulation. Infinite Scrolling case child elements are rendered dynamically. 
 *  With single Event handler in Parent element we can handle all child element's events.
 ** Limitations:
 * Few events are not bubbled up (examples: blur, focus, resizing of the window.). but all major events (click, keyup, keydown, keypress) are bubbles up.
 * we can't use event.stopPropagation() in child. if we use we can't delegate event to parent because event will be stopped in child itself.
 */

let electronicsCategoryElement = document.querySelector("#electronics-category");

electronicsCategoryElement.addEventListener("click", (event) => {
    console.log("Electronics Category Clicked!");
    console.log(event.target); // print the exact element
    if (event.target.tagName === 'li') {
        window.location.href = "/" + event.target.id;
    }
});

let formElement = document.querySelector("form#form");

formElement.addEventListener("keyup", (event) => {
    console.log(event); // print the exact element
    // Any element within form has data-uppercase attribute, its value will be converted into upper case.
    // We written this logic once. used in multiple elements.
    // This pattern is called as behavior pattern.
    if (event.target.dataset.hasOwnProperty("uppercase")) {
        event.target.value = event.target.value.toUpperCase();
    }

    if (event.target.value.trim() !== '' && event.target.dataset.hasOwnProperty("indiaPhoneCode")) {
        if (event.target.value.trim().length === 1) {
            event.target.value = "+91 " + event.target.value.trim();
        } else {
            event.target.value = "+91 " + event.target.value.trim().slice(4);
        }
    }
});