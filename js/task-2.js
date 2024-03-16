
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Ukraine", 500, 50)); 
console.log(getShippingMessage("USA", 1000, 100)); 
console.log(getShippingMessage("Germany", 1500, 75)); 