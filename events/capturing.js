// Event Capturing aka Event Trickling (event propagates from parent to child elements)


document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log('Grandparent Clicked!');
    }, true);

    // Third argument is useCapture flag. which is false by default. 
    // we need to set it to true for Event Capturing.

document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log('Parent Clicked!');
    }, true);

document.querySelector('#child')
    .addEventListener('click', () => {
        console.log('Child Clicked!');
    }, true);

/**
 * * Outputs
 * * when i click grandparent div element
 * (callback of grandparent event will be invoked)
 * it will print 
 * Grandparent Clicked!
 * 
 * * when i click parent div element
 * (callback of grandparent event will be invoked and then callback of parent event will be invoked)
 * it will print 
 * Grandparent Clicked!
 * Parent Clicked!
 * 
 *  * when i click child div element
 * (callback of grandparent event will be invoked and then callback of parent event will be invoked 
 * and then callback of child event will be invoked)
 * it will print 
 * Grandparent Clicked!
 * Parent Clicked!
 * Child Clicked!
 */