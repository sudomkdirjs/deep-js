/**
 * Debouncing in JavaScript
 * This is mainly for improving the performance of the web page.
 * Mainly used for Limiting the rate of execution of a particular function.
 * Real life Use Case: Flipkart or Amazon Search Box.
 */

let count = 0;

const getData = () => {
    // API call to fetch the search-box list
    console.log(`getData + ${++count}`);
}

// this debounce method will avoid unnecessary getData(API) call;
// Only make call if the difference between two keystroke(keyup) is greater than 300ms
// Only make call if the difference between the time interval between two function call is greater than the delay.
// Only if we give pause while typing the API call will happen.
// Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
const debounce = function (func, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

const optimizedGetData = debounce(getData, 1000);