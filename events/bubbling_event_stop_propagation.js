// Stop Propagation method (event.stopPropagation()) used to stop the Event Propagation.

document.querySelector('#grandparent')
    .addEventListener('click', () => {
        console.log('Grandparent Clicked!');
    }, false);

    // Third argument is useCapture flag. which is false by default.

document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log('Parent Clicked!');
    });

document.querySelector('#child')
    .addEventListener('click', (event) => {
        console.log('Child Clicked!');
        event.stopPropagation();
    });


/**
 * * Outputs
*  * when i click child div element
 * (callback of child event will be invoked)
 * because of event.stopPropagation();, event will be stopped propagating further.
 * it will print 
 * Child Clicked!
 * 
 * * when i click parent div element
 * (callback of parent event will be invoked and then callback of grandparent event will be invoked)
 * because there is no event.stopPropagation(); here. 
 * it will print 
 * Parent Clicked!
 * Grandparent Clicked!
 * 
 * * when i click grandparent div element
 * (callback of grandparent event will be invoked)
 * it will print 
 * Grandparent Clicked!
 */