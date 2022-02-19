
let radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
    return radius.map(r => Math.PI * r * r);
}

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    return radius.map(r => 2 * Math.PI * r);
}

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius) {
    return radius.map(r => 2 * r);
}

console.log(calculateDiameter(radius));