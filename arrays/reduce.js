
let arr = [5, 1, 2, 3, 6];

function findSum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

findSum();

function sumReducer(accumulator, value, index, arr) {
    return accumulator + value;
}

let sum = arr.reduce(sumReducer);
console.log(sum);

function multiply() {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    console.log(result);
}

multiply();

function multiplyReducer(accumulator, value, index, arr) {
    return accumulator * value;
}

let result = arr.reduce(multiplyReducer);
console.log(result);