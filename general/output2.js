

if (false) {
    var a;
}

if (true) {
    let b;
    console.log(b); // undefined. (default value undefined assigned))
}

console.log(a); // undefined. (Hoisted in Global Scope and default value undefined assigned)
console.log(b); // Reference Error: b is not defined (Not available in Global Scope. Block scoped. only available with in if block)
