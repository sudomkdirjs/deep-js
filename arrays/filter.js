
let arr = [5, 1, 2, 3, 6];

function isOdd(x) {
    return x % 2 !== 0;
}

function isEven(x) {
    return  x % 2 === 0;
}

let oddOutput = arr.filter(isOdd);
console.log(oddOutput);

let evenOutput = arr.filter(isEven);
console.log(evenOutput);