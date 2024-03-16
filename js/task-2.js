
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Ukraine", 120, 50)); 
console.log(getShippingMessage("USA", 80, 20)); 
console.log(getShippingMessage("Germany", 100, 20)); 