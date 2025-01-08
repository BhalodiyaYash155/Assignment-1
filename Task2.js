let cart = [];

function addProduct(productName, price, quantity){
    cart.push({productName, price, quantity});
}

function calculateTotal(){
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

const removeProduct = (productName) =>{
    cart = cart.filter((product) => product.productName !== productName);
}

function logCartDetails() {
    console.log("\nCart Summary:\n");
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product Name: ${productName}, Price: ${"₹" + price}, Quantity: ${quantity}`);
    });
}

addProduct("Laptop", 60000, 1);
addProduct("Chips", 10, 15);
addProduct("T-shirts", 300, 3);

logCartDetails();
console.log();

console.log("Total Cost: $", calculateTotal());

removeProduct("T-shirts");

logCartDetails();

console.log();
console.log("Updated Cost: $", calculateTotal());