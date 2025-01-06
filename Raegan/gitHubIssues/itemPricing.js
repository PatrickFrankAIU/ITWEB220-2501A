function calculatePurchase() {
    let item1Price = prompt("Enter the price of the first item", "");
    let item2Price = prompt("Enter the price of the second item", "");
    let item3Price = prompt("Enter the price of the third item", "");
    let item1Quantity = prompt("Enter the quantity of the first item", "");
    let item2Quantity = prompt("Enter the quantity of the second item", "");
    let item3Quantity = prompt("Enter the quantity of the third item", "");
    let item1Subtotal = parseFloat(item1Price) * parseInt(item1Quantity);
    let item2Subtotal = parseFloat(item2Price) * parseInt(item2Quantity);
    let item3Subtotal = parseFloat(item3Price) * parseInt(item3Quantity);
    let priceBeforeTax = (+item1Subtotal + +item2Subtotal + +item3Subtotal).toFixed(2);
    let calculatedTax = (priceBeforeTax * 0.05).toFixed(2);
    let grandTotal = (+priceBeforeTax + +calculatedTax).toFixed(2);
    document.getElementById("checkoutMessage").innerHTML = "Thank you for your purchase!";
    document.getElementById("subtotal").innerHTML = `Subtotal: ${priceBeforeTax}`;
    document.getElementById("tax").innerHTML = `Tax: ${calculatedTax}`;
    document.getElementById("grandTotal").innerHTML = `Total: ${grandTotal}`;
}