

// Functional Programming
// All functions are pure.
// Each function (area, circumference, diameter and calculate) has only one task to do. This follows single responsibility principle.
// calculate function is reusable here.
// We also followed DRY principle here.
// We created Higher Order Function (calculate).

let radius = [3, 1, 2, 4];

const area = (r) => Math.PI * r * r;

const circumference = (r) => 2 * Math.PI * r;

const diameter = (r) => 2 * r;

function calculate(radius, logic) {
    return radius.map(r => logic(r));
}

console.log(calculate(radius, area));

console.log(calculate(radius, circumference));

console.log(calculate(radius, diameter));