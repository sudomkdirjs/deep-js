// Event Capturing aka Event Trickling (event propagates from parent to child elements)
// Event Bubbling (event propagates from child to parent elements)

/**
 * * Event Cycles: Capturing, Target , Bubbling
 * First Capturing cycle will start
 * Once it reaches the target element
 * then Bubbling cycle will start.
*/

document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log('Grandparent Clicked!');
    }, true); // Capturing

    // Third argument is useCapture flag. which is false by default. 
    // we need to set it to true for Event Capturing.

document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log('Parent Clicked!');
    }, false); // Bubbling

document.querySelector('#child')
    .addEventListener('click', () => {
        console.log('Child Clicked!');
    }, true); // Capturing

/**
 * * Outputs
 * * when i click grandparent div element
 * (callback of grandparent event will be invoked)
 * it will print 
 * Grandparent Clicked!
 * 
 * * when i click parent div element
 * (callback of grandparent event will be invoked and then callback of parent event will be invoked)
 * Even though useCapture flag is false in parent div element, 
 * Event Capturing cycle starts first always, since grandparent callback is event capture,
 * callback of grandparent event will be invoked first.
 * it will print 
 * Grandparent Clicked!
 * Parent Clicked!
 * 
 *  * when i click child div element
 * (callback of grandparent event will be invoked and then callback of child event will be invoked 
 * and then callback of parent event will be invoked)
 * Event Capturing cycle starts first always, since grandparent callback is event capture,
 * callback of grandparent event will be invoked first.
 * since parent callback is event bubbling,
 * callback of parent event will be invoked later(last here) during Bubbling cycle.
 * since child callback is event capture,
 * callback of child event will be invoked second.
 * it will print 
 * Grandparent Clicked!
 * Child Clicked!
 * Parent Clicked!
 */