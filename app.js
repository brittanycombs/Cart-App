let cartQuantity = 0;
const quantity = document.querySelector("#quantity");
quantity.addEventListener("click", function(){
console.log(`Cart quantity: ${cartQuantity}`)});

const addToCart = document.querySelector("#addToCart");
addToCart.addEventListener("click", function(){
    cartQuantity = cartQuantity + 1;
    console.log(`Cart quantity: ${cartQuantity}`)
});

const plusTwo = document.querySelector("#plusTwo");
plusTwo.addEventListener("click", function(){
    cartQuantity = cartQuantity + 2;
    console.log(`Cart quantity: ${cartQuantity}`)
});

const plusThree = document.querySelector("#plusThree");
plusThree.addEventListener("click", function(){
    cartQuantity = cartQuantity + 3;
    console.log(`Cart quantity: ${cartQuantity}`)
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    cartQuantity = 0;
    console.log(`Cart quantity: ${cartQuantity}`)
});