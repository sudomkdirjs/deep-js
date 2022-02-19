
const arr = [2, 3, 4, 5];

const square = arr.map((value) => value * value);

console.log(square);

Array.prototype.myMap = function(cbFunc) {

    let arr = this;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(cbFunc(arr[i]));
    }

    return newArr;
}

const square2 = arr.myMap((value) => value * value);

console.log(square2);