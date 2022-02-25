

if (false) {
    var a;
}

if (true) {
    let b;
    console.log(b); // undefined. (default value undefined assigned))
}

console.log(a); // undefined. (Hoisted and default value undefined assigned)

if (true) {
    console.log(c); // Reference Error: cannot access c before initialization. (Will be in temporal dead zone till value assigned to it.)
    let c;
}
