

const divide = (a, b) => a / b;

const calculate = function(valueOne = 2, valueTwo=divide(10, valueOne)) {
    console.log(valueOne, valueTwo)
    return valueOne + valueTwo * valueOne;
}

console.log(calculate(null));

// Both valueOne and valueTwo has default assignments.
// However, valueOne gets assigned to null, so the default assignment is never used.
// valueTwo is now 10/null, which evaluates to 10/0 which is infinity (in the universe of JS).
// That was "null + infinity * null".... But it's still NaN.