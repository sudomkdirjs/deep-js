function Product(title, price) {
    this.title = title;
    this.price = price;
}

Product.prototype.owner = 'owner';
Product.prototype.displayProduct = function() {
    console.log(this);
};

let p1 = new Product('p1', 1000);
let p2 = new Product('p2', 2000);

p1.displayProduct = function() {
    console.log(`${this.title} product details`);
    console.log(this);
};

p1.displayProduct();
p2.displayProduct();
p1.displayProduct.call(p2);

// Explanations:
// p1 has its own method for display product details.
// p2 uses prototype method for display product details.
// .call invokes a p display method with the context of p2