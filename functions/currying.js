// Currying
//  Transform function
// Two ways to achieve currying in javascript.
// 1. bind 2. closure

// Currying using function's bind method.

function multiply(x, y) {
    return x * y;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(25));

let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(5));
console.log(multiplyByThree(25));


// Currying using Closure.

function add(x) {
    return function (y) {
        return x + y;
    }
}

let plusTwo = add(2);
console.log(plusTwo(19));
console.log(plusTwo(50));

let plusThree = add(3);
console.log(plusThree(19));
console.log(plusThree(50));