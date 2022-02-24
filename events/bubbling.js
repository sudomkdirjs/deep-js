// Event Bubbling (event propagates from child to parent elements)

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
    .addEventListener('click', () => {
        console.log('Child Clicked!');
    });


/**
 * * Outputs
 * * when i click grandparent div element
 * (callback of grandparent event will be invoked)
 * it will print 
 * Grandparent Clicked!
 * 
 * * when i click parent div element
 * (callback of parent event will be invoked and then callback of grandparent event will be invoked)
 * it will print 
 * Parent Clicked!
 * Grandparent Clicked!
 * 
 *  * when i click child div element
 * (callback of child event will be invoked and then callback of parent event will be invoked 
 * and then callback of grandparent event will be invoked)
 * it will print 
 * Child Clicked!
 * Parent Clicked!
 * Grandparent Clicked!
 */