// Stop Propagation method (event.stopPropagation()) used to stop the Event Propagation.

document.querySelector('#grandparent')
    .addEventListener('click', (event) => {
        console.log('Grandparent Clicked!');
        event.stopPropagation();
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
*  * when i click child div element
 * (callback of grandparent event will be invoked)
 * because of Event Capturing
 * because of event.stopPropagation();, event will be stopped propagating further.
 * it will print 
 * Grandparent Clicked!
 * 
* * when i click parent div element
 * (callback of grandparent event will be invoked)
 * because of Event Capturing
 * because of event.stopPropagation();, event will be stopped propagating further.
 * it will print 
 * Grandparent Clicked!
 * 
* * when i click grandparent div element
 * (callback of grandparent event will be invoked)
 * because of Event Capturing
 * because of event.stopPropagation();, event will be stopped propagating further.
 * it will print 
 * Grandparent Clicked!
 */