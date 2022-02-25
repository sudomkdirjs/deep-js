/**
 * Throttling in JavaScript
 * This is mainly for improving the performance of the web page.
 * Mainly used for Limiting the rate of execution of a particular function.
 * Real life Use case: if we want to track the user's resizing behavior. (there could be thousand of resize event will occur) 
 */


let count = 0;

const getData = () => {
    // API call to fetch the search-box list
    console.log(`getData + ${++count}`);
}

// throttle function
// we should call getData API after the delay
// first time getData API will be invoked.
// Only after the delay getData API will be invoked again.
const optimizeButtonClick = function(func, delay) {

    let flag = true;

    return function() {
        let context = this;
        let args = arguments;
        if (flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

let windowResizeCount = 0; 
const optimizedButtonClick = optimizeButtonClick(getData, 5000);

const trackWindowResize = () => {
    // API to track window resize behavior of the user.
    console.log(`Window Resize: ${++windowResizeCount}`)
}

// throttle function
// we should call trackWindowResize API after the delay
// first time trackWindowResize API will be invoked.
// Only after the delay trackWindowResize API will be invoked again.
const throttle = function(func, delay) {

    let flag = true;

    return function() {
        let context = this;
        let args = arguments;
        if (flag) {
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
                func.apply(context, args);
            }, delay);
        }
    }
}

const optimizeWindowResize = throttle(trackWindowResize, 5000);

window.addEventListener('resize', optimizeWindowResize);