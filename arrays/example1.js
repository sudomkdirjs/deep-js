
// Check whether the Index is there or not. Return boolean.
const first = 2 in [1, 2];
const second = 2 in [0, 1, 1];
const third = '2' in [0, 1, 1];

console.log(first); // false. because index 2 is not present in the array.
console.log(second); // true. because index 2 is present in the array.
console.log(third); // true. because index 2 is present in the array.
