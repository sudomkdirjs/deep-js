
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

function findMax() {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(max);
}

findMax();

function maxReducer(accumulator, value) {
    if(value > accumulator)
        return value;
    
    return accumulator;
}

let max = arr.reduce(maxReducer);
console.log(max);