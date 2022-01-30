// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

// Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.

// JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

// Let's create an object o from function F with its own properties a and b:
let F = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new F(); // {a: 1, b: 2}
 
 // add properties in F function's prototype
 F.prototype.b = 3;
 F.prototype.c = 4;
 
 // do not set the prototype F.prototype = {b:3,c:4}; this will break the prototype chain
 // o.[[Prototype]] has properties b and c.
 // o.[[Prototype]].[[Prototype]] is Object.prototype.
 // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
 // This is the end of the prototype chain, as null,
 // by definition, has no [[Prototype]].
 // Thus, the full prototype chain looks like:
 // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
 
 console.log(o.a); // 1
 // Is there an 'a' own property on o? Yes, and its value is 1.
 
 console.log(o.b); // 2
 // Is there a 'b' own property on o? Yes, and its value is 2.
 // The prototype also has a 'b' property, but it's not visited.
 // This is called Property Shadowing
 
 console.log(o.c); // 4
 // Is there a 'c' own property on o? No, check its prototype.
 // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
 
 console.log(o.d); // undefined
 // Is there a 'd' own property on o? No, check its prototype.
 // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
 // o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
 // o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
 // no property found, return undefined.


// JavaScript does not have "methods" in the form that class-based languages define them. In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).

// When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.
 var o = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };
  
  console.log(o.m()); // 3
  // When calling o.m in this case, 'this' refers to o
  
  var p = Object.create(o);
  // p is an object that inherits from o
  
  p.a = 4; // creates a property 'a' on p
  console.log(p.m()); // 5
  // when p.m is called, 'this' refers to p.
  // So when p inherits the function m of o,
  // 'this.a' means p.a, the property 'a' of p

  

 