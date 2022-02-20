
let arr = [5, 1, 2, 3, 6];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}

let doubleOutput = arr.map(double);
console.log(doubleOutput);

let tripleOutput = arr.map(triple);
console.log(tripleOutput);

let binaryOutput = arr.map(binary);
console.log(binaryOutput);