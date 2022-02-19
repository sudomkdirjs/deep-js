
// A function which takes another function as a argument/input Or A function which return another function is called Higher Order Function.

// This function y is called Higher Order Function. Because it receives another function in argument.
function y(func) {
    console("Function y");

    func();
}


// This function x is called Callback function (synchronous callback). Because it passed into another function as argument.
function x() {
    console("Function x");
}

y(x);